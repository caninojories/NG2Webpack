import * as PIXI from 'pixi.js';
import {
  BettingSharedGlobal
} from './betting.shared.global';
export class TieLayoutComponent {
  constructor() {}

  public _tieGraphics             = new PIXI.Graphics();
  public _tieConfirmGraphics      = new PIXI.Graphics();
  public _tieLabelArrowGraphics   = new PIXI.Graphics();
  public _tieLabelBGGraphics      = new PIXI.Graphics();
  public _tieLabelGraphics        = new PIXI.Graphics();
  public _tieLabelContainer       = new PIXI.Container();
  public _tieCheckGraphics        = new PIXI.Graphics();
  public _tieCheckContainer       = new PIXI.Container();
  public _tieCheckCircleGraphics  = new PIXI.Graphics();
  public _tieHoverGraphics        = new PIXI.Graphics();
  public _tieContainer            = new PIXI.Container();
  public _tieTextContainer        = new PIXI.Container();
  public _tieBounds : any         =  null;

  private _style = new PIXI.TextStyle({
      fontFamily: 'Arial Black',
      fontSize: 20,
      fontWeight: 'bold',
      fill: '#ffffff',
      dropShadow: true,
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 1,
  });

  public _tieLabelText      = new PIXI.Text(0, this._style);
  public _tieText           = new PIXI.Text('TIE', this._style);
  public _tieMultiplierText = new PIXI.Text('1:8', this._style);

  build() {
    this
    .initializeTieGraphicsContainer()
    .initializeTieConfirmGraphics()
    .initializeTieLabel()
    .initializeTieLabelCheck()
    .initializeTieHoverGraphics()
    .initializeDefaultConfig()
    .initializeDefaultEvents()
    .addAll()

    return this._tieContainer;
  }

  initializeDefaultConfig() {
    this._tieGraphics.position.x  = 0;
    this._tieGraphics.position.y  = 0;
    this._tieGraphics.visible     = false;

    this._tieConfirmGraphics.position.x  = 0;
    this._tieConfirmGraphics.position.y  = 0;
    this._tieConfirmGraphics.visible     = false;

    this._tieText.x = 315;
    this._tieText.y = 150;
    this._tieMultiplierText.x = 315;
    this._tieMultiplierText.y = 200;

    this._tieLabelArrowGraphics.position.x = 324;
    this._tieLabelArrowGraphics.position.y = 106;
    this._tieLabelArrowGraphics.rotation = 0.75;

    this._tieLabelBGGraphics.position.x = 250;
    this._tieLabelBGGraphics.position.y = 90;
    this._tieLabelBGGraphics.rotation = -0.0;

    this._tieLabelGraphics.position.x = 250;
    this._tieLabelGraphics.position.y = 90;
    this._tieLabelGraphics.rotation = -0.0;

    this._tieLabelContainer.position.x   = 9;
    this._tieLabelContainer.position.y   = 5;
    this._tieLabelContainer.visible      = true;
    this._tieLabelContainer.interactive  = true;
    this._tieLabelContainer.buttonMode   = true;

    this._tieLabelText.x = 300;
    this._tieLabelText.y = 95;
    this._tieLabelText.rotation = 0;
    this._tieLabelText.skew.x = 0;
    this._tieLabelText.skew.y = 0;

    this._tieBounds = this._tieContainer.getBounds();

    return this;
  }

  initializeTieGraphicsContainer() {
    this._tieGraphics.beginFill(0x7FAB7D,0.4);
    this._tieGraphics.lineStyle(0, 0xffd900, 1);
    this._tieGraphics.moveTo(418, 235);
    this._tieGraphics.lineTo(380, 130);
    this._tieGraphics.lineTo(285, 130);
    this._tieGraphics.lineTo(250, 230);
    this._tieGraphics.bezierCurveTo(255, 245, 490, 225, 430, 235);
    this._tieGraphics.lineTo(418, 235);
    this._tieGraphics.endFill();

    return this;
  }

  initializeTieConfirmGraphics() {
    this._tieConfirmGraphics.lineStyle(5, 0x00F23D, 1);
    this._tieConfirmGraphics.moveTo(405, 223);
    this._tieConfirmGraphics.lineTo(375, 142);
    this._tieConfirmGraphics.lineTo(293, 142);
    this._tieConfirmGraphics.lineTo(260, 223);
    this._tieConfirmGraphics.bezierCurveTo(280, 225, 320, 228, 380, 225);
    this._tieConfirmGraphics.lineTo(405, 223);

    return this;
  }


  initializeTieLabel() {
    this._tieLabelArrowGraphics.beginFill(0xFF700B, 1);
    this._tieLabelArrowGraphics.drawRect(0, 0, 20, 20);

    this._tieLabelBGGraphics.beginFill(0x131313);
    this._tieLabelBGGraphics.drawRoundedRect(0, 0, 150,30, 18);
    this._tieLabelBGGraphics.endFill();

    this._tieLabelGraphics.beginFill(0xFF700B);
    this._tieLabelGraphics.drawRoundedRect(0, 0, 150, 33, 19);
    this._tieLabelGraphics.endFill();

    return this;
  }

  initializeDefaultEvents() {
    /*this data must be below of the code for events*/
    this.tieContainerEvent()

    return this;
  }

  initializeTieLabelCheck() {
    this._tieCheckCircleGraphics.beginFill(0x373737, 1);
    this._tieCheckCircleGraphics.drawCircle(380,105,12);
    this._tieCheckCircleGraphics.endFill();

    this._tieCheckGraphics.lineStyle(4, 0xFAFAFA, 1);
    this._tieCheckGraphics.moveTo(371.5, 106.5);
    this._tieCheckGraphics.lineTo(377.5, 110.5);
    this._tieCheckGraphics.lineTo(387.5, 100);
    this._tieCheckGraphics.lineCap = 'square';
    this._tieCheckGraphics.lineJoin = 'bevel';

    return this;
  }

  initializeTieHoverGraphics() {
    this._tieHoverGraphics.lineStyle(5, 0x06CA0D, 1);
    this._tieHoverGraphics.moveTo(260, 200.5);
    this._tieHoverGraphics.lineTo(249, 232);
    this._tieHoverGraphics.lineTo(285, 235);
    this._tieHoverGraphics.moveTo(357, 133);
    this._tieHoverGraphics.lineTo(383, 132);
    this._tieHoverGraphics.lineTo(390, 154);
    this._tieHoverGraphics.moveTo(407, 204);
    this._tieHoverGraphics.lineTo(416, 232);
    this._tieHoverGraphics.lineTo(378, 235);
    this._tieHoverGraphics.moveTo(312, 132);
    this._tieHoverGraphics.lineTo(286, 131);
    this._tieHoverGraphics.lineTo(278, 155);

    BettingSharedGlobal._tieHoverContainer.visible = false;
    return this;
  }

  tieContainerEvent() {
    let self = this;
    this._tieLabelContainer
    .on('pointerdown', function() {
      console.log('tie event')
      BettingSharedGlobal._tieHoverContainer.visible    = true;
      BettingSharedGlobal._dragonHoverContainer.visible = false;
      BettingSharedGlobal._tigerHoverContainer.visible  = false;

      console.log(BettingSharedGlobal._dragonHoverContainer.visible);
      // self._tapCanvasLabelEmitter.emit({
      //   tapped: true,
      //   bounds: self._tieBounds,
      //   hand: 'tie'
      // });
    });

    return this;
  }

  addAll() {
    this._tieTextContainer.addChild(this._tieText, this._tieMultiplierText);
    this._tieLabelContainer.addChild(this._tieLabelArrowGraphics, this._tieLabelGraphics, this._tieLabelBGGraphics, this._tieCheckContainer);
    this._tieCheckContainer.addChild(this._tieCheckCircleGraphics, this._tieCheckGraphics);
    BettingSharedGlobal._tieHoverContainer.addChild(this._tieHoverGraphics);

    this._tieContainer.addChild(this._tieGraphics, this._tieConfirmGraphics, this._tieTextContainer, this._tieLabelContainer, BettingSharedGlobal._tieHoverContainer);

    return this;
  }
}
