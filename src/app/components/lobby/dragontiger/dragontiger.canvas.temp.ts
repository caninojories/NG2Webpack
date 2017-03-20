import * as PIXI from 'pixi.js';
import {
  BettingComponent
} from './betting/betting.component.temp';
import {
  CanvasSettings
} from '../../../shared/settings/canvas';
export class DragonTigerCanvas {
  constructor() {
    let scale = 'width' + window.innerWidth + '.height' + window.innerHeight;
    let canvassettings = new CanvasSettings(scale);

    PIXI.settings.TARGET_FPMS = 0.18;
    this._tickerRenderer  = new PIXI.Application();
    this._renderer        = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {antialias: true, resolution: window.devicePixelRatio || 1,
    autoResize:true}, true);
    this._stage     = new PIXI.Container();
    this._renderer.view.style.position = 'absolute';
    this._renderer.view.style.backgroundColor = 0x000000;
    this._renderer.view.style.top = '0';

    document.body.appendChild(this._renderer.view);
  }

  private _stage           : any;
  private _renderer        : any;
  private _tickerRenderer  : any;

  private _bettingComponent = new BettingComponent();

  init() {
    let container = this._bettingComponent.build();

    this._stage.addChild(container.tie);
    this._stage.addChild(container.dragon);
  }

  animate() {
    let self = this;
    (function noop() {
      requestAnimationFrame(noop);
      self._renderer.render(self._stage);
    })();
  }
}
