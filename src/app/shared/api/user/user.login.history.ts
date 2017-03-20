import * as oboe from 'oboe';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {
  Headers
} from '@angular/http';
/* shared */
import {
  CONFIG
} from '../../config';
import {
  LocalStorage
} from '../../local.storage.service';

export class UserLoginHistoryApi {
  constructor() {}

  private _localStorage = new LocalStorage();

  saveOne(hash) {
    return Observable
    .of((response?: any) => {
      return oboe({
        url:  window.location.protocol + '//' + window.location.host + '/api/v1/user/login/history',
        method: 'POST',
        body: {
          hash: hash
        }
      })
    })
    .delay(0)
    .do(response => response);
  }
}
