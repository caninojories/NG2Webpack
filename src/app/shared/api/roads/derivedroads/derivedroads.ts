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
declare let oboe;
@Injectable()
export class DerivedRoadsApi {
  constructor() { }

  list(roomcode, road) {
    return Observable
    .of(_ => {
      return oboe({
        url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'roads/derivedroads/list?roomcode=' + roomcode + '&road=' + road,
        method: 'GET'
      })
    })
    .delay(0)
    .do(response => response);
  }

  getOne(roomcode, road, row, column, shoecountid) {
    return Observable
    .of(_ => {
      return oboe({
        url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'roads/bigroad/isLengthOrResultEqual?roomcode=' + roomcode + '&road=' + road + '&row=' + row + '&column=' + column + '&shoecountid=' + shoecountid,
        method: 'GET'
      })
    })
    .delay(0)
    .do(response => response);
  }

  getDerivedRoadsLastEntry(road) {
    return Observable
    .of(_ => {
      return oboe({
        url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'roads/derivedroads/lastentry?roomcode=M1&road=' + road,
        method: 'GET'
      })
    })
    .delay(0)
    .do(response => response);
  }
}
