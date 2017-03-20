import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import * as oboe from 'oboe';

/* services */
import {
  CONFIG
} from '../../../shared/config';
import {
  ApiErrorService
} from '../../../components/commons/api.error.service';
@Injectable()
export class AnnouncementApi {
  constructor(private _apiErrorService: ApiErrorService) { }

  getOne(lang) {
    return Observable
    .of((response?: any) => {
      return oboe({
        url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'room/announcement?roomcode=M1&language=' + lang,
        method: 'GET'
      })
    })
    .map(response => {

      return this._apiErrorService.init.call(this._apiErrorService, response);
    })
    .delay(0)
    .do(response => response);
  }
}
