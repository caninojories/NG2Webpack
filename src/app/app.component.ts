import * as oboe from 'oboe';
import * as PIXI from 'pixi.js';
import * as $ from 'jquery';
import * as moment from 'moment';
import {
  Component,
  OnInit,
  ViewContainerRef} from '@angular/core';
import {
  LocalStorage
} from './shared/local.storage.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  UserSessionApi
} from './shared/api/user/user.session';
import {
  EmitterComponent
} from './components/commons/emitter.component';

@Component({
    selector: 'main-app',
    template: `
      <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.less'],
    providers: []
})
export class AppComponent {
  constructor(private _localStorage: LocalStorage,
  private _router : Router,
  private _routeParams: ActivatedRoute,
  private _userSessionApi : UserSessionApi
) {
    console.log('MAIN MODULE');
    // this.checkforSession();
  }

  private _emitterComponent = new EmitterComponent;
  private _isPixieResourcesLoaded : boolean = false;
  private _pixiResourcesEmitter   = this._emitterComponent.loadPixiResources();
  private _pixiResourcesCallBackSubscriber  = this._emitterComponent.pixiResourcesCallback();


  ngOnInit() {
    console.log('canino ito');
    this._pixiResourcesCallBackSubscriber.subscribe(_ => {
      this.pixiResources();
    });
  }

  pixiResources(){
    let self = this;
    PIXI.loader
    .add('chips5', 'img/chips/chips5.png')
    .add('chips10', 'img/chips/chips10.png')
    .add('chips20', 'img/chips/chips_bet20.png')
    .add('chips50', 'img/chips/chips_bet50.png')
    .add('chips100', 'img/chips/chips_bet100_hd.png')
    .add('chips200', 'img/chips/chips_bet200.png')
    .add('chips500', 'img/chips/chips_bet500.png')
    .add('chips1000', 'img/chips/chips_bet1000.png')
    .add('chips2000', 'img/chips/chips_bet2000.png')
    .add('chips5000', 'img/chips/chips_bet5000.png')
    .add('chips10000', 'img/chips/chips_bet10000.png')
    .add('chips50000', 'img/chips/chips_bet50000.png')
    .add('chipsCustom', 'img/chips/chips_betCUSTOM.png')
    .add('_chips5', 'img/chips/chips_with_value/bet_chip_5.png')
    .add('_chips10', 'img/chips/chips_with_value/bet_chip_10.png')
    .add('_chips20', 'img/chips/chips_with_value/bet_chip_20.png')
    .add('_chips50', 'img/chips/chips_with_value/bet_chip_50.png')
    .add('_chips100', 'img/chips/chips_with_value/bet_chip_100.png')
    .add('_chips200', 'img/chips/chips_with_value/bet_chip_200.png')
    .add('_chips500', 'img/chips/chips_with_value/bet_chip_500.png')
    .add('_chips1000', 'img/chips/chips_with_value/bet_chip_1000.png')
    .add('_chips2000', 'img/chips/chips_with_value/bet_chip_2000.png')
    .add('_chips5000', 'img/chips/chips_with_value/bet_chip_5000.png')
    .add('_chips10000', 'img/chips/chips_with_value/bet_chip_10000.png')
    .add('_chips50000', 'img/chips/chips_with_value/bet_chip_50000.png')
    .add('_chipsCustom', 'img/chips/chips_with_value/bet_chip_custom.png')
    .add('activechips', 'img/chips/activechips.png')
    .add('dragontiger_cardsresult', 'img/dragontiger/dragontiger_cardsresult.png')
    .add('og_back', 'img/cards/og_back.png')
    .add('_AD', 'img/cards/AD.png')
    .add('chipsicon', 'img/dragontiger/chip-icon-yellow.png')
    .add('magnifier', 'img/dragontiger/magnifier.PNG')
    .add('chipsicon_white', 'img/dragontiger/chip-icon-white.png')
    .add('billing', 'img/icon/billing.png')
    .load(function() {
      self._isPixieResourcesLoaded = true;
      self._pixiResourcesEmitter.emit({
        data: 'loaded'
      });
    });
  }

  checkforSession() {
    let self = this;

    let sessionTime = setInterval(function() {
      let currentTime =  moment(new Date()).unix();
      let session     = parseInt(self._localStorage.getToken('session'));

      if (session < currentTime) {
        self.showSessionModal('Session Expired. Please login again');
        self.deleteSessionIfExistedInServer();
        clearInterval(sessionTime);
      }
    }, 5000);
  }

  showSessionModal(message) {
    let self = this;
    /**
     * Display our general modal here
     */
     let modal       = document.createElement('div');
     let html  = '<div _ngcontent-dyx-5="" class="modal session_expired fade-scale" role="dialog" tabindex="-1">';
     html += '<div _ngcontent-dyx-5="" class="modal-dialog" role="document">';
     html += '<div _ngcontent-dyx-5="" class="modal-content">';
     html+= '<div _ngcontent-dyx-5="" class="modal-body">';
     html += '<p _ngcontent-dyx-5=""><span _ngcontent-dyx-5="" aria-hidden="true" class="glyphicon glyphicon-info-sign"></span>' + message + '</p></div></div></div></div>';
     modal.innerHTML = html;
     modal.id        = 'session_expired';
     document.body.appendChild(modal);

     $('.session_expired').modal('show');

     setTimeout(function() {
       $('.session_expired').modal('hide');
       $('.session_expired').remove();
       self._router.navigate(['/']);
     }, 5000);
  }

  deleteSessionIfExistedInServer() {
    this._userSessionApi.deleteOne(this._routeParams.queryParams['value'].hash)
    .subscribe((response:any) => response);
  }
}
