import {
  EmitterService
} from '../../shared/emitter.service';

export class EmitterComponent {
  constructor() {
  }

  main() {
    /**
     * use as medium in
     * emitter.in.dragontiger.component
     */
    return EmitterService.get('main');
  }

  userdata() {
    /** use by
     * roads.component
     * announcement.component
     * lobby.component
     */
    return EmitterService.get('userdata');
  }

  currentbet() {
    /** use by
     * roads.component
     * announcement.component
     */
    return EmitterService.get('currentbet');
  }

  updatedbalance() {
    /** use by
     * announcement.component
     * roads.component
     */
    return EmitterService.get('updatedbalance');
  }

  typebet() {
    /** use by
     * roads.component
     * cards.result.component
     */
    return EmitterService.get('typebet');
  }

  resetTypeBetAndCurrentBet() {
    /** use by
     * announcement.component
     */
    return EmitterService.get('resettypebetandcurrentbet');
  }

  resetCurrentAndPreviousBets() {
    /** use by
     * canvas.component
     * summary.and.timer.component
     */
    return EmitterService.get('resetcurrentandpreviousbets');
  }

  checkifbetispressed() {
    /** use by
     * roads.component
     * summary.and.timer.component
     */
    return EmitterService.get('checkifbetispressed');
  }

  onandoffvideo() {
    /** use by
     * roads.component
     * summary.and.timer.component
     */
    return EmitterService.get('onandoffvideo');
  }

  whichbetareadrop() {
    /** use by
     * chat.component
     * lobby.component
     */
    return EmitterService.get('whichbetareadrop');
  }

  assetPreviewData() {
    /** use by
     * announcement.component
     * preview.component
     */
    return EmitterService.get('assetPreviewData');
  }

  tutorialResumed() {
    /** use by
     * announcement.component
     * roads.component
     * summary.and.timer.component
     * chips.component
     */
    return EmitterService.get('tutorialResumed');
  }

  tutorialStarted() {
    /** use by
    * announcement.component
    * summary.and.timer.component
    */
    return EmitterService.get('tutorialStarted');
  }

  tutorialPause() {
    /** use by
    * summary.and.timer.component
    */
    return EmitterService.get('tutorialPause');
  }

  tutorialWon() {
    /** use by
    * cards.result.component
    * summary.and.timer.component
    */
    return EmitterService.get('tutorialWon');
  }

  shoeCount() {
    /** use by
     * road.component
     * cards.result.component
     * summary.and.timer.component
     */
    return EmitterService.get('shoecount');
  }

  summaryResult() {
    /** use by
     * road.component
     * summary.and.timer.compoent
     */
    return EmitterService.get('summaryresult');
  }

  summaryShoeCount() {
    /** use by
     * road.component
     * summary.and.timer.component
     */
    return EmitterService.get('summaryshoecount');
  }

  startBetData() {
    /** use by
     * road.component
     * summary.and.timer.component
     */
    return EmitterService.get('startBetData');
  }

  shuffleData() {
    /** use by
     * summary.and.timer.component
     */
    return EmitterService.get('shuffleData');
  }

  bigRoad() {
    /** use by
     * road.component
     */
    return EmitterService.get('big');
  }

  smallRoad() {
    /** use by
     * road.component
     */
    return EmitterService.get('small');
  }

  bigeyeRoad() {
    /** use by
     * road.component
     */
    return EmitterService.get('bigeye');
  }

  cockroachRoad() {
    /** use by
     * road.component
     */
    return EmitterService.get('cockroach');
  }

  confirmToCanvasData() {
    /** use by
     * road.component
     */
    return EmitterService.get('confirmToCanvasData');
  }

  chipsToCanvasData() {
    /** use by
     * road.component
     */
    return EmitterService.get('chipsToCanvasData');
  }

  resultwinner() {
    /** use by
     * cards.result.component
     */
    return EmitterService.get('resultwinner');
  }

  hoverToCanvasData() {
    /** use by
     * chips & canvas.component
     */
    return EmitterService.get('hoverToCanvasData');
  }

  AddBetAndChipsData() {
    /** use by
     * chips & canvas.component
     */
    return EmitterService.get('AddBetAndChipsData');
  }

  retrieveDataToCanvas() {
    /** use by
     * chips & canvas.component
     */
    return EmitterService.get('retrieveDataToCanvas');
  }

  MinMaxAndBalanceData() {
    /** use by
     * chips & canvas.component
     */
    return EmitterService.get('MinMaxAndBalanceData');
  }

  TableDropToChipsData() {
    /** use by
     * chips & canvas.component
     */
    return EmitterService.get('TableDropToChipsData');
  }

  allBetsConfirm() {
    /** use by
     * canvas & roads.component
     */
    return EmitterService.get('allbetsconfirm');
  }

  DropchipsToCanvasData() {
    /** use by
     * chips & canvas.component
     */
    return EmitterService.get('DropchipsToCanvasData');
  }
  errorRetrieveToCanvasData() {
    /** use by
     * roads ,chips & canvas.component
     */
    return EmitterService.get('errorRetrieveToCanvasData');
  }


  loadPixiResources() {
    /* dragon tiger chips */

    return EmitterService.get('pixiResources');
  }

  SummaryAndTimer() {
    /** use by
     *  summary.ts
     *  timer.ts
     */
    return EmitterService.get('SummaryAndTimer');
  }

  droppableChip() {
    /* chips and table */

    return EmitterService.get('droppableChips');
  }

  RoadsAndZoomRoads() {
    /** use by
     *  roads.ts
     *  zoomroads.ts
     */
    return EmitterService.get('RoadsAndZoomRoads');
  }

  TimerAndRoomLimit() {
    /** use by
     *  timer.ts
     *  roomlimit.ts
     */
    return EmitterService.get('TimerAndRoomLimit');
  }

  pixiResourcesCallback(){
    return EmitterService.get('pixiResourcesCallback');
  }

  clearChipsData() {
    return EmitterService.get('clearChipsData');
  }

  tapCanvasLabel() {
    return EmitterService.get('tapCanvasLabel');
  }
}
