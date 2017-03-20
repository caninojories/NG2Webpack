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

/* shared */
import {
  CONFIG
} from '../../config';

declare let oboe;
@Injectable()
export class CardListApi {
  constructor() { }

  getList(roomcode, shoegamecountid ? : String) {
    return new Promise<any>((resolve, reject) => {
      oboe({
        url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'card/list?roomcode=M1&shoegamecountid=' + shoegamecountid,
        method: 'GET',
      })
        .done(response => {
          if (response.data) {
            resolve(response);
          }
        })
        .fail(error => {
          reject(error);
        })
    });
  }
}
