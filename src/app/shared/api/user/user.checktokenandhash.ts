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
export class UserCheckTokenAndHashApi {
  constructor(private _apiErrorService: ApiErrorService) {}

  private _localStorage = new LocalStorage();

  getOne(hash) {
    let header = new Headers();
    header.append('Authorization', this._localStorage.getToken('celive-token'));

    return Observable
    .of((response?: any) => {
      return oboe({
        url:  CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user/checktokenandhash?hash=' + hash,
        method: 'GET',
        headers: header
      })
    })
    .map(response => {

      return this._apiErrorService.init.call(this._apiErrorService, response);
    })
    .delay(0)
    .do(response => response);
  }
}
