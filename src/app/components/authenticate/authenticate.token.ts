import {
  Injectable
} from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute
} from '@angular/router';
import {
  UserApi
} from '../../shared/api/user/user';
import {
  UserLoginHistoryApi
} from '../../shared/api/user/user.login.history';
import {
  UserSessionApi
} from '../../shared/api/user/user.session';
import {
  LocalStorage
} from '../../shared/local.storage.service';
import * as moment from 'moment';

@Injectable()
export class AuthenticateToken implements CanActivate {
  constructor(
    private _router: Router,
    private _userApi: UserApi,
    private _routeParams: ActivatedRoute,
    private _localStrorage: LocalStorage,
    private _userLoginHistoryApi: UserLoginHistoryApi,
    private _userSessionApi: UserSessionApi,
    private _localStorage: LocalStorage
    ) {}

    private _route : any;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this._route = route;
    return new Promise<any>((resolve, reject) => {
      this._route.queryParams.hash ? this._userSessionApi.getOne(this._route.queryParams.hash)
      .subscribe(response => {
        response
        .then(response => {
          if (response.code === 1) {
            this.getUser()
            .then(_ => {

              this._localStorage.setToken('session', moment(new Date()).add(4, 'm').unix());
              resolve(true);
            })
            .catch(error => {
              reject(error);
            })
          }
        })
        .catch(error => {

          reject(error);
        });
      }) : reject({error: 'params_are_undefined'});
    });

    /**
     * This service use to guard protected routes
     * then redirected it to the desired routes
     * Example:
     *   this.router.navigate(['']);
     * or add additional querystring/s
     *   let navigationExtras = {
     *     queryParams: { 'session_id': sessionId },
     *     fragment: 'anchor'
     *   }
     *         ==========================
     * Can also be used with the auth service provider
     */
  }

  getUser() {
    return new Promise<any>((resolve, reject) => {
      this._userApi.getOne(this._route.queryParams.hash)
      .subscribe(response => {
        response
        .then(response => {
          if (response.code === 1) {

            this._localStrorage.removeToken('celive-token');
            this._localStrorage.setToken('celive-token', response.data.token);
            let navigationExtras = {
            queryParams: { 'hash': response.data.hash},
                fragment: 'anchor'
             }

             if (response.data && response.data.login && JSON.parse(response.data.login)) {
               this.saveLoginHistory(response, response.data.hash)
               .then(_ => {

                 this._router.navigate(['/game-selection'], navigationExtras);
                 resolve(true);
               })
             } else {
               this._router.navigate(['/game-selection'], navigationExtras);
               resolve(true);
             }
          }
        })
        .catch(error => {
          if (error) {
            reject(error);
          }
        });
      });
    })
  }

  saveLoginHistory(response, hash) {
    /*check if we have login=true*/
    return new Promise<any>((resolve, reject) => {
      this._userLoginHistoryApi.saveOne(hash)
      .subscribe(response => {
        response(null)
        .done(response => {

          resolve();
        })
        .fail(error => {

          reject(error);
        });
      });
    });
  }
}
