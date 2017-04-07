import * as oboe from 'oboe';
/* angular components */
import {
  Injectable
} from '@angular/core';
import {
  Headers
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';
/* commons */
import {
  SessionExpired
} from '../../components/commons/session.expired.component';
/* settings */
import {
  CONFIG
} from '../settings/app.config';
import {
  LocalStorage
} from '../local.storage.service';
@Injectable()
export class UserApi {
  constructor(
    private _sessionExpired: SessionExpired,
    private _localStorage: LocalStorage
  ) {}

  saveOne(user) {
    return Observable.create(observer => {
      oboe({
        url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user',
        method: 'POST',
        body: {
          user: user
        }
      })
      .done(response => {
        if (response.code === 1) {
          observer.next(response);
          observer.complete();
        }
      })
      .fail(error => {
        if (error) {
          this._sessionExpired.check(error)
          .subscribe(response => {

          }, error => {

          }, _ => {

          });

          observer.error(error);
        }
      });
    });
  }

  getOne() {
    let headers = new Headers();
    headers.append('Authorization', this._localStorage.getToken('builder-token'));

    return Observable.create(observer => {
      oboe({
        url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user',
        method: 'GET',
        headers: headers
      })
      .done(response => {
        if (response.code === 1) {
          observer.next(response);
          observer.complete();
        }
      })
      .fail(error => {
        if (error) {
          this._sessionExpired.check(error)
          .subscribe(response => {

          }, error => {

          }, _ => {

          });

          observer.error(error);
        }
      });
    });
  }

  doLogin(user) {
    return Observable.create(observer => {
      oboe({
        url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user/login',
        method: 'POST',
        body: {
          user: user
        }
      })
      .done(response => {
        if (response.code === 1) {
          observer.next(response);
          observer.complete();
        }
      })
      .fail(error => {
        if (error) {
          this._sessionExpired.check(error)
          .subscribe(response => {

          }, error => {

          }, _ => {

          });

          observer.error(error);
        }
      });
    });
  }
}
