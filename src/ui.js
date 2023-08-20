import { IconPicture } from '@codexteam/icons';
import { make } from './utils/dom';

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
  /**
   * @param {object} ui - Media tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {MediaConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api, config, onSelectFile, readOnly }) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      mediaContainer: make('div', [ this.CSS.mediaContainer ]),
      fileButton: this.createFileButton(),
      mediaEl: undefined,
      mediaPreloader: make('div', this.CSS.mediaPreloader),
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
      }),
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <media-container>
     *      <media-preloader />
     *    </media-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */
    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.mediaContainer.appendChild(this.nodes.mediaPreloader);
    this.nodes.wrapper.appendChild(this.nodes.mediaContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      wrapper: 'media-tool',
      mediaContainer: 'media-tool__media',
      mediaPreloader: 'media-tool__media-preloader',
      mediaEl: 'media-tool__media-picture',
      caption: 'media-tool__caption',
    };
  };

  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: 'empty',
      UPLOADING: 'loading',
      FILLED: 'filled',
    };
  }

  /**
   * Renders tool UI
   *
   * @param {MediaToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(toolData) {
    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const button = make('div', [ this.CSS.button ]);

    button.innerHTML = this.config.buttonContent || `${IconPicture} ${this.api.i18n.t('Select an Media')}`;

    button.addEventListener('click', () => {
      this.onSelectFile();
    });

    return button;
  }

  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(src) {
    this.nodes.mediaPreloader.style.backgroundMedia = `url(${src})`;
    this.toggleStatus(Ui.status.UPLOADING);
  }

  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.mediaPreloader.style.backgroundMedia = '';
    this.toggleStatus(Ui.status.EMPTY);
  }

  /**
   * Shows a media
   *
   * @param {string} url - media source
   * @returns {void}
   */
  fillMedia(url) {
    /**
     * Check for a source extension to compose element correctly: video tag for mp4, img — for others
     */

    let tag = 'DIV'; // default value
    if(this.config.patterns.image.test(url)) {
      tag = 'IMG'
    } else if (this.config.patterns.video.test(url)) {
      tag = 'VIDEO'
    }
    const attributes = {
      src: url,
    };

    /**
     * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
     * - IMG: load
     * - VIDEO: loadeddata
     *
     * @type {string}
     */
    let eventName = 'load';

    /**
     * Update attributes and eventName if source is a video
     */
    if (tag === 'VIDEO') {
      /**
       * Add attributes for playing muted video as a gif
       *
       * @type {boolean}
       */
      attributes.autoplay = true;
      attributes.loop = true;
      attributes.muted = true;
      attributes.playsinline = true;

      /**
       * Change event to be listened
       *
       * @type {string}
       */
      eventName = 'loadeddata';
    }

    /**
     * Compose tag with defined attributes
     *
     * @type {Element}
     */
    this.nodes.mediaEl = make(tag, this.CSS.mediaEl, attributes);

    /**
     * Add load event listener
     */
    this.nodes.mediaEl.addEventListener(eventName, () => {
      this.toggleStatus(Ui.status.FILLED);

      /**
       * Preloader does not exist on first rendering with presaved data
       */
      if (this.nodes.mediaPreloader) {
        this.nodes.mediaPreloader.style.backgroundImage = '';
      }
    });

    this.nodes.mediaContainer.appendChild(this.nodes.mediaEl);
  }

  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(text) {
    if (this.nodes.caption) {
      this.nodes.caption.innerHTML = text;
    }
  }

  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(status) {
    for (const statusType in Ui.status) {
      if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }

  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(tuneName, status) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
  }
}

