import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  CommonModule
} from '@angular/common';

import {
  AuthenticateRouting
} from './authenticate.routing.component'
import {
  AuthenticateMainComponent
} from './authenticate.main.component';
import {
  AuthenticateComponent
} from './authenticate.component';
import {
  AuthenticateToken
} from './authenticate.token';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticateRouting
  ],
  declarations: [
    AuthenticateMainComponent,
    AuthenticateComponent
  ],
  providers: [AuthenticateToken]
})
export class AuthenticateModule {}
