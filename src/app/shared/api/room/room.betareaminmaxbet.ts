import {
  Injectable
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Observable
} from 'rxjs/Observable';
import {
  Headers
} from '@angular/http';
import {
  LocalStorage
} from '../../local.storage.service';
import * as oboe from 'oboe';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

/* services */
import {
  CONFIG
} from '../../../shared/config';
import {
  ApiErrorService
} from '../../../components/commons/api.error.service';
declare let oboe;
@Injectable()
export class RoomBetAreaMinMaxBetApi {
  constructor(private _apiErrorService: ApiErrorService) { }

  private _localStorage = new LocalStorage();

  getOne(hash) {
    let header = new Headers();
    header.append('Authorization', this._localStorage.getToken('celive-token'));

    return Observable
    .of((response?: any) => {
      return oboe({
        url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'operator?hash=' + hash,
        method: 'GET',
        headers: header
      })
    })
    .delay(0)
    .map(response => {

      return this._apiErrorService.init.call(this._apiErrorService, response);
    })
    .delay(0)
    .do(response => response);
  }
}
