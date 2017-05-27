import {
  Component
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  UserApi
} from '../../shared/api/user';
import {
  User
} from '../class/user.class';
import {
  GlobalVariable
} from '../commons/global.variable.component';
/* settings */
import {
  LocalStorage
} from '../../shared/local.storage.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'shoutout-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  constructor(
    private _router       : Router,
    private _formBuilder  : FormBuilder,
    private _userApi      : UserApi,
    private _localStorage : LocalStorage
  ) {
    this._loginForm = this._formBuilder.group({
      'email': ['', [Validators.required, Validators.required, this.emailValidator]],
      'password': ['', [Validators.required]]
    });
  }

  private _loginForm : any;
  private _user = new User();

  onSubmit() {
    if (this._loginForm.valid) {
      let user = new User({
        email: this._loginForm.controls.email.value,
        password: this._loginForm.controls.password.value
      });

      this._userApi.doLogin(user)
      .subscribe(response => {
        this._localStorage.setToken('builder-token', response.data.token);
        GlobalVariable._user = response.data.user;
      }, (error) => {

      }, () => {
        this._router.navigate(['/']);
      });
    }
  }

  navigateToRegister() {
    this._router.navigate(['/registration']);
  }

  /* we can make a service for the list of validators
   * but for this demo let's to this now.
   * */
  emailValidator(control) {// tslint:disable:max-line-length
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return {'invalidEmailAddress': true};
    }
  }
}
