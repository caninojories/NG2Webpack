// import {
//   Modal
// } from '../../components/dragontigerlobby/modal/modal';
// import {
//   Header
// } from '../../components/dragontigerlobby/header/header';
// import {
//   Settings
// } from '../../components/dragontigerlobby/header/settings';
// import {
//   Chips
// } from '../../components/dragontigerlobby/chips/chips';
// import {
//   CardsResult
// } from '../../components/dragontigerlobby/cardsresult/cards.result';
// import {
//   Roads
// } from '../../components/dragontigerlobby/roads/roads';
// import {
//   ZoomRoads
// } from '../../components/dragontigerlobby/zoomroads/zoomroads';
// import {
//   Timer
// } from '../../components/dragontigerlobby/timer/timer';
// import {
//   RoomLimit
// } from '../../components/dragontigerlobby/roomlimit/roomlimit';
// import {
//   Summary
// } from '../../components/dragontigerlobby/summary/summary';
// import {
//   CanvasTable
// } from '../../components/dragontigerlobby/canvas/canvas.table';
// import {
//   CanvasSettings
// } from './canvassettings/canvas.settings';
// import {
//   EmitterComponent
// } from '../../components/commons/emitter.component';
import {
  BettingComponent
} from './betting/betting.component';
import {
  CanvasSettings
} from '../../../shared/settings/canvas';

declare let PIXI;
export class Canvas {
  constructor(elementContainer) {
    let scale = 'width' + window.innerWidth + '.height' + window.innerHeight;
    let canvassettings = new CanvasSettings(scale);

    PIXI.settings.TARGET_FPMS = 0.18;

    this._tickerRenderer  = new PIXI.Application();
    this._renderer        = new PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {antialias: true, resolution: window.devicePixelRatio || 1,
    autoResize:true, transparent: true}, true);
    this._stage     = new PIXI.Container();
    this._renderer.view.style.position = 'absolute';
    this._renderer.view.style.top = '0';
    // this._renderer.ticker.speed = 2;
    // this._renderer.ticker.deltaTime = 2;

    document.body.appendChild(this._renderer.view);

    // this._roads   = new Roads(canvassettings.get().roads);
    // this._summary = new Summary(canvassettings.get().summary);
    // this._timer   = new Timer(canvassettings.get().timer);
  }

  // private _emitterComponent = new EmitterComponent;
  // private _pixiResourcesSubscriber = this._emitterComponent.loadPixiResources();
  // private _pixiResourcesEmitter = this._emitterComponent.loadPixiResources();

  private _stage           : any;
  private _renderer        : any;
  // private _modal           = new Modal();
  // private _header          = new Header();
  // private _settings        = new Settings();
  // private _chips           = new Chips();
  // private _cardsresult     = new CardsResult();
  // private _roads           = new Roads();
  // private _summary         = new Summary();
  // private _timer           = new Timer();
  // private _roomLimit       = new RoomLimit();
  // private _zoomroads       = new ZoomRoads();
  // private _canvasTable     = new CanvasTable();
  private _tickerRenderer  : any;

  addResources() {
    let self = this;
    setup();
      /* This `setup` function will run when the image has loaded */
    function setup() {
      /* Modal */
      // self._modal
      // .addModalMethod()
      // self._stage.addChild(self._modal.getModalContainer.apply(self._modal));
      // self._stage.addChild(self._modal.getWinningContainer.apply(self._modal));
      //
      // /* Chips Component */
      // self._chips.initializeRootContainer();
      // self._chips.initializeRootPosition();
      // self._chips.initializeHitAreaContainer();
      //
      // self._chips.addChipsDraggableContainer();
      // self._chips.loadResources();
      // self._chips.initializeEvents();
      // self._stage.addChild(self._chips.getChipsContainer.apply(self._chips));

      /* roads */
      // self._roads.initializeRootContainer()
      // .initializeRootPosition()
      // .initializeBigRoadComponent()
      // .initializeBeadRoadComponent()
      // .initializeBigEyeRoadComponent()
      // .initializeSmallRoadComponent()
      // .initializeCockroachRoadComponent()
      // .initializeBackgroundGraphicsContainer()
      // .initializeDragonRoundedGraphicsContainer()
      // .addGraphicsContainerintoContainer()
      // .initializeTigerRoundedGraphicsContainer()
      // .initializeZoomIconRoundedGraphicsContainer()
      // .initializeZoomIconImage()
      // .initializeConfirmButtonRoundedGraphicsContainer()
      // .initializeClearButtonRoundedGraphicsContainer()
      // .initializeDragonProbabilityGraphicsContainer()
      // .initializeTigerProbabilityGraphicsContainer()
      // .addProbabilityGraphicsContainerIntoProbabilityContainer()
      // .initializeFirstRowContainer()
      // .initializeSecondRowContainer()
      // .addRowsContainer()
      // self._stage.addChild(self._roads.getRoadsContainer.apply(self._roads));
      /* end roads*/

      /* cards result */
      // self._cardsresult
      // .socketConnect()
      // .initializeRootContainer()
      // .initializeRootPosition()
      // .initializeCardsResultImage()
      // // .initializeDragonCard()
      // .initializeBackCard()
      // .initializeCircles()
      // .addCircleLabelIntoCircle()
      // .addCardSpriteIntoCardContainer()
      // .addGraphicsContainerIntoRootContainer()
      // self._stage.addChild(self._cardsresult.getcardsResultContainer.apply(self._cardsresult));
      /* end cards result */

      /* summary*/
      // self._summary
      // .initializeDefaultRootContainer()
      // .initializeDefaultRootPosition()
      //
      // /*Close Summary*/
      // .addGraphicsContainerIntoContainer()
      // .initializeDefaultGraphicsContainers()
      // .addChildContainerIntoRootContainer()
      // .addDefaultTextToContainer()
      // /* Open Summary */
      // .addOpenSummaryTextToContainer()
      // .initializeOpenSummaryDefaultGraphicsContainers()
      // .addOpenSummaryGraphicsContainerintoContainer()
      // .addOpenSummaryChildContainerIntoRootContainer()
      //
      // .addSummaryFunction()
      // self._stage.addChild(self._summary.getsummaryContainer.apply(self._summary));
      // self._stage.addChild(self._summary.getOpenSummaryContainer.apply(self._summary));
      /* summary end*/

      /* timer start */
      // self._timer.initializeRootContainer();
      // self._timer.initializeRootPosition();
      // self._timer.initializeTimerCircleGraphicsContainer();
      // self._timer.initializeTimerArcGraphicsContainer();
      // self._timer.initializeRoomLimitButtonGraphicsContainer();
      // self._timer.initializeRoomLimitButtonIcon();
      // self._timer.addRoomLimitButtonGraphicsContainerIntoRoomLimitButtonContainer();
      // self._timer.initializeBillingImage();
      // self._timer.addGraphicsContainerIntoRootContainer();
      // self._timer.addTimerAreaFunction();
      // self._stage.addChild(self._timer.getTimerContainer.apply(self._timer));
      /* timer end */

      /* Render the stage */
      // requestAnimationFrame(animate);
      // window.addEventListener('resize', onResize, false);

      /* Header */
      // self._header
      // .initializeDefaultRootContainer()
      // .initializeDefaultRootPosition()
      // .initializeHeaderGraphicsContainer()
      // .initializeBackImage()
      // .initializeBackGraphicsContainer()
      // .initializeLeftHeaderImage()
      // .initializeCoinImage()
      // .initializeMenuGraphicsContainer()
      // .initializeMenuImage()
      // .initializeRightHeaderImage()
      // .initializeHornImage()
      // .initializeAnnouncementGraphicsContainer()
      // .addContainersIntoHeaderContainer()
      // .addHeaderFunction(self._tickerRenderer)
      // self._stage.addChild(self._header.getHeaderContainer.apply(self._header));

      /* Settings */
      // self._settings
      // .addSettingsMethod()
      // self._stage.addChild(self._settings.getSettingsModalContainer.apply(self._settings));

      /* room limit start */
      // self._roomLimit
      // .initializeRootContainer()
      // .initializeRootPosition()
      // .initializeRoomLimitModalGraphicsContainer()
      // .initializeRoomLimitGraphicsContainer()
      // .initializeRoomLimitIcon()
      // .initializeCloseGraphicsContainer()
      // .initializeCloseBackgroundGraphicsContainer()
      // .initializeRoomLimitHeaderGraphicsContainer()
      // .initializeRoomLimitRowsGraphicsContainer()
      // .addColumnsIntoRows()
      // .addBackgroundGraphicsIntoBackgroundContainer()
      // .addRoomLimitGraphicsContainerIntoRoomLimitContainer()
      // .addRoomLimitFunction()
      // self._stage.addChild(self._roomLimit.getRoomLimitContainer.apply(self._roomLimit));
      /* room limit end */

      /*start zoom roads*/
      // self._zoomroads
      // .initializeRootContainer()
      // .initializeRootPosition()
      // .initializeModalGraphicsContainer()
      // .initializeBackgroundGraphicsContainer()
      // .initializeCloseGraphicsContainer()
      // .initializeCloseBackgroundGraphicsContainer()
      // .initializezoomHeaderRowContainer()
      // .initializeBodyGraphicsContainer()
      // .initializeZoomBigRoadComponent()
      // .initializeZoomBeadRoadComponent()
      // .initializeZoomBigEyeRoadComponent()
      // .initializeZoomSmallRoadComponent()
      // .initializeZoomCockroachRoadComponent()
      // .initializeFirstRowContainer()
      // .initializeSecondRowContainer()
      // .initializeThirdRowContainer()
      // .addBodyGraphicsContainerIntoBodyContainer()
      // .initializeDragonProbabilityGraphicsContainer1()
      // .initializeDragonProbabilityGraphicsContainer2()
      // .initializeTigerProbabilityGraphicsContainer1()
      // .initializeTigerProbabilityGraphicsContainer2()
      // .addZoomProbabilityGraphicsContainerIntoZoomProbabilityContainer()
      // .initializezoomFooterRowContainer()
      // .addZoomRowsContainer()
      // .addZoomRoadModal()
      // .addZoomRoadsFunction()
      // self._stage.addChild(self._zoomroads.getZoomRoadsContainer.apply(self._zoomroads));
      /*end zoom roads*/

      /* Canvas Table */
      // self._canvasTable.appendTableCanvasLayout();
      // self._stage.addChild(self._canvasTable.getCanvasTableContainer.apply(self._canvasTable));
      /* END Canvas Table */

      // self._stage.setChildIndex(self._canvasTable.getCanvasTableContainer(), 3);
      // self._stage.setChildIndex(self._chips.getChipsContainer(), 4);
      // self._stage.setChildIndex(self._modal.getModalContainer(), 5);
      // self._stage.setChildIndex(self._modal.getWinningContainer(), 6);

      // self._renderer.stage.addChild(self._stage);
      animate();
    }

    function animate() {
      requestAnimationFrame(animate);
      self._renderer.render(self._stage);
    }

    function onResize() {
      let screenW = window.innerWidth;
      let screenH = window.innerHeight;

      self._renderer.resize(screenW, screenH);
      requestAnimationFrame(animate);
    }
  }
}
