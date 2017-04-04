/* angular components */
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
/* components */
import {
  RegistrationComponent
} from './registration.component'
/* routing */
import {
  registrationRouting
} from './registration.routing.component';

@NgModule({
  imports : [
    FormsModule,
    registrationRouting
  ],
  declarations:[
    RegistrationComponent
  ]
})
export class RegistrationModule {}
