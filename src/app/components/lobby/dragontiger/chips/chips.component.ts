import {
  EmitterComponent
} from '../../../commons/emitter.component';

declare let PIXI;
export class Chips {
  constructor() {}

  private _chipsContainer             : any;
  private _chipsDraggableContainer    : any;
  private _chipsIsDragging            = false;
  private _arrowUp;
  private _arrowDown;
  private _currentActivechips;
  private _currentCloneActivechips    = true;
  private _currentCloneDragchips;

  private _emitterComponent           = new EmitterComponent;

  private _hoverToCanvasDataEmitter   = this._emitterComponent.hoverToCanvasData();
  private _chipsToCanvasDataEmitter   = this._emitterComponent.chipsToCanvasData();
  private _chipsDroppableSubscriber   = this._emitterComponent.droppableChip();
  private _clearChipsSubscriber       = this._emitterComponent.clearChipsData();
  // private _confirmChipsSubscriber     = this._emitterComponent.confirmChipsData();
  private _tapCanvasLabelSubscriber   = this._emitterComponent.tapCanvasLabel();
  // private _confirmedBetsEmitter       = this._emitterComponent.confirmedBetsData();

  private _chipsCustom                = <any>{};
  private _chips5                     = <any>{};
  private _chips10                    = <any>{};
  private _chips20                    = <any>{};
  private _chips50                    = <any>{};
  private _chips100                   = <any>{};
  private _chips200                   = <any>{};
  private _chips500                   = <any>{};
  private _chips1000                  = <any>{};
  private _chips2000                  = <any>{};
  private _chips5000                  = <any>{};
  private _chips10000                 = <any>{};
  private _chips50000                 = <any>{};
  private _chipDroppable              = false;
  private _oldActiveChips;
  private _newActiveChips;
  private _activechips;
  private _confirmedBets = [];

  private _chips5Container;
  private _chips10Container;
  private _chips20Container;
  private _chips50Container;
  private _chips100Container;
  private _chips200Container;
  private _chips500Container;
  private _chips1000Container;
  private _chips2000Container;
  private _chips5000Container;
  private _chips10000Container;
  private _chips50000Container;
  private _rectangleSprite;

  getChipsContainer() {
    return this._chipsContainer;
  }

  initializeRootContainer() {
    this._chipsContainer          = new PIXI.Container();
    this._chipsDraggableContainer = new PIXI.Container();
    this._chips5Container         = new PIXI.Container();
    this._chips10Container        = new PIXI.Container();
    this._chips20Container        = new PIXI.Container();
    this._chips50Container        = new PIXI.Container();
    this._chips100Container       = new PIXI.Container();
    this._chips200Container       = new PIXI.Container();
    this._chips500Container       = new PIXI.Container();
    this._chips1000Container      = new PIXI.Container();
    this._chips2000Container      = new PIXI.Container();
    this._chips5000Container      = new PIXI.Container();
    this._chips10000Container     = new PIXI.Container();
    this._chips50000Container     = new PIXI.Container();
    this._chipsDraggableContainer.width   = 1000;
    this._chipsDraggableContainer.height  = 100;
  }

  initializeRootPosition() {
    this._chipsContainer.position.x = 10;
    this._chipsContainer.position.y = 20;
  }

  initializeHitAreaContainer() {
    this._chipsContainer.hitArea = new PIXI.Rectangle(this._chipsDraggableContainer.position.x, this._chipsDraggableContainer.position.y, 70, 215);
  }

  clearChipsDataSubscriber(){
    this._clearChipsSubscriber.subscribe(data => {
      if (data.clear) {
        // console.log(this._chipsContainer.children)
        let excludeConfirmedBets = this._confirmedBets.length === 0 ? 0 : this._confirmedBets[this._confirmedBets.length - 1];
        // console.log('excludeConfirmedBets', excludeConfirmedBets, this._confirmedBets)
        this._chipsContainer.removeChildren(3 + excludeConfirmedBets, this._chipsContainer.children.length);
      }
    })
  }

  confirmChipsDataSubscriber(){
    // this._confirmChipsSubscriber.subscribe(data => {
    //   if (data.confirm) {
    //     // console.log(this._chipsContainer.children)
    //     this._confirmedBets.push(this._chipsContainer.children.length - 3);
    //     // console.log('confirmed', this._confirmedBets)
    //     this._confirmedBetsEmitter.emit(true);
    //   }
    // })
  }

  tapCanvasLabelSubscriber() {
    this._tapCanvasLabelSubscriber.subscribe(data => {
      // console.log('click', data)

      this._chipsToCanvasDataEmitter.emit({
        name: this._currentActivechips,
        value: this[this._currentActivechips]['clone'].value,
      });

      this.dropChip(this[this._currentActivechips]);
      this._chipsContainer.addChild(this[this._currentActivechips].bet);

      /* Initial position of the chip */
      this[this._currentActivechips]['bet'].position.x = this.randomXposition(data.bounds.left - 20);
      this[this._currentActivechips]['bet'].position.y = this.randomYposition(data.bounds.top - this[this._currentActivechips]['clone'].height);

      /* chip animation */
      this.animateChipsUp('y', (data.bounds.height - 20), 600, this[this._currentActivechips]['bet']);
    });
  }

  randomXposition(x){
    let random = x;
    random = random + Math.floor((Math.random() * 50) + 1);

    return random;
  }

  randomYposition(y){
    let random = y;
    random = random + Math.floor((Math.random() * 50) + 1);

    return random;
  }

  loadResources() {
    this.initializeCustomChips();
    this.initializeChips5();
    this.initializeChips10();
    this.initializeChips20();
    this.initializeChips50();
    this.initializeChips100();
    this.initializeChips200();
    this.initializeChips500();
    this.initializeChips1000();
    this.initializeChips2000();
    this.initializeChips5000();
    this.initializeChips10000();
    this.initializeChips50000();

    this.dragChips(this._chips5.clone);
    this.dragChips(this._chips10.clone);
    this.dragChips(this._chips20.clone);
    this.dragChips(this._chips50.clone);
    this.dragChips(this._chips100.clone);
    this.dragChips(this._chips200.clone);
    this.dragChips(this._chips500.clone);
    this.dragChips(this._chips1000.clone);
    this.dragChips(this._chips2000.clone);
    this.dragChips(this._chips5000.clone);
    this.dragChips(this._chips10000.clone);
    this.dragChips(this._chips50000.clone);

    this._chipsDroppableSubscriber.subscribe(chip => {
      this._chipDroppable = chip.droppable;
    });

    this.initializeArrowButtons();
    this.clearChipsDataSubscriber();
    this.confirmChipsDataSubscriber();
    this.tapCanvasLabelSubscriber();
  }

  initializeArrowButtons() {
    var arrowUpContainer = new PIXI.Container();
    this._arrowUp = new PIXI.Graphics();
    this._arrowUp.beginFill(0xEBBD63, 1);
    this._arrowUp.moveTo(20, 50);
    this._arrowUp.lineTo(50, 50);
    this._arrowUp.lineTo(35, 35);
    this._arrowUp.lineTo(20, 50);
    this._arrowUp.endFill();
    this._arrowUp.interactive = true;
    this._arrowUp.buttonMode = true;

    arrowUpContainer.addChild(this._arrowUp);
    arrowUpContainer.position.x = -5;
    arrowUpContainer.position.y = -20;

    var arrowDownContainer = new PIXI.Container();
    this._arrowDown = new PIXI.Graphics();
    this._arrowDown.beginFill(0xEBBD63, 1);
    this._arrowDown.moveTo(20, 50);
    this._arrowDown.lineTo(50, 50);
    this._arrowDown.lineTo(35, 65);
    this._arrowDown.lineTo(20, 50);
    this._arrowDown.endFill();
    this._arrowDown.interactive = true;
    this._arrowDown.buttonMode = true;

    arrowDownContainer.addChild(this._arrowDown);
    arrowDownContainer.position.x = -5;
    arrowDownContainer.position.y = 200;

    this._chipsContainer.addChild(arrowUpContainer, arrowDownContainer);
  }

  loadSpriteAnimation() {
    if (this._rectangleSprite) {
      this._rectangleSprite.playing ? '': this._rectangleSprite.play();

      return this._rectangleSprite;
    }

    let alienImages = ['img/chips/rectangle_active/chips_rec_anim1.png', 'img/chips/rectangle_active/chips_rec_anim2.png', 'img/chips/rectangle_active/chips_rec_anim3.png', 'img/chips/rectangle_active/chips_rec_anim4.png', 'img/chips/rectangle_active/chips_rec_anim5.png', 'img/chips/rectangle_active/chips_rec_anim6.png', 'img/chips/rectangle_active/chips_rec_anim7.png', 'img/chips/rectangle_active/chips_rec_anim8.png'];
    let textureArray = [];

    for (let i=0; i < alienImages.length; i++)
    {
         let texture = PIXI.Texture.fromImage(alienImages[i]);
         textureArray.push(texture);
    };

    this._rectangleSprite = new PIXI.extras.AnimatedSprite(textureArray);
    this._rectangleSprite.animationSpeed = 0.05;
    this._rectangleSprite.anchor.set(0.5);
    this._rectangleSprite.scale.y = 0.3;
    this._rectangleSprite.scale.x = 0.3;

    this._rectangleSprite.play();

    return this._rectangleSprite;
  }

  initializeCustomChips() {
    this._chipsCustom.original = new PIXI.Sprite(
      PIXI.loader.resources.chipsCustom.texture
    );

    this._chipsCustom.clone = new PIXI.Sprite(
      PIXI.loader.resources.chipsCustom.texture
    );

    this._chipsCustom.clone.position.x  = 30;
    this._chipsCustom.clone.position.y  = 225;
    this._chipsCustom.clone.width   = 60;
    this._chipsCustom.clone.height  = 50;
    this._chipsCustom.clone.anchor.set(0.5);
    this._chipsCustom.clone.name = '_chipsCustom';
    this._chipsCustom.clone.interactive = true;
    this._chipsCustom.clone.buttonMode  = true;

    this._chipsCustom.original.position.x  = 30;
    this._chipsCustom.original.position.y  = 225;
    this._chipsCustom.original.width   = 60;
    this._chipsCustom.original.height  = 50;
    this._chipsCustom.original.anchor.set(0.5);

    this._chipsDraggableContainer.addChild(this._chipsCustom.original, this._chipsCustom.clone);

    return this;
  }

  appendActiveChips(oldContainer, newContainer) {
    // console.log(oldContainer + 'Container');
    // console.log(newContainer + 'Container')
    if (oldContainer) {
      this[oldContainer + 'Container'].removeChildAt(0);
    } else if (oldContainer === newContainer) {
      return;
    }

    /*check if the name is */
    if (newContainer === '_chips10000' || newContainer === '_chips50000') {
      let sprite = this.loadSpriteAnimation();

      this[newContainer + 'Container'].addChildAt(sprite, 0)
      this._oldActiveChips = newContainer;
    } else {
      this._activechips =  new PIXI.Sprite(
        PIXI.loader.resources.activechips.texture
      );

      this[newContainer + 'Container'].addChildAt(this._activechips, 0)
      this._oldActiveChips = newContainer;
    }
  }

  initializeChips5() {
    let self = this;
    this._chips5.original = new PIXI.Sprite(
      PIXI.loader.resources.chips5.texture
    );

    this._chips5.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips5.texture
    );
    this._chips5.clone.width   = 50;
    this._chips5.clone.height  = 50;
    this._chips5.clone.anchor.set(0.5);
    this._chips5.clone.name = '_chips5';
    this._chips5.clone.value = 5;
    this._chips5.clone.interactive = true;
    this._chips5.clone.buttonMode  = true;

    this._chips5.original.width   = 50;
    this._chips5.original.height  = 50;
    this._chips5.original.anchor.set(0.5);

    this._chips5Container.addChild(this._chips5.original, this._chips5.clone);
    this._chips5Container.position.x = 30;
    this._chips5Container.position.y = 170;

    this._chipsDraggableContainer.addChild(this._chips5Container);

    return this;
  }

  initializeChips10() {
    let self = this;
    this._chips10.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips10.texture
    );

    this._chips10.original = new PIXI.Sprite(
      PIXI.loader.resources.chips10.texture
    );

    this._chips10.clone.width   = 50;
    this._chips10.clone.height  = 50;
    this._chips10.clone.anchor.set(0.5);
    this._chips10.clone.name = '_chips10';
    this._chips10.clone.value = 10;
    this._chips10.clone.interactive = true;
    this._chips10.clone.buttonMode  = true;

    this._chips10.original.width   = 50;
    this._chips10.original.height  = 50;
    this._chips10.original.anchor.set(0.5);
    this._newActiveChips = '_chips10';

    this._chips10Container.addChild(this._chips10.original, this._chips10.clone);
    this._chips10Container.position.x = 30;
    this._chips10Container.position.y = 115;

    this._chipsDraggableContainer.addChild(this._chips10Container);
    this.appendActiveChips(this._oldActiveChips, this._newActiveChips);

    animate();
    function animate() {
      self._activechips.anchor.set(0.5);
      self._activechips.rotation -= 0.1;
      requestAnimationFrame(animate);
    }

    return this;
  }

  initializeChips20() {
    this._chips20.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips20.texture
    );

    this._chips20.original = new PIXI.Sprite(
      PIXI.loader.resources.chips20.texture
    );

    this._chips20.clone.width   = 50;
    this._chips20.clone.height  = 50;
    this._chips20.clone.anchor.set(0.5);
    this._chips20.clone.name = '_chips20';
    this._chips20.clone.value = 20;
    this._chips20.clone.interactive = true;
    this._chips20.clone.buttonMode  = true;

    this._chips20.original.width   = 50;
    this._chips20.original.height  = 50;
    this._chips20.original.anchor.set(0.5);

    this._chips20Container.addChild(this._chips20.original, this._chips20.clone);
    this._chips20Container.position.x = 30;
    this._chips20Container.position.y = 60;

    this._chipsDraggableContainer.addChild(this._chips20Container);

    return this;
  }

  initializeChips50() {
    this._chips50.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips50.texture
    );

    this._chips50.original = new PIXI.Sprite(
      PIXI.loader.resources.chips50.texture
    );

    this._chips50.clone.width   = 50;
    this._chips50.clone.height  = 50;
    this._chips50.clone.anchor.set(0.5);
    this._chips50.clone.name = '_chips50';
    this._chips50.clone.value = 50;
    this._chips50.clone.interactive = true;
    this._chips50.clone.buttonMode  = true;

    this._chips50.original.width   = 50;
    this._chips50.original.height  = 50;
    this._chips50.original.anchor.set(0.5);

    this._chips50Container.addChild(this._chips50.original, this._chips50.clone);
    this._chips50Container.position.x = 30;
    this._chips50Container.position.y = 5;

    this._chipsDraggableContainer.addChild(this._chips50Container);

    return this;
  }

  initializeChips100() {
    this._chips100.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips100.texture
    );

    this._chips100.original = new PIXI.Sprite(
      PIXI.loader.resources.chips100.texture
    );

    this._chips100.clone.width   = 50;
    this._chips100.clone.height  = 50;
    this._chips100.clone.anchor.set(0.5);
    this._chips100.clone.name = '_chips100';
    this._chips100.clone.value = 100;
    this._chips100.clone.interactive = true;
    this._chips100.clone.buttonMode  = true;

    this._chips100.original.width   = 50;
    this._chips100.original.height  = 50;
    this._chips100.original.anchor.set(0.5);

    this._chips100Container.addChild(this._chips100.original, this._chips100.clone);
    this._chips100Container.position.x = 30;
    this._chips100Container.position.y = -50;

    this._chipsDraggableContainer.addChild(this._chips100Container);

    return this;
  }

  initializeChips200() {
    this._chips200.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips200.texture
    );

    this._chips200.original = new PIXI.Sprite(
      PIXI.loader.resources.chips200.texture
    );

    this._chips200.clone.width   = 50;
    this._chips200.clone.height  = 50;
    this._chips200.clone.anchor.set(0.5);
    this._chips200.clone.name = '_chips200';
    this._chips200.clone.value = 200;
    this._chips200.clone.interactive = true;
    this._chips200.clone.buttonMode  = true;

    this._chips200.original.width   = 50;
    this._chips200.original.height  = 50;
    this._chips200.original.anchor.set(0.5);

    this._chips200Container.addChild(this._chips200.original, this._chips200.clone);
    this._chips200Container.position.x = 30;
    this._chips200Container.position.y = -105;

    this._chipsDraggableContainer.addChild(this._chips200Container);

    return this;
  }

  initializeChips500() {
    this._chips500.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips500.texture
    );

    this._chips500.original = new PIXI.Sprite(
      PIXI.loader.resources.chips500.texture
    );

    this._chips500.clone.width   = 50;
    this._chips500.clone.height  = 50;
    this._chips500.clone.anchor.set(0.5);
    this._chips500.clone.name = '_chips500';
    this._chips500.clone.value = 500;
    this._chips500.clone.interactive = true;
    this._chips500.clone.buttonMode  = true;

    this._chips500.original.width   = 50;
    this._chips500.original.height  = 50;
    this._chips500.original.anchor.set(0.5);

    this._chips500Container.addChild(this._chips500.original, this._chips500.clone);
    this._chips500Container.position.x = 30;
    this._chips500Container.position.y = -160;

    this._chipsDraggableContainer.addChild(this._chips500Container);

    return this;
  }

  initializeChips1000() {
    this._chips1000.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips1000.texture
    );

    this._chips1000.original = new PIXI.Sprite(
      PIXI.loader.resources.chips1000.texture
    );

    this._chips1000.clone.width   = 50;
    this._chips1000.clone.height  = 50;
    this._chips1000.clone.anchor.set(0.5);
    this._chips1000.clone.name = '_chips1000';
    this._chips1000.clone.value = 1000;
    this._chips1000.clone.interactive = true;
    this._chips1000.clone.buttonMode  = true;

    this._chips1000.original.width   = 50;
    this._chips1000.original.height  = 50;
    this._chips1000.original.anchor.set(0.5);

    this._chips1000Container.addChild(this._chips1000.original, this._chips1000.clone);
    this._chips1000Container.position.x = 30;
    this._chips1000Container.position.y = -215;

    this._chipsDraggableContainer.addChild(this._chips1000Container);

    return this
  }

  initializeChips2000() {
    this._chips2000.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips2000.texture
    );

    this._chips2000.original = new PIXI.Sprite(
      PIXI.loader.resources.chips2000.texture
    );

    this._chips2000.clone.width   = 50;
    this._chips2000.clone.height  = 50;
    this._chips2000.clone.anchor.set(0.5);
    this._chips2000.clone.name = '_chips2000';
    this._chips2000.clone.value = 2000;
    this._chips2000.clone.interactive = true;
    this._chips2000.clone.buttonMode  = true;

    this._chips2000.original.width   = 50;
    this._chips2000.original.height  = 50;
    this._chips2000.original.anchor.set(0.5);

    this._chips2000Container.addChild(this._chips2000.original, this._chips2000.clone);
    this._chips2000Container.position.x = 30;
    this._chips2000Container.position.y = -270;

    this._chipsDraggableContainer.addChild(this._chips2000Container);

    return this;
  }

  initializeChips5000() {
    this._chips5000.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips5000.texture
    );

    this._chips5000.original = new PIXI.Sprite(
      PIXI.loader.resources.chips5000.texture
    );

    this._chips5000.clone.width   = 50;
    this._chips5000.clone.height  = 50;
    this._chips5000.clone.anchor.set(0.5);
    this._chips5000.clone.name = '_chips5000';
    this._chips5000.clone.value = 5000;
    this._chips5000.clone.interactive = true;
    this._chips5000.clone.buttonMode  = true;

    this._chips5000.original.width   = 50;
    this._chips5000.original.height  = 50;
    this._chips5000.original.anchor.set(0.5);

    this._chips5000Container.addChild(this._chips5000.original, this._chips5000.clone);
    this._chips5000Container.position.x = 30;
    this._chips5000Container.position.y = -325;

    this._chipsDraggableContainer.addChild(this._chips5000Container);

    return this;
  }

  initializeChips10000() {
    this._chips10000.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips10000.texture
    );

    this._chips10000.original = new PIXI.Sprite(
      PIXI.loader.resources.chips10000.texture
    );

    this._chips10000.clone.width   = 60;
    this._chips10000.clone.height  = 50;
    this._chips10000.clone.anchor.set(0.5);
    this._chips10000.clone.name = '_chips10000';
    this._chips10000.clone.value = 10000;
    this._chips10000.clone.interactive = true;
    this._chips10000.clone.buttonMode  = true;

    this._chips10000.original.width   = 60;
    this._chips10000.original.height  = 50;
    this._chips10000.original.anchor.set(0.5);

    this._chips10000Container.addChild(this._chips10000.original, this._chips10000.clone);
    this._chips10000Container.position.x = 30;
    this._chips10000Container.position.y = -380;

    this._chipsDraggableContainer.addChild(this._chips10000Container);

    return this;
  }

  initializeChips50000() {
    this._chips50000.clone = new PIXI.Sprite(
      PIXI.loader.resources.chips50000.texture
    );

    this._chips50000.original = new PIXI.Sprite(
      PIXI.loader.resources.chips50000.texture
    );

    this._chips50000.clone.width   = 60;
    this._chips50000.clone.height  = 50;
    this._chips50000.clone.anchor.set(0.5);
    this._chips50000.clone.name = '_chips50000';
    this._chips50000.clone.value = 50000;
    this._chips50000.clone.interactive = true;
    this._chips50000.clone.buttonMode  = true;

    this._chips50000.original.width   = 60;
    this._chips50000.original.height  = 50;
    this._chips50000.original.anchor.set(0.5);

    this._chips50000Container.addChild(this._chips50000.original, this._chips50000.clone);
    this._chips50000Container.position.x = 30;
    this._chips50000Container.position.y = -435;

    this._chipsDraggableContainer.addChild(this._chips50000Container);

    return this;
  }

  dragChips(thisChip){
    let self = this;
    let chipsPosition = [];

    thisChip
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove);

    function onDragStart(event) {
       this.dragging = true;
       this.data     = event.data;
       self._currentActivechips = this.name;
    }

    function onDragMove(mouse) {
      if (this.dragging) {
        let newPosition   = this.data.getLocalPosition(this.parent);
        //add child this chips to getOut on mask
        self._chipsDraggableContainer.addChild(this);
        self._chipsContainer.addChild(this);
        //this chips will follow same position of chips container when scroll
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
        this.alpha        = 0;
        this.newPosition  = newPosition;
        self._newActiveChips = this.name;
        // dragging clone get Y axis position
        /*get the position of our x dragging*/
        if (newPosition.x >= 60) {
          this.alpha        = 1;
          self._chipsIsDragging = true
          this.position.x = newPosition.x;
          this.position.y = newPosition.y;
          /*
           * change here the active chips
           * check if old === new
           */
          if (self._oldActiveChips !== self._newActiveChips) {
            self._newActiveChips = this.name;
            self.appendActiveChips(self._oldActiveChips, self._newActiveChips);
          }
          //current position when this chips already add on container
          if (this.position.y > 0) {
            if (self._currentCloneActivechips) {
              self._currentCloneDragchips = this.position.y;
              //get current position where this chips will back
              self._currentCloneActivechips = false;
            }
          }
        }

        // console.log('endx', this.position.x);
        self._hoverToCanvasDataEmitter.emit({
          x: this.position.x,
          y: this.position.y
        })
      }
    }

    function onDragEnd() {
      this.alpha            = 1;
      this.dragging         = false;
      self._chipsIsDragging = false;
      let newPosition       = this.data.getLocalPosition(this.parent);
      this.data             = null;

      if (this.newPosition.x >= 70) {
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
      }

      // console.log([self[self._currentActivechips]['original'].position.y])
      // console.log('endx', this.position.x);

      // /**
      //  * Get the slope
      //  * y = mx + b;
      //  */

      let A = [self[self._currentActivechips+'Container'].position.x, self._currentCloneDragchips];
      let B = [this.position.x, this.position.y];

      function slope(a, b) {
         if (a[0] == b[0]) {
             return null;
         }

         return (b[1] - a[1]) / (b[0] - a[0]);
      }

      function intercept(point, slope) {
         if (slope === null) {
             // vertical line
             return point[0];
         }

         return point[1] - slope * point[0];
      }

      var m = slope(A, B);
      var b = intercept(A, m);

      for (var x = A[0]; x <= B[0]; x = x + 15) {
         var y = m * x + b;
         chipsPosition.push({
           x: x,
           y: y
         });
      }

      if(self._chipDroppable && this.newPosition.x >= 70) {
        self._chipsToCanvasDataEmitter.emit({
          name: this.name,
          value: this.value,
        });

        /* initialize the bet chip */
        self.dropChip(self[self._currentActivechips]);
        self._chipsContainer.addChild(self[self._currentActivechips].bet);

        /* Initial position of the chip */
        self[self._currentActivechips].bet.position.x = this.position.x;
        self[self._currentActivechips].bet.position.y = (this.position.y - this.height);

        /* chip animation */
        self.animateChipsUp('y', this.height, 600, self[self._currentActivechips].bet);

        /* hide dragged chip */
        this.visible = false;
        requestAnimationFrame(backchipstooriginalposition);

        self._chipDroppable = false;
      } else {
        requestAnimationFrame(backchipstooriginalposition);
      }
    }

    function backchipstooriginalposition() {
      // check if chips dragged
      if(!self._currentCloneActivechips){
        if (chipsPosition.length !== 0) {
          self[self._currentActivechips]['clone'].position.x = chipsPosition[chipsPosition.length - 1].x;
          self[self._currentActivechips]['clone'].position.y = chipsPosition[chipsPosition.length - 1].y;
          chipsPosition.splice(-1, 1);
          requestAnimationFrame(backchipstooriginalposition);
        } else {
          self._currentCloneActivechips = true;
          self[self._currentActivechips]['clone'].visible = true;
          self[self._currentActivechips+'Container'].addChild(self[self._currentActivechips]['clone']);
          self[self._currentActivechips]['clone'].position.x = 0;
          self[self._currentActivechips]['clone'].position.y = 0;
        }
      } else{
        // when chips not drag, go back to same position
        self[self._currentActivechips]['clone'].alpha = 0;
        self[self._currentActivechips+'Container'].addChild(self[self._currentActivechips]['clone']);
        self[self._currentActivechips]['clone'].position.x = 0;
        self[self._currentActivechips]['clone'].position.y = 0;
      }
    }
  }

  dropChip(selected_chip) {
    // console.log(selected_chip)
    selected_chip.bet = new PIXI.Sprite(
      PIXI.loader.resources[selected_chip.clone.name].texture
    );

    selected_chip.bet.name    = 'bet_chip';
    selected_chip.bet.width   = 30;
    selected_chip.bet.height  = 20;
  }

  // self._summaryFunction.animateSummary('x', 700, 200, self._summaryContainer);

  animateChipsUp(prop, val, duration, element) {
    let self      = this;

    // The calculations required for the step function
    let start     = new Date().getTime();
    let end       = start + duration;
    let yPosition = element[prop];
    let distance  = 150;

    let animation = function() {
      // Get our current progres
      let timestamp = new Date().getTime();
      let progress  = Math.min((duration - (end - timestamp)) / duration, 1);

      // Update the container's property
      element[prop] = yPosition - (distance * progress);

      // If the animation hasn't finished, repeat the step.
      if (progress < 0.3) {
        requestAnimationFrame(animation);
      } else if (progress < 0.6) {
        self.animateChipsDown(prop, val, 150, element);
      }
    };

    // Start the animation
    return animation();
  }

  animateChipsDown(prop, val, duration, element) {
    let self      = this;
    // The calculations required for the step function
    let start     = new Date().getTime();
    let end       = start + duration;
    let yPosition = element[prop];
    let distance  = val + 30;

    let animation = function() {
      // Get our current progres
      let timestamp = new Date().getTime();
      let progress  = Math.min((duration - (end - timestamp)) / duration, 1);

      // Update the container's property
      element[prop] = yPosition + (distance * progress);

      // If the animation hasn't finished, repeat the step.
      if (progress < 1) { requestAnimationFrame(animation); }
    };

    // Start the animation
    return animation();
  }

  addChipsDraggableContainer() {
    // mask container
    let chips_Mask = new PIXI.Graphics();
    chips_Mask.beginFill(0x000000, 2);
    chips_Mask.drawRect(0, 55, 80, 210);
    chips_Mask.endFill();
    // mask declaration
    this._chipsDraggableContainer.mask = chips_Mask;
    this._chipsContainer.addChild(this._chipsDraggableContainer);
    // this._chipsContainer.addChild(bottomMask);

    return this;
  }

  initializeEvents() {
    let self = this;

    this._chipsContainer.interactive = true;
    this._chipsContainer.buttonMode = true;

    this._chipsContainer
    .on('mousedown', onDragStart)
    .on('touchstart', onDragStart)
    .on('mousemove', onDragMove)
    .on('touchmove', onDragMove)
    .on('mouseup', onDragEnd)
    .on('mouseupoutside', onDragEnd)
    .on('touchend', onDragEnd)
    .on('touchendoutside', onDragEnd);

    function onDragStart(event) {
      if (self._chipsIsDragging) {return;}
       this.dragging = true;
       this.data     = event.data;
       this.lastpivotdata = this.lastpivotdata ? this.lastpivotdata : 0;

       this.originalposition = this.data.getLocalPosition(this.parent);
    }

    function onDragMove(mouse) {
      if (this.dragging && !self._chipsIsDragging) {
        let newPosition = this.data.getLocalPosition(this.parent);
        this.newPosition = newPosition;

        /*get the position of our y dragging*/
        if (newPosition.x >= 70) {/* going to the outside of the dragging */

        } else {
          /* check here if the y is in the mask range */
          let sumLasPivotdataAndDraggableContainerPivot = (this.originalposition.y - newPosition.y) + this.lastpivotdata;

          if (this.lastpivotdata >= sumLasPivotdataAndDraggableContainerPivot) {
            if (sumLasPivotdataAndDraggableContainerPivot <= -500) {
              return;
            }
          } else if (this.lastpivotdata <= sumLasPivotdataAndDraggableContainerPivot) {
            if (sumLasPivotdataAndDraggableContainerPivot >= 10) {
              return;
            }
          }

          self._chipsDraggableContainer.pivot.y = (this.originalposition.y - newPosition.y) + this.lastpivotdata;
        }
      }
    }

    function onDragEnd() {
      if (self._chipsIsDragging) {return;}
      this.dragging   = false;
      this.data       = null;

      if (this.newPosition.x >= 70) {

      } else {
        this.lastpivotdata = self._chipsDraggableContainer.pivot.y;
      }
    }

    /* Arrow Buttons Events */
    let operation;
    let animating = false;

    /* Arrow Up */
    this._arrowUp
    .on('touchstart', function(event){
      animating = true;
      operation = 'subtraction';
      animate();
      toggleFillColor(self._arrowUp, 0XEF7329, 35);
    })
    .on('touchend', function(){
      animating = false;
      toggleFillColor(self._arrowUp, 0XEBBD63, 35);
    })
    .on('touchmove', function(){
      animating = false;
      toggleFillColor(self._arrowUp, 0XEBBD63, 35);
    })

    /* Arrow Down */
    this._arrowDown
    .on('touchstart', function(event){
      animating = true;
      operation = 'addition';
      animate();
      toggleFillColor(self._arrowDown, 0XEF7329, 65);
    })
    .on('touchend', function(){
      animating = false;
      toggleFillColor(self._arrowDown, 0XEBBD63, 65);
    })
    .on('touchmove', function(){
      animating = false;
      toggleFillColor(self._arrowDown, 0XEBBD63, 65);
    });

    function toggleFillColor(arrow, color, point) {
      arrow.clear();
      arrow.beginFill(color, 1);
      arrow.moveTo(20, 50);
      arrow.lineTo(50, 50);
      arrow.lineTo(35, point);
      arrow.lineTo(20, 50);
      arrow.endFill();
    }

    function animate() {
      if (animating && self._chipsDraggableContainer.pivot.y >= -500 && self._chipsDraggableContainer.pivot.y <= 10) {
        if(operation === 'addition'){
          self._chipsDraggableContainer.pivot.y += 3;
          if (self._chipsDraggableContainer.pivot.y >= 0) {self._chipsDraggableContainer.pivot.y = 0;}
        } else {
          self._chipsDraggableContainer.pivot.y -= 3;
          if (self._chipsDraggableContainer.pivot.y <= -500) {self._chipsDraggableContainer.pivot.y = -500;}
        }

        return requestAnimationFrame(animate);
      } else {
        return false;
      }
    }
  }
}
