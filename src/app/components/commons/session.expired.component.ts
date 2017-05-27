import * as moment from 'moment';
import * as $ from 'jquery';
/* angular components */
import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs/Observable';
/* services */
import {
  LocalStorage
} from '../../shared/local.storage.service';

@Injectable()
export class SessionExpired {
  constructor(
    private _router : Router,
    private _localStorage : LocalStorage
  ) {}

  check(error) {
    return Observable.create(observer => {
      if (error) {
        console.log(error);
        if (error.jsonBody.message === 'session_expired') {
          /* handle here for session expiration */
        this._localStorage.removeToken('builder-token');
        } else {
          observer.error(error.jsonBody.message);
        }

        // observer.complete();

        error.jsonBody.message === 'session_expired' && setTimeout(_ => {
          // window.location.href = '/';
        }, 2500);
      }
    });
  }
}
