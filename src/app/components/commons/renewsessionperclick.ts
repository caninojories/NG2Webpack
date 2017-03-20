import {
  Injectable
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

import {
  UserSessionApi
} from './../../shared/api/user/user.session';
import {
  UserSessionPerTableApi
} from './../../shared/api/user/user.session.pertable';

@Injectable()
export class SessionRenew {
  constructor(private _userSessionApi: UserSessionApi,
    private _userSessionPerTableApi: UserSessionPerTableApi,
    private _routeParams: ActivatedRoute,) {}

  init() {
    this._userSessionApi.updateOne(this._routeParams.queryParams['value'].hash)
    .subscribe((response: any) => response);

    this._userSessionPerTableApi.updateOne(this._routeParams.queryParams['value'].hash)
    .subscribe((response: any) => response);
  }
}
