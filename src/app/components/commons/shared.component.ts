/* angular components */
import {
  NgModule,
} from '@angular/core';
import {
  CommonModule/*use for *ngIf*/
} from '@angular/common';
import {
  ValidationMessages
} from './validation.messages.component';
import {
  SessionExpired
} from './session.expired.component';
import {
  LocalStorage
} from '../../shared/local.storage.service';
/*api*/
import {
  UserApi
} from '../../shared/api/user';
import {
  PostApi
} from '../../shared/api/post';

@NgModule({
  imports: [CommonModule],
  declarations: [ValidationMessages],
  exports: [
    CommonModule,
    ValidationMessages
  ],
  providers: [
    UserApi,
    PostApi,
    SessionExpired,
    LocalStorage
  ]
})
export class SharedModule { }
