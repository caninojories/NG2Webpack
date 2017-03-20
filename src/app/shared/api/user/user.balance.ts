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
export class UserBalanceApi {
  constructor(private _apiErrorService: ApiErrorService) {}

  private _localStorage = new LocalStorage();

  updateOne(username, email, date, currency, roomcode, operatorname, gamename, result/*result*/, gameprogress,/*gameprogress*/playerbets, shoegamecountid, isresult) {
    let header = new Headers();
    header.append('Authorization', this._localStorage.getToken('celive-token'));
    header.append('Result', isresult);

    console.log(isresult);

    return Observable
    .of((response?: any) => {
      return oboe({
        url:  CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'user/balance?roomcode=' + roomcode,
        method: 'PUT',
        headers: header,
        body: {
          username  : username,
          email     : email,
          date      : date,
          currency  : currency,
          roomcode  : roomcode,
          operatorname: operatorname,
          gamename  : gamename,
          result    : JSON.stringify(result),
          playerbets: JSON.stringify(playerbets),
          gameprogress: gameprogress,
          status    : 'pending',
          shoegamecountid: shoegamecountid
        }
      })
    })
    .map(response => {

      return this._apiErrorService.init.call(this._apiErrorService, response);
    })
    .delay(0)
    .do(response => response);
  }
}
