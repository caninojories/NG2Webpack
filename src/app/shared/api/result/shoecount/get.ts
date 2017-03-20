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
export class ShoeCountAPI {
  constructor() { }

  data() {
    return Observable
      .of(_ => {
        return oboe({
          url: CONFIG.HOSTNAME + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'room/shoecount?roomcode=M1',
          method: 'GET'
        })
      })
      .delay(0)
      .do(response => response);
  }
}
