import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import * as oboe from 'oboe';
import {
  Headers
} from '@angular/http';

/* services */
import {
  CONFIG
} from '../../../../shared/config';

import {
  LocalStorage
} from '../../../../shared/local.storage.service';
@Injectable()
export class SummaryAPI {
  constructor() { }

  private _localStorage = new LocalStorage();

  data(hash) {
    let header = new Headers();
    header.append('Authorization', this._localStorage.getToken('celive-token'));

    return Observable
      .of((response?: any) => {
        return oboe({
          url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'room/summary?roomcode=M1&hash=' + hash,
          method: 'GET',
          headers: header
        })
      })
      .delay(0)
      .do(response => response);
  }
}
