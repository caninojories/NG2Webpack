import * as oboe from 'oboe';
import {
  Injectable
} from '@angular/core';
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
import {
  ApiErrorService
} from '../../../components/commons/api.error.service';

@Injectable()
export class UserHistoryDoneBetsApi {
  constructor(private _apiErrorService: ApiErrorService) {}

  private _localStorage = new LocalStorage();

  getList(roomcode, operatorname, email) {
    return Observable
    .of((response?: any) => {
      return oboe({
        url:  CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user/betshistory?roomcode=' + roomcode + '&operatorname=' + operatorname + '&email=' + email,
        method: 'GET'
      })
    })
    .delay(0)
    .map(response => {

      return this._apiErrorService.init.call(this._apiErrorService, response);
    })
    .do(response => response);
  }
}
