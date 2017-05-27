/* angular components */
import {
  NgModule
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
/* components */
import {
  LoginComponent
} from './login.component';
import {
  SharedModule
} from '../commons/shared.component';
/* routing */
import {
  loginRouting
} from './login.routing.component';

@NgModule({
  imports : [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    loginRouting
  ],
  declarations : [
    LoginComponent
  ]
})
export class LoginModuleComponent {}
