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

@Injectable()
export class CanActivateComponent implements CanActivate{
  constructor(
    private _router : Router,
    private _localStorage: LocalStorage
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token = this._localStorage.getToken('builder-token');

    if (token) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return true;
    }
  }
}