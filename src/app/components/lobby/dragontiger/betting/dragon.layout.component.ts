import * as PIXI from 'pixi.js';
import {
  BettingSharedGlobal
} from './betting.shared.global';

export class DragonLayoutComponent {
  constructor() {}

  private _dragonGraphics            = new PIXI.Graphics();
  private _dragonConfirmGraphics     = new PIXI.Graphics();
  private _dragonLabelArrowGraphics  = new PIXI.Graphics();
  private _dragonLabelBGGraphics     = new PIXI.Graphics();
  private _dragonLabelGraphics       = new PIXI.Graphics();
  private _dragonLabelContainer      = new PIXI.Container();
  private _dragonCheckGraphics       = new PIXI.Graphics();
  private _dragonCheckContainer      = new PIXI.Container();
  private _dragonCheckCircleGraphics = new PIXI.Graphics();
  private _dragonHoverGraphics       = new PIXI.Graphics();
  private _dragonContainer           = new PIXI.Container();
  private _dragonTextContainer       = new PIXI.Container();
  private _dragonBounds : any        =  null;

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

  private _dragonLabelText      = new PIXI.Text(0, this._style);
  private _dragonText           = new PIXI.Text('DRAGON', this._style);
  private _dragonMultiplierText = new PIXI.Text('1:1', this._style);

  build() {
    this
    .initializeDragonGraphicsContainer()
    .initializeDragonConfirmGraphics()
    .initializeDragonLabel()
    .initializeDragonLabelCheck()
    .initializeDragonHoverGraphics()
    .initializeDefaultConfig()
    .initializeDefaultEvents()
    .addAll()

    return this._dragonContainer;
  }

  initializeDragonGraphicsContainer() {
    //container dragon
    this._dragonGraphics.beginFill(0x7FAB7D,0.4);
    this._dragonGraphics.lineStyle(0, 0xffd900, 1);
    // draw a shape
    this._dragonGraphics.moveTo(250, 230);
    this._dragonGraphics.lineTo(285, 135);
    this._dragonGraphics.bezierCurveTo(270, 130, 195, 120, 170, 115);
    this._dragonGraphics.lineTo(90, 200);
    this._dragonGraphics.bezierCurveTo(95, 205, 150, 220, 260, 235);
    this._dragonGraphics.lineTo(418, 235);
    this._dragonGraphics.endFill();

    return this;
  }

  initializeDragonConfirmGraphics() {
    //confirm dragon
    this._dragonConfirmGraphics.lineStyle(5, 0x0752FF, 1);
    // draw a shape
    this._dragonConfirmGraphics.moveTo(243, 222);
    this._dragonConfirmGraphics.lineTo(273, 140);
    this._dragonConfirmGraphics.bezierCurveTo(265, 140, 195, 130, 170, 125);
    this._dragonConfirmGraphics.lineTo(106, 194);
    this._dragonConfirmGraphics.bezierCurveTo(115, 196, 150, 208, 210, 216);
    this._dragonConfirmGraphics.lineTo(243, 222);

    return this;
  }

  initializeDragonLabel() {
    this._dragonLabelArrowGraphics.beginFill(0xFF700B, 1);
    this._dragonLabelArrowGraphics.drawRect(0, 0, 20, 20);

    this._dragonLabelBGGraphics.beginFill(0x131313);
    this._dragonLabelBGGraphics.drawRoundedRect(0, 0, 150,30, 18);
    this._dragonLabelBGGraphics.endFill();

    this._dragonLabelGraphics.beginFill(0xFF700B);
    this._dragonLabelGraphics.drawRoundedRect(0, 0, 150, 33, 19);
    this._dragonLabelGraphics.endFill();

    return this;
  }

  initializeDragonLabelCheck() {
    this._dragonCheckCircleGraphics.beginFill(0x373737, 1);
    this._dragonCheckCircleGraphics.drawCircle(267,102,12);
    this._dragonCheckCircleGraphics.endFill();

    this._dragonCheckGraphics.lineStyle(4, 0xFAFAFA, 1);
    this._dragonCheckGraphics.moveTo(258.5, 102.5);
    this._dragonCheckGraphics.lineTo(264.5, 106.5);
    this._dragonCheckGraphics.lineTo(274.5, 98);
    this._dragonCheckGraphics.lineCap = 'square';
    this._dragonCheckGraphics.lineJoin = 'bevel';

    this._dragonCheckContainer.addChild(this._dragonCheckCircleGraphics, this._dragonCheckGraphics);
    this._dragonCheckContainer.x
    this._dragonCheckContainer.y

    return this;
  }

  initializeDragonHoverGraphics() {
    this._dragonHoverGraphics.lineStyle(5, 0x06CA0D, 1);
    this._dragonHoverGraphics.moveTo(112, 175);
    this._dragonHoverGraphics.lineTo(90, 200);
    this._dragonHoverGraphics.lineTo(125, 210);
    this._dragonHoverGraphics.moveTo(253, 128);
    this._dragonHoverGraphics.lineTo(286, 132);
    this._dragonHoverGraphics.lineTo(275, 159);
    this._dragonHoverGraphics.moveTo(258, 203);
    this._dragonHoverGraphics.lineTo(249, 232);
    this._dragonHoverGraphics.lineTo(213, 227);
    this._dragonHoverGraphics.moveTo(198, 121);
    this._dragonHoverGraphics.lineTo(168, 116);
    this._dragonHoverGraphics.lineTo(149, 137);

    BettingSharedGlobal._dragonHoverContainer.addChild(this._dragonHoverGraphics);
    BettingSharedGlobal._dragonHoverContainer.visible = false;

    return this;
  }

  initializeDefaultConfig() {
    this._dragonGraphics.position.x = 0;
    this._dragonGraphics.position.y = 0;
    this._dragonGraphics.visible    = false;

    this._dragonConfirmGraphics.position.x = 0;
    this._dragonConfirmGraphics.position.y = 0;
    this._dragonConfirmGraphics.visible    = false;

    this._dragonText.x = 166;
    this._dragonText.y = 134;
    this._dragonText.rotation = 0.35;
    this._dragonText.skew.x = -0.1;
    this._dragonText.skew.y = -0.2;

    this._dragonMultiplierText.x = 168;
    this._dragonMultiplierText.y = 180;
    this._dragonMultiplierText.rotation = 0.4;
    this._dragonMultiplierText.skew.x = -0.1;
    this._dragonMultiplierText.skew.y = -0.2;

    this._dragonLabelArrowGraphics.position.x = 208;
    this._dragonLabelArrowGraphics.position.y = 97;
    this._dragonLabelArrowGraphics.rotation = 0.90;

    this._dragonLabelBGGraphics.position.x = 140;
    this._dragonLabelBGGraphics.position.y = 74;
    this._dragonLabelBGGraphics.skew.x = 0.0;
    this._dragonLabelBGGraphics.rotation = 0.10;

    this._dragonLabelGraphics.position.x = 140;
    this._dragonLabelGraphics.position.y = 74;
    this._dragonLabelGraphics.skew.x = 0.0;
    this._dragonLabelGraphics.rotation = 0.10;

    this._dragonLabelContainer.position.x  = 9;
    this._dragonLabelContainer.position.y  = 5;
    this._dragonLabelContainer.visible     = true;
    this._dragonLabelContainer.interactive = true;
    this._dragonLabelContainer.buttonMode  = true;

    this._dragonLabelText.x = 180;
    this._dragonLabelText.y = 84;
    this._dragonLabelText.rotation = 0.1;
    this._dragonLabelText.skew.x = 0;
    this._dragonLabelText.skew.y = 0;

    this._dragonBounds = this._dragonContainer.getBounds();

    return this;
  }

  initializeDefaultEvents() {
    /*this data must be below of the code for events*/
    this.dragonContainerEvent()

    return this;
  }

  dragonContainerEvent() {
    let self = this;
    this._dragonLabelContainer
    .on('pointerdown', function() {
      console.log('dragontiger event')
      BettingSharedGlobal._tieHoverContainer.visible    = false;
      BettingSharedGlobal._dragonHoverContainer.visible = true;
      BettingSharedGlobal._tigerHoverContainer.visible  = false;

      // self._tapCanvasLabelEmitter.emit({
      //   tapped: true,
      //   bounds: self._dragonBounds,
      //   hand: 'dragon'
      // });

    });

    return this;
  }

  addAll() {
    this._dragonTextContainer.addChild(this._dragonText, this._dragonMultiplierText);
    this._dragonLabelContainer.addChild(this._dragonLabelArrowGraphics, this._dragonLabelGraphics, this._dragonLabelBGGraphics, this._dragonCheckContainer);
    this._dragonCheckContainer.addChild(this._dragonCheckCircleGraphics, this._dragonCheckGraphics);
    BettingSharedGlobal._dragonHoverContainer.addChild(this._dragonHoverGraphics);

    this._dragonContainer.addChild(this._dragonGraphics, this._dragonConfirmGraphics, this._dragonTextContainer, this._dragonLabelContainer, BettingSharedGlobal._dragonHoverContainer);

    return this;
  }
}
