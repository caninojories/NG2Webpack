/* angular components */
import {
  NgModule
} from '@angular/core';
import {
  BrowserModule 
} from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
/* components */
import {
  RegistrationComponent
} from './registration.component'
import {
  SharedModule
} from '../commons/shared.component';
/* routing */
import {
  registrationRouting
} from './registration.routing.component';

@NgModule({
  imports : [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    registrationRouting,
  ],
  declarations:[
    RegistrationComponent
  ]
})
export class RegistrationModule {}
