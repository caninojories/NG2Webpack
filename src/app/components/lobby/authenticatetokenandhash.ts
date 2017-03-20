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
  LocalStorage
} from '../../shared/local.storage.service';
import {
  UserCheckTokenAndHashApi
} from '../../shared/api/user/user.checktokenandhash';

@Injectable()
export class AuthenticateTokenAndHash implements CanActivate {
  constructor(
    private _router                   : Router,
    private _userCheckTokenAndHashApi : UserCheckTokenAndHashApi,
    ) {}

    private _route : any;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this._route = route;
    return new Promise<any>((resolve, reject) => {
      this._userCheckTokenAndHashApi.getOne(this._route.queryParams.hash)
      .subscribe(response => {
        response
        .then(response => {
          if (response.code === 1) {
            resolve(response.data);
          }
        })
        .catch(error => {
          if (error) {
            reject(error);
          }
        });
      })
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
}
