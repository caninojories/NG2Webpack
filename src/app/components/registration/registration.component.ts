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
  User
} from '../class/user.class';
import {
  UserApi
} from '../../shared/api/user';
import {
  GlobalVariable
} from '../commons/global.variable.component';
/* settings */
import {
  LocalStorage
} from '../../shared/local.storage.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent {
  constructor(
    private _router : Router,
    private _formBuilder : FormBuilder,
    private _userApi : UserApi,
    private _localStorage : LocalStorage
  ) {
    this._registrationForm = this._formBuilder.group({
      'email': ['', [Validators.required, this.emailValidator]],
      'fullName': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(10), this.passwordValidator]],
      'confirmPassword': ['', [Validators.required, this.confirmPasswordValidator]]
    });
  }

  private _registrationForm : any;

  onSubmit(event) {
    let _user = new User({
      email: this._registrationForm.controls.email.value,
      fullname: this._registrationForm.controls.fullName.value,
      password: this._registrationForm.controls.password.value
    });

    /*submit the result here*/
    this._registrationForm.valid && this._userApi.saveOne(_user)
    .subscribe(response => {

      this._localStorage.setToken('builder-token', response.data.token);
      GlobalVariable._user = response.data.user;
    }, (error) => {

    }, () => {
      this._router.navigate(['/']);
    });
  }

  navigateToLogin() {
    this._router.navigate(['/login']);
  }

  emailValidator(control) { // tslint:disable:max-line-length
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return {'invalidEmailAddress': true};
    }
  }

  passwordValidator(control) {
    if (control.value.match(/.*[0-9].*/)) {
      return null;
    } else {
      return {'invalidPassword' : true};
    }
  }

  confirmPasswordValidator(control) {
    if (control.parent && control.parent.controls && control.value === control.parent.controls.password.value) {
      return null;
    } else {
      return {'invalidConfirmPassword': true};
    }
  }
}
