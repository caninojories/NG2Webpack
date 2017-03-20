import * as oboe from 'oboe';
import {
  Observable
} from 'rxjs/Observable';
import {
  Injectable
} from '@angular/core';
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
import {
  ApiErrorService
} from '../../../components/commons/api.error.service';
@Injectable()
export class BetsHistoryApi {
  constructor(private _apiErrorService: ApiErrorService) {}

  private _localStorage = new LocalStorage();

  getOne(shoegamecountid, roomcode) {
    let header = new Headers();
    header.append('Authorization', this._localStorage.getToken('celive-token'));

    return Observable
    .of((response?: any) => {
      return oboe({
        url:  CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user/betshistory?shoegamecountid=' + shoegamecountid + '&roomcode=' + roomcode,
        method: 'GET',
        headers: header
      })
    })
    .delay(0)
    .map(response => {

      return this._apiErrorService.init.call(this._apiErrorService, response);
    })
    .do(response => response);
  }
}
