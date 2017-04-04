/* angular components */
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
/* components */
import {
  LoginComponent
} from './login.component'
/* routing */
import {
  loginRouting
} from './login.routing.component';

@NgModule({
  imports : [
    FormsModule,
    loginRouting
  ],
  declarations:[
    LoginComponent
  ]
})
export class loginModuleComponent {}
