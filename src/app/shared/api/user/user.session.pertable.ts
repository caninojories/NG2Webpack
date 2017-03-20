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

declare let oboe;

@Injectable()
export class UserSessionPerTableApi {
  constructor(private _apiErrorService: ApiErrorService) { }

  private _localStorage = new LocalStorage();

  getOne(hash, roomcode) {
    let header = new Headers();
    header.append('Authorization', this._localStorage.getToken('celive-token'));

    return Observable
      .of((response?: any) => {
        return oboe({
          url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user/session/pertable?hash=' + hash,
          method: 'POST',
          headers: header,
          body: {
            roomcode
          }
        });
      })
      .map(response => {
        return this._apiErrorService.init.call(this._apiErrorService, response);
      })
      .delay(0)
      .do(response => response);
  }

  updateOne(hash) {
    let header = new Headers();
    header.append('Authorization', this._localStorage.getToken('celive-token'));

    return Observable
    .of((response?: any) => {
      return oboe({
        url:  CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user/session/pertable?hash=' + hash,
        headers: header,
        method: 'PUT'
      });
    })
    .map(response => {

      return this._apiErrorService.init.call(this._apiErrorService, response);
    })
    .delay(0)
    .do(response => response);
  }

  deleteSession(hash) {
    let header = new Headers();
    header.append('Authorization', this._localStorage.getToken('celive-token'));

    return Observable
      .of((response?: any) => {
        return oboe({
          url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user/session/pertable?hash=' + hash,
          method: 'DELETE',
          headers: header
        });
      })
      .map(response => {
        return this._apiErrorService.init.call(this._apiErrorService, response);
      })
      .delay(0)
      .do(response => response);
  }
}
