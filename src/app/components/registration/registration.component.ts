import {
  Component
} from '@angular/core'
import {
  Router
} from '@angular/router';

import {
  User
} from '../class/user.class';

@Component({
  moduleId: module.id.toString(),
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent {
  constructor(
    private _router : Router
  ) {}

  private _user = new User();

  onSubmit() {
    console.log('Type submit');
  }

  navigateToLogin() {
    this._router.navigate(['/login'])
  }
}
