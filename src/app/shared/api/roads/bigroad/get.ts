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
/* services */
import {
  CONFIG
} from '../../../../shared/config';
@Injectable()
export class BigRoadAPI {
  constructor() { }

  list() {
    return Observable
      .of(_ => {
        return oboe({
          url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'roads/bigroad/list?roomcode=M1',
          method: 'GET'
        })
      })
      .delay(0)
      .do(response => response);
  }

  getLastEntry() {
    return Observable
      .of(_ => {
        return oboe({
          url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'roads/bigroad/lastentry?roomcode=M1',
          method: 'GET'
        })
      })
      .delay(0)
      .do(response => response);
  }

  checkEntry(shoecountid, cellrow, cellcolumn, column) {
    return Observable
      .of(_ => {
        return oboe({
          url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'roads/bigroad/check/entry?roomcode=M1&shoecountid=' + shoecountid + '&cellrow=' + cellrow + '&cellcolumn=' + cellcolumn + '&column=' + column,
          method: 'GET'
        })
      })
      .delay(0)
      .do(response => response);
  }
}
