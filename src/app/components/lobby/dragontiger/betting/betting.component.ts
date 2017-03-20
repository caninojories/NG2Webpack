import {
  EmitterService
} from '../../../../shared/emitter.service';

import {
  EmitterComponent
} from '../../../../components/commons/emitter.component';

declare let PIXI;

export class BettingComponent {
  constructor(
  ) {}

  private _emitterComponent             = new EmitterComponent;
  private _chipsDroppableEmitter        = this._emitterComponent.droppableChip();

  private _hoverToCanvasDataSubscriber  = this._emitterComponent.hoverToCanvasData();
  private _chipsToCanvasDataSubscriber  = this._emitterComponent.chipsToCanvasData();
  private _clearChipsSubscriber         = this._emitterComponent.clearChipsData();
  private _tapCanvasLabelEmitter        = this._emitterComponent.tapCanvasLabel();
  // private _confirmedBetsSubscriber      = this._emitterComponent.confirmedBetsData();

  private _parentContainer              = new PIXI.Container();
  private _graphics                     = new PIXI.Graphics();
  private _bodyContainer                = new PIXI.Container();

  private _tigerGraphics                = new PIXI.Graphics();
  private _tiger_confirmGraphics        = new PIXI.Graphics();
  private _tiger_textContainer          = new PIXI.Container();
  private _tiger_labelGraphics          = new PIXI.Graphics();
  private _tiger_label_arrowGraphics    = new PIXI.Graphics();
  private _tiger_label_bgGraphics       = new PIXI.Graphics();
  private _tiger_check_circle_graphics  = new PIXI.Graphics();
  private _tiger_check_graphics         = new PIXI.Graphics();
  private _tiger_check_container        = new PIXI.Container();
  private _tiger_labelContainer         = new PIXI.Container();
  private _tiger_hover_graphics         = new PIXI.Graphics();
  private _tiger_hover_container        = new PIXI.Container();
  private _tigerContainer               = new PIXI.Container();

  private _tieGraphics                  = new PIXI.Graphics();
  private _tie_confirmGraphics          = new PIXI.Graphics();
  private _tie_textContainer            = new PIXI.Container();
  private _tie_labelGraphics            = new PIXI.Graphics();
  private _tie_label_arrowGraphics      = new PIXI.Graphics();
  private _tie_label_bgGraphics         = new PIXI.Graphics();
  private _tie_check_circle_graphics    = new PIXI.Graphics();
  private _tie_check_graphics           = new PIXI.Graphics();
  private _tie_check_container          = new PIXI.Container();
  private _tie_labelContainer           = new PIXI.Container();
  private _tie_hover_graphics           = new PIXI.Graphics();
  private _tie_hover_container          = new PIXI.Container();
  private _tieContainer                 = new PIXI.Container();

  private _dragonGraphics               = new PIXI.Graphics();
  private _dragon_confirmGraphics       = new PIXI.Graphics();
  private _dragon_textContainer         = new PIXI.Container();
  private _dragon_labelGraphics         = new PIXI.Graphics();
  private _dragon_label_arrowGraphics   = new PIXI.Graphics();
  private _dragon_label_bgGraphics      = new PIXI.Graphics();
  private _dragon_check_circle_graphics = new PIXI.Graphics();
  private _dragon_check_graphics        = new PIXI.Graphics();
  private _dragon_check_container       = new PIXI.Container();
  private _dragon_labelContainer        = new PIXI.Container();
  private _dragon_hover_graphics        = new PIXI.Graphics();
  private _dragon_hover_container       = new PIXI.Container();
  private _dragonContainer              = new PIXI.Container();

  private _background_tiger  = new PIXI.Sprite.fromImage('http://res.cloudinary.com/harold2124/image/upload/v1488179216/img_tiger_2x_wmyvqr.png');
  private _background_dragon = new PIXI.Sprite.fromImage('http://res.cloudinary.com/harold2124/image/upload/v1488179216/img_dragon_2x_yjy5dv.png');

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

  private _dragonTextValue  = 0;
  private _tieTextValue     = 0;
  private _tigerTextValue   = 0;

  private _dragon_label_Text  = new PIXI.Text(0, this._style);
  private _tie_label_Text     = new PIXI.Text(0, this._style);
  private _tiger_label_Text   = new PIXI.Text(0, this._style);

  private _dragonBounds = null;
  private _tieBounds    = null;
  private _tigerBounds  = null;

  private _hasConfirmedBets   = false;
  private _confirmedDragonBetsValue = 0;
  private _confirmedTieBetsValue = 0;
  private _confirmedTigerBetsValue = 0;

  getCanvasTableContainer() {
    return this._bodyContainer;
  }

  chipsToCanvasSubscriber(){
    this._chipsToCanvasDataSubscriber.subscribe(drop => {
      // console.log(drop);
      if (this._dragon_hover_container.visible) {

        this._dragon_label_Text.text = this._dragonTextValue + drop.value;

        this._dragon_labelContainer.addChild(this._dragon_label_Text);
        this._parentContainer.setChildIndex(this._dragonContainer, 4);

        this._dragonGraphics.visible        = true;
        this._dragon_labelContainer.visible = true;
        this._dragonTextValue += drop.value;

      } else if (this._tie_hover_container.visible) {

        this._tie_label_Text.text = this._tieTextValue + drop.value;

        this._tie_labelContainer.addChild(this._tie_label_Text);
        this._parentContainer.setChildIndex(this._tieContainer, 4);

        this._tieGraphics.visible         = true;
        this._tie_labelContainer.visible  = true;
        this._tieTextValue += drop.value;

      } else if (this._tiger_hover_container.visible) {

        this._tiger_label_Text.text = this._tigerTextValue + drop.value;

        this._tiger_labelContainer.addChild(this._tiger_label_Text);
        this._parentContainer.setChildIndex(this._tigerContainer, 4);

        this._tigerGraphics.visible        = true;
        this._tiger_labelContainer.visible = true;
        this._tigerTextValue += drop.value;
      }
    })
  }

  confirmAndClearBetsData(){
    // this._confirmedBetsSubscriber.subscribe(_ => {
    //   this._hasConfirmedBets          = true;
    //   this._confirmedDragonBetsValue  = this._dragonTextValue;
    //   this._confirmedTieBetsValue     = this._tieTextValue;
    //   this._confirmedTigerBetsValue   = this._tigerTextValue;
    //
    //   this.toggleLabelCheckFillColor(0X148900);
    //   this._dragon_hover_container.visible  = false;
    //   this._tie_hover_container.visible     = false;
    //   this._tiger_hover_container.visible   = false;
    // });

    this._clearChipsSubscriber.subscribe(data => {
      // console.log('clear', data);
      /* If user has no confirmed data, clear canvas table else update table canvas. */
      if (!this._hasConfirmedBets) {
        this.hideDragonHighlight();
        this.hideTieHighlight();
        this.hideTigerHighlight();
      } else {
        /* Update Label Text Value after clearing unconfirmed bets */
        this._dragon_label_Text.text    = this._confirmedDragonBetsValue;
        this._tie_label_Text.text       = this._confirmedTieBetsValue;
        this._tiger_label_Text.text     = this._confirmedTigerBetsValue;

        /* Revert Label Text Value after clearing unconfirmed bets */
        this._dragonTextValue           = this._confirmedDragonBetsValue;
        this._tieTextValue              = this._confirmedTieBetsValue;
        this._tigerTextValue            = this._confirmedTigerBetsValue;

        if (this._confirmedDragonBetsValue === 0) {
          this.hideDragonHighlight();
        }

        if (this._confirmedTieBetsValue === 0) {
          this.hideTieHighlight();
        }

        if (this._confirmedTigerBetsValue === 0) {
          this.hideTigerHighlight();
        }

        this.toggleLabelCheckFillColor(0X148900);
      }

      this._dragon_hover_container.visible  = false;
      this._tie_hover_container.visible     = false;
      this._tiger_hover_container.visible   = false;
    });

    /*  */
    this._chipsToCanvasDataSubscriber.subscribe(data => {
      this.toggleLabelCheckFillColor(0x373737);
    });
  }

  toggleLabelCheckFillColor(color) {
    this._dragon_check_circle_graphics.clear();
    this._dragon_check_circle_graphics.beginFill(color, 1);
    this._dragon_check_circle_graphics.drawCircle(267,102,12);
    this._dragon_check_circle_graphics.endFill();

    this._tie_check_circle_graphics.clear();
    this._tie_check_circle_graphics.beginFill(color, 1);
    this._tie_check_circle_graphics.drawCircle(380,105,12);
    this._tie_check_circle_graphics.endFill();

    this._tiger_check_circle_graphics.clear();
    this._tiger_check_circle_graphics.beginFill(color, 1);
    this._tiger_check_circle_graphics.drawCircle(490,92,12);
    this._tiger_check_circle_graphics.endFill();
  }

  hideDragonHighlight() {
    this._dragonTextValue                 = 0;
    this._dragon_label_Text.text          = 0;
    this._dragon_labelContainer.visible   = false;
    this._dragon_hover_container.visible  = false;
    this._dragonGraphics.visible          = false;
  }

  hideTieHighlight() {
    this._tieTextValue                    = 0;
    this._tie_label_Text.text             = 0;
    this._tie_labelContainer.visible      = false;
    this._tie_hover_container.visible     = false;
    this._tieGraphics.visible             = false;
  }

  hideTigerHighlight() {
    this._tigerTextValue                  = 0;
    this._tiger_label_Text.text           = 0;
    this._tiger_labelContainer.visible    = false;
    this._tiger_hover_container.visible   = false;
    this._tigerGraphics.visible           = false;
  }

  dragChipSubscriber() {
    this._hoverToCanvasDataSubscriber.subscribe(hover => {
      // console.log(hover);
      if (hover.x >= (this._dragonBounds.left - this._dragonBounds.width) && hover.x <= this._dragonBounds.right && hover.y >= (this._dragonBounds.top - (this._dragonBounds.height / 2)) && hover.y <= this._dragonBounds.bottom) {
          this._tie_hover_container.visible = false;
          this._dragon_hover_container.visible = true;
          this._tiger_hover_container.visible = false;

          this._chipsDroppableEmitter.emit({
            droppable: true
          })
      } else if (hover.x >= (this._tieBounds.left - this._tieBounds.width) && hover.x <= this._tieBounds.right && hover.y >= (this._tieBounds.top - (this._tieBounds.height / 2)) && hover.y <= this._tieBounds.bottom) {
          this._tie_hover_container.visible = true;
          this._dragon_hover_container.visible = false;
          this._tiger_hover_container.visible = false;

          this._chipsDroppableEmitter.emit({
            droppable: true
          })
      } else if (hover.x >= this._tigerBounds.left && hover.x <= (this._tigerBounds.right + this._tigerBounds.width) && hover.y >= (this._tigerBounds.top - (this._tigerBounds.height / 2)) && hover.y <= this._tigerBounds.bottom) {
          this._tiger_hover_container.visible = true;
          this._tie_hover_container.visible = false;
          this._dragon_hover_container.visible = false;

          this._chipsDroppableEmitter.emit({
            droppable: true
          })
      } else {
          this._tie_hover_container.visible = false;
          this._dragon_hover_container.visible = false;
          this._tiger_hover_container.visible = false;

          this._chipsDroppableEmitter.emit({
            droppable: false
          })
      }
    });

    return this;
  }

  tableGraphics() {
    // set a fill and line style
    //curve Line bottom
    this._graphics.lineStyle(5, 0xFFD45B, 1);
    this._graphics.moveTo(570, 200);
    this._graphics.bezierCurveTo(570, 200, 360, 280, 90, 200);
    this._graphics.lineCap = 'square';
    this._graphics.lineJoin = 'bevel';

    //curve Line up
    this._graphics.lineStyle(5, 0xFFD45B, 1);
    this._graphics.moveTo(500, 115);
    this._graphics.bezierCurveTo(495, 115, 360, 155, 165, 115);
    this._graphics.lineCap = 'square';
    this._graphics.lineJoin = 'bevel';

    //divider line tiger
    this._graphics.beginFill(0xFFD45B);
    this._graphics.lineStyle(1, 0xFFD45B, 1);
    this._graphics.moveTo(500, 115);
    this._graphics.lineTo(589, 221);
    this._graphics.lineTo(496, 117);
    this._graphics.lineTo(500, 115);
    this._graphics.endFill();

    //divider line dragon
    this._graphics.beginFill(0xFFD45B);
    this._graphics.lineStyle(1, 0xFFD45B, 1);
    this._graphics.moveTo(165, 115);
    this._graphics.lineTo(71, 221);
    this._graphics.lineTo(169, 117);
    this._graphics.lineTo(165, 115);
    this._graphics.endFill();

    //divider line dragon-tie
    this._graphics.beginFill(0xFFD45B);
    this._graphics.lineStyle(1, 0xFFD45B, 1);
    this._graphics.moveTo(285, 130);
    this._graphics.lineTo(240, 255);
    this._graphics.lineTo(289, 130);
    this._graphics.lineTo(285, 130);
    this._graphics.endFill();

    //divider line tie-tiger
    this._graphics.beginFill(0xFFD45B);
    this._graphics.lineStyle(1, 0xFFD45B, 1);
    this._graphics.moveTo(380, 130);
    this._graphics.lineTo(425, 255);
    this._graphics.lineTo(384, 130);
    this._graphics.lineTo(380, 130);
    this._graphics.endFill();

    //background tiger
    this._background_tiger.width = 103;
    this._background_tiger.height = 120;
    this._background_tiger.position.x = 510;
    this._background_tiger.position.y = 120;
    this._background_tiger.rotation = -0.75;
    //background dragon
    this._background_dragon.width = 95;
    this._background_dragon.height = 148;
    this._background_dragon.position.x = 85;
    this._background_dragon.position.y = 60;
    this._background_dragon.rotation = 0.75;

    this._parentContainer.addChild(this._graphics, this._background_dragon, this._dragonContainer, this._tieContainer, this._tigerContainer, this._background_tiger);

    /* Main Container Size and Position
    */
    this._parentContainer.height  = 130;
    this._parentContainer.width   = 500;
    this._parentContainer.x       = 90;
    this._parentContainer.y       = 122;

    return this;
  }

/* ------------------------------------ DRAGON INITIALIZATION ---------------------------------------*/
  initializeDragonLayout() {
    this.initializeDragonGraphicsContainer();
    this.initializeDragonConfirmGraphics();
    this.initializeDragonText();
    this.initializeDragonLabel();
    this.initializeDragonLabelTapFunction();
    this.initializeDragonLabelText();
    this.initializeDragonLabelCheck();
    this.initializeDragonHoverGraphics();
    this.addDragontGraphicsToContainer();
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

    this._dragonGraphics.position.x = 0;
    this._dragonGraphics.position.y = 0;
    this._dragonGraphics.visible    = false;

    return this;
  }

  initializeDragonConfirmGraphics() {
    //confirm dragon
    this._dragon_confirmGraphics.lineStyle(5, 0x0752FF, 1);
    // draw a shape
    this._dragon_confirmGraphics.moveTo(243, 222);
    this._dragon_confirmGraphics.lineTo(273, 140);
    this._dragon_confirmGraphics.bezierCurveTo(265, 140, 195, 130, 170, 125);
    this._dragon_confirmGraphics.lineTo(106, 194);
    this._dragon_confirmGraphics.bezierCurveTo(115, 196, 150, 208, 210, 216);
    this._dragon_confirmGraphics.lineTo(243, 222);

    this._dragon_confirmGraphics.position.x = 0;
    this._dragon_confirmGraphics.position.y = 0;
    this._dragon_confirmGraphics.visible    = false;

    return this;
  }

  initializeDragonText() {
    var dragonText = new PIXI.Text('DRAGON', this._style);
    dragonText.x = 166;
    dragonText.y = 134;
    dragonText.rotation = 0.35;
    dragonText.skew.x = -0.1;
    dragonText.skew.y = -0.2;

    var dragon_multiplyer_Text = new PIXI.Text('1:1', this._style);
    dragon_multiplyer_Text.x = 168;
    dragon_multiplyer_Text.y = 180;
    dragon_multiplyer_Text.rotation = 0.4;
    dragon_multiplyer_Text.skew.x = -0.1;
    dragon_multiplyer_Text.skew.y = -0.2;

    this._dragon_textContainer.addChild(dragonText, dragon_multiplyer_Text);

    return this;
  }

  initializeDragonLabel() {
    this._dragon_label_arrowGraphics.beginFill(0xFF700B, 1);
    this._dragon_label_arrowGraphics.drawRect(0, 0, 20, 20);
    this._dragon_label_arrowGraphics.position.x = 208;
    this._dragon_label_arrowGraphics.position.y = 97;
    this._dragon_label_arrowGraphics.rotation = 0.90;

    this._dragon_label_bgGraphics.beginFill(0x131313);
    this._dragon_label_bgGraphics.drawRoundedRect(0, 0, 150,30, 18);
    this._dragon_label_bgGraphics.endFill();
    this._dragon_label_bgGraphics.position.x = 140;
    this._dragon_label_bgGraphics.position.y = 74;
    this._dragon_label_bgGraphics.skew.x = 0.0;
    this._dragon_label_bgGraphics.rotation = 0.10;

    this._dragon_labelGraphics.beginFill(0xFF700B);
    this._dragon_labelGraphics.drawRoundedRect(0, 0, 150, 33, 19);
    this._dragon_labelGraphics.endFill();
    this._dragon_labelGraphics.position.x = 140;
    this._dragon_labelGraphics.position.y = 74;
    this._dragon_labelGraphics.skew.x = 0.0;
    this._dragon_labelGraphics.rotation = 0.10;

    this._dragon_labelContainer.addChild(this._dragon_labelContainer, this._dragon_label_arrowGraphics, this._dragon_labelGraphics, this._dragon_label_bgGraphics, this._dragon_check_container);
    this._dragon_labelContainer.position.x  = 9;
    this._dragon_labelContainer.position.y  = 5;
    this._dragon_labelContainer.visible     = false;
    this._dragon_labelContainer.interactive = true;
    this._dragon_labelContainer.buttonMode  = true;

    return this;
  }

  initializeDragonLabelTapFunction() {
    let self = this;
    this._dragon_labelContainer
    .on('pointerdown', function(){

      self._tie_hover_container.visible = false;
      self._dragon_hover_container.visible = true;
      self._tiger_hover_container.visible = false;

      self._tapCanvasLabelEmitter.emit({
        tapped: true,
        bounds: self._dragonBounds,
        hand: 'dragon'
      });

    });

    return this;
  }

  initializeDragonLabelText() {
    this._dragon_label_Text.x = 180;
    this._dragon_label_Text.y = 84;
    this._dragon_label_Text.rotation = 0.1;
    this._dragon_label_Text.skew.x = 0;
    this._dragon_label_Text.skew.y = 0;

    return this;
  }

  initializeDragonLabelCheck() {
    this._dragon_check_circle_graphics.beginFill(0x373737, 1);
    this._dragon_check_circle_graphics.drawCircle(267,102,12);
    this._dragon_check_circle_graphics.endFill();

    this._dragon_check_graphics.lineStyle(4, 0xFAFAFA, 1);
    this._dragon_check_graphics.moveTo(258.5, 102.5);
    this._dragon_check_graphics.lineTo(264.5, 106.5);
    this._dragon_check_graphics.lineTo(274.5, 98);
    this._dragon_check_graphics.lineCap = 'square';
    this._dragon_check_graphics.lineJoin = 'bevel';

    this._dragon_check_container.addChild(this._dragon_check_circle_graphics, this._dragon_check_graphics);
    this._dragon_check_container.x
    this._dragon_check_container.y

    return this;
  }

  initializeDragonHoverGraphics() {
    this._dragon_hover_graphics.lineStyle(5, 0x06CA0D, 1);
    this._dragon_hover_graphics.moveTo(112, 175);
    this._dragon_hover_graphics.lineTo(90, 200);
    this._dragon_hover_graphics.lineTo(125, 210);
    this._dragon_hover_graphics.moveTo(253, 128);
    this._dragon_hover_graphics.lineTo(286, 132);
    this._dragon_hover_graphics.lineTo(275, 159);
    this._dragon_hover_graphics.moveTo(258, 203);
    this._dragon_hover_graphics.lineTo(249, 232);
    this._dragon_hover_graphics.lineTo(213, 227);
    this._dragon_hover_graphics.moveTo(198, 121);
    this._dragon_hover_graphics.lineTo(168, 116);
    this._dragon_hover_graphics.lineTo(149, 137);

    this._dragon_hover_container.addChild(this._dragon_hover_graphics);
    this._dragon_hover_container.visible = false;

    return this;
  }

  addDragontGraphicsToContainer() {
    this._dragonContainer.addChild(this._dragonGraphics, this._dragon_confirmGraphics, this._dragon_textContainer, this._dragon_labelContainer, this._dragon_hover_container);
    // console.log('dragon', this._dragonContainer.getBounds());
    this._dragonBounds = this._dragonContainer.getBounds();

    return this;
  }
/* ------------------------------------ END DRAGON INITIALIZATION ---------------------------------------*/

/* ------------------------------------ TIE INITIALIZATION ---------------------------------------*/
  initializeTieLayout() {
    this.initializeTieGraphicsContainer();
    this.initializeTieConfirmGraphics();
    this.initializeTieText();
    this.initializeTieLabel();
    this.initializeTieLabelTapFunction()
    this.initializeTieLabelText();
    this.initializeTieLabelCheck();
    this.initializeTieHoverGraphics();
    this.addTieGraphicsToContainer();

    return this;
  }

  initializeTieGraphicsContainer() {
    this._tieGraphics.beginFill(0x7FAB7D,0.4);
    this._tieGraphics.lineStyle(0, 0xffd900, 1);

    this._tieGraphics.moveTo(418, 235);
    this._tieGraphics.lineTo(380, 130);
    this._tieGraphics.lineTo(285, 130);
    //tigerGraphics.bezierCurveTo(490, 120, 480, 120, 378, 130);
    this._tieGraphics.lineTo(250, 230);
    this._tieGraphics.bezierCurveTo(255, 245, 490, 225, 430, 235);
    this._tieGraphics.lineTo(418, 235);
    this._tieGraphics.endFill();

    this._tieGraphics.position.x  = 0;
    this._tieGraphics.position.y  = 0;
    this._tieGraphics.visible     = false;

    return this;
  }

  initializeTieConfirmGraphics() {
    this._tie_confirmGraphics.lineStyle(5, 0x00F23D, 1);

    this._tie_confirmGraphics.moveTo(405, 223);
    this._tie_confirmGraphics.lineTo(375, 142);
    this._tie_confirmGraphics.lineTo(293, 142);
    //tigerGraphics.bezierCurveTo(490, 120, 480, 120, 378, 130);
    this._tie_confirmGraphics.lineTo(260, 223);
    this._tie_confirmGraphics.bezierCurveTo(280, 225, 320, 228, 380, 225);
    this._tie_confirmGraphics.lineTo(405, 223);

    this._tie_confirmGraphics.position.x  = 0;
    this._tie_confirmGraphics.position.y  = 0;
    this._tie_confirmGraphics.visible     = false;

    return this;
  }

  initializeTieText() {
    var tieText = new PIXI.Text('TIE', this._style);
    tieText.x = 315;
    tieText.y = 150;

    var tie_muliplyer_Text = new PIXI.Text('1:8', this._style);
    tie_muliplyer_Text.x = 315;
    tie_muliplyer_Text.y = 200;

    this._tie_textContainer.addChild(tieText, tie_muliplyer_Text);
    return this;
  }

  initializeTieLabel() {
    this._tie_label_arrowGraphics.beginFill(0xFF700B, 1);
    this._tie_label_arrowGraphics.drawRect(0, 0, 20, 20);
    this._tie_label_arrowGraphics.position.x = 324;
    this._tie_label_arrowGraphics.position.y = 106;
    this._tie_label_arrowGraphics.rotation = 0.75;

    this._tie_label_bgGraphics.beginFill(0x131313);
    this._tie_label_bgGraphics.drawRoundedRect(0, 0, 150,30, 18);
    this._tie_label_bgGraphics.endFill();
    this._tie_label_bgGraphics.position.x = 250;
    this._tie_label_bgGraphics.position.y = 90;
    this._tie_label_bgGraphics.rotation = -0.0;

    this._tie_labelGraphics.beginFill(0xFF700B);
    this._tie_labelGraphics.drawRoundedRect(0, 0, 150, 33, 19);
    this._tie_labelGraphics.endFill();
    this._tie_labelGraphics.position.x = 250;
    this._tie_labelGraphics.position.y = 90;
    this._tie_labelGraphics.rotation = -0.0;

    this._tie_labelContainer.addChild(this._tie_label_arrowGraphics, this._tie_labelGraphics, this._tie_label_bgGraphics, this._tie_check_container);
    this._tie_labelContainer.position.x   = 9;
    this._tie_labelContainer.position.y   = 5;
    this._tie_labelContainer.visible      = false;
    this._tie_labelContainer.interactive  = true;
    this._tie_labelContainer.buttonMode   = true;

    return this;
  }

  initializeTieLabelTapFunction() {
    let self = this;
    this._tie_labelContainer
    .on('pointerdown', function(){
      self._tie_hover_container.visible = true;
      self._dragon_hover_container.visible = false;
      self._tiger_hover_container.visible = false;

      self._tapCanvasLabelEmitter.emit({
        tapped: true,
        bounds: self._tieBounds,
        hand: 'tie'
      });
    });

    return this;
  }

  initializeTieLabelText() {
    this._tie_label_Text.x = 300;
    this._tie_label_Text.y = 95;
    this._tie_label_Text.rotation = 0;
    this._tie_label_Text.skew.x = 0;
    this._tie_label_Text.skew.y = 0;

    return this;
  }

  initializeTieLabelCheck() {
    this._tie_check_circle_graphics.beginFill(0x373737, 1);
    this._tie_check_circle_graphics.drawCircle(380,105,12);
    this._tie_check_circle_graphics.endFill();

    this._tie_check_graphics.lineStyle(4, 0xFAFAFA, 1);
    this._tie_check_graphics.moveTo(371.5, 106.5);
    this._tie_check_graphics.lineTo(377.5, 110.5);
    this._tie_check_graphics.lineTo(387.5, 100);
    this._tie_check_graphics.lineCap = 'square';
    this._tie_check_graphics.lineJoin = 'bevel';

    this._tie_check_container.addChild(this._tie_check_circle_graphics, this._tie_check_graphics);

    return this;
  }

  initializeTieHoverGraphics() {
    this._tie_hover_graphics.lineStyle(5, 0x06CA0D, 1);
    this._tie_hover_graphics.moveTo(260, 200.5);
    this._tie_hover_graphics.lineTo(249, 232);
    this._tie_hover_graphics.lineTo(285, 235);
    this._tie_hover_graphics.moveTo(357, 133);
    this._tie_hover_graphics.lineTo(383, 132);
    this._tie_hover_graphics.lineTo(390, 154);
    this._tie_hover_graphics.moveTo(407, 204);
    this._tie_hover_graphics.lineTo(416, 232);
    this._tie_hover_graphics.lineTo(378, 235);
    this._tie_hover_graphics.moveTo(312, 132);
    this._tie_hover_graphics.lineTo(286, 131);
    this._tie_hover_graphics.lineTo(278, 155);

    this._tie_hover_container.addChild(this._tie_hover_graphics);
    this._tie_hover_container.visible = false;

    return this;
  }

  addTieGraphicsToContainer() {
    // let self = this;
    this._tieContainer.addChild(this._tieGraphics, this._tie_confirmGraphics, this._tie_textContainer, this._tie_labelContainer, this._tie_hover_container);
    // console.log('tie', this._tieContainer.getBounds());
    this._tieBounds = this._tieContainer.getBounds();

    return this;
  }
  /* ------------------------------------ END TIE INITIALIZATION ---------------------------------------*/

  /* ------------------------------------ TIGER INITIALIZATION ---------------------------------------*/
  initializeTigerLayout() {
    this.initializeTigerGraphicsContainer();
    this.initializeTigerConfirmGraphics();
    this.initializeTigerText();
    this.initializeTigerLabel();
    this.initializeTigerLabelTapFunction();
    this.initializeTigerLabelText();
    this.initializeTigerLabelCheck();
    this.initializeTigerHoverGraphics();
    this.addTigerGraphicsToContainer();
  }

  initializeTigerGraphicsContainer() {
    this._tigerGraphics.beginFill(0x7FAB7D,0.4);
    this._tigerGraphics.lineStyle(0, 0xffd900, 1);

    this._tigerGraphics.moveTo(570, 200);
    this._tigerGraphics.lineTo(495, 115);
    this._tigerGraphics.bezierCurveTo(490, 120, 480, 120, 378, 130);
    this._tigerGraphics.lineTo(415, 235);
    this._tigerGraphics.bezierCurveTo(435, 234, 390, 225, 430, 235);
    this._tigerGraphics.lineTo(570, 200);
    this._tigerGraphics.endFill();

    this._tigerGraphics.position.x  = 0;
    this._tigerGraphics.position.y  = 0;
    this._tigerGraphics.visible     = false;

    return this;
  }

  initializeTigerConfirmGraphics() {
    this._tiger_confirmGraphics.lineStyle(5, 0xEC0C0C, 1);
    this._tiger_confirmGraphics.moveTo(555, 195);
    this._tiger_confirmGraphics.lineTo(495, 126);
    this._tiger_confirmGraphics.bezierCurveTo(470, 130, 455, 135, 395, 140);
    this._tiger_confirmGraphics.lineTo(423, 222);
    this._tiger_confirmGraphics.bezierCurveTo(438, 219, 475, 215, 500, 210);
    this._tiger_confirmGraphics.lineTo(555, 195);

    this._tiger_confirmGraphics.position.x  = 0;
    this._tiger_confirmGraphics.position.y  = 0;
    this._tiger_confirmGraphics.visible     = false;

    return this;
  }

  initializeTigerText() {
    var tigerText = new PIXI.Text('TIGER', this._style);
    tigerText.x = 415;
    tigerText.y = 148;
    tigerText.rotation = -0.35;
    tigerText.skew.x = 0.1;
    tigerText.skew.y = 0.2;

    var tiger_multiplyer_Text = new PIXI.Text('1:1', this._style);
    tiger_multiplyer_Text.x = 460;
    tiger_multiplyer_Text.y = 190;
    tiger_multiplyer_Text.rotation = -0.38;
    tiger_multiplyer_Text.skew.x = 0.1;
    tiger_multiplyer_Text.skew.y = 0.2;

    this._tiger_textContainer.addChild(tigerText,tiger_multiplyer_Text);

    return this;
  }

  initializeTigerLabel() {
    this._tiger_label_arrowGraphics.beginFill(0xFF700B, 1);
    this._tiger_label_arrowGraphics.drawRect(0, 0, 20, 20);
    this._tiger_label_arrowGraphics.position.x = 438;
    this._tiger_label_arrowGraphics.position.y = 99;
    this._tiger_label_arrowGraphics.rotation = 0.7;

    this._tiger_label_bgGraphics.beginFill(0x131313);
    this._tiger_label_bgGraphics.drawRoundedRect(0, 0, 150,30, 18);
    this._tiger_label_bgGraphics.endFill();
    this._tiger_label_bgGraphics.position.x = 360;
    this._tiger_label_bgGraphics.position.y = 90;
    this._tiger_label_bgGraphics.skew.x = 0.0;
    this._tiger_label_bgGraphics.rotation = -0.10;

    this._tiger_labelGraphics.beginFill(0xFF700B);
    this._tiger_labelGraphics.drawRoundedRect(0, 0, 150, 33, 19);
    this._tiger_labelGraphics.endFill();
    this._tiger_labelGraphics.position.x = 360;
    this._tiger_labelGraphics.position.y = 90;
    this._tiger_labelGraphics.skew.x = 0.0;
    this._tiger_labelGraphics.rotation = -0.10;

    this._tiger_labelContainer.addChild(this._tiger_labelContainer, this._tiger_label_arrowGraphics, this._tiger_labelGraphics, this._tiger_label_bgGraphics, this._tiger_check_container);
    this._tiger_labelContainer.position.x   = 9;
    this._tiger_labelContainer.position.y   = 5;
    this._tiger_labelContainer.visible      = false;
    this._tiger_labelContainer.interactive  = true;
    this._tiger_labelContainer.buttonMode   = true;

    return this;
  }

  initializeTigerLabelTapFunction() {
    let self = this;
    this._tiger_labelContainer
    .on('pointerdown', function(){
      self._tie_hover_container.visible = false;
      self._dragon_hover_container.visible = false;
      self._tiger_hover_container.visible = true;

      self._tapCanvasLabelEmitter.emit({
        tapped: true,
        bounds: self._tigerBounds,
        hand: 'tiger'
      });

    });

    return this;
  }

  initializeTigerLabelText() {
    this._tiger_label_Text.x = 411;
    this._tiger_label_Text.y = 90;
    this._tiger_label_Text.rotation = -0.1;
    this._tiger_label_Text.skew.x = 0;
    this._tiger_label_Text.skew.y = 0;

    return this;
  }

  initializeTigerLabelCheck() {
    this._tiger_check_circle_graphics.beginFill(0x373737, 1);
    this._tiger_check_circle_graphics.drawCircle(490,92,12);
    this._tiger_check_circle_graphics.endFill();

    this._tiger_check_graphics.lineStyle(4, 0xFAFAFA, 1);
    this._tiger_check_graphics.moveTo(481.5, 93.5);
    this._tiger_check_graphics.lineTo(487.5, 97.5);
    this._tiger_check_graphics.lineTo(497.5, 87);
    this._tiger_check_graphics.lineCap = 'square';
    this._tiger_check_graphics.lineJoin = 'bevel';

    this._tiger_check_container.addChild(this._tiger_check_circle_graphics, this._tiger_check_graphics);

    return this;
  }

  initializeTigerHoverGraphics() {
    this._tiger_hover_graphics.lineStyle(5, 0x06CA0D, 1);
    this._tiger_hover_graphics.moveTo(408, 205);
    this._tiger_hover_graphics.lineTo(419, 232);
    this._tiger_hover_graphics.lineTo(451, 228);
    this._tiger_hover_graphics.moveTo(470, 121);
    this._tiger_hover_graphics.lineTo(499, 116);
    this._tiger_hover_graphics.lineTo(515, 135);
    this._tiger_hover_graphics.moveTo(550, 175);
    this._tiger_hover_graphics.lineTo(570, 200);
    this._tiger_hover_graphics.lineTo(540, 210);
    this._tiger_hover_graphics.moveTo(412, 129);
    this._tiger_hover_graphics.lineTo(382, 131);
    this._tiger_hover_graphics.lineTo(391, 155);

    this._tiger_hover_container.addChild(this._tiger_hover_graphics);
    this._tiger_hover_container.visible = false;

    return this;
  }

  addTigerGraphicsToContainer() {
    this._tigerContainer.addChild(this._tigerGraphics, this._tiger_confirmGraphics, this._tiger_textContainer, this._tiger_labelContainer, this._tiger_hover_container);
    // console.log('tiger', this._tigerContainer.getBounds());
    this._tigerBounds = this._tigerContainer.getBounds();

    return this;
  }
  /* ------------------------------------ END TIGER INITIALIZATION ---------------------------------------*/
}
