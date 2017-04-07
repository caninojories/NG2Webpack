/* angular components */
import {
  NgModule,
} from '@angular/core';
import {
  RouterOutlet
} from '@angular/router';
import {
  BrowserModule
}  from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';
/* Components */
import {
  AppComponent
} from './app.component';
import {
  IndexComponent
} from './components/index/index.component';
import {
  CanActivateComponent
} from './components/index/index.canactivate.component';
import {
  PageNotFoundComponent
} from './components/page.not.found.component';
import {
  RegistrationModule
} from './components/registration/registration.module.component';
import {
  loginModuleComponent
} from './components/login/login.module.component';
/* routing */
import {
  rootRouting
} from './components/root.route.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RegistrationModule,
    loginModuleComponent,
    rootRouting,
  ],
  exports: [],
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent,
  ],
  providers: [CanActivateComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  consstructor() {
  }
}
