import * as moment from 'moment';
import * as $ from 'jquery';
import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  LocalStorage
} from '../../shared/local.storage.service';

@Injectable()
export class ApiErrorService {
  constructor(private _router: Router,
  private _localStorage: LocalStorage) {
    this.self = this;
  }

  private self;

  init(response) {
    let self = this;
    return new Promise<any>((resolve, reject) => {
      response()
      .done(res => {
        if (res.code === 1) {

          this._localStorage.setToken('session', moment(new Date()).add('m', 4).unix());
          resolve(res);
        }
      })
      .fail(error => {
        if (error) {
          if (error.jsonBody.message === 'session_expired') {
            showSessionModal('Session Expired. Please login again')
          } else if (error.jsonBody.message === 'account_already_login') {
            showSessionModal('Account Already Login')
          }

          this._localStorage.removeToken('session');
          reject(error);
        }
      });
    });


    function showSessionModal(message) {
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
  }
}
