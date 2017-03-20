import {
  NgModule,
} from '@angular/core';
import {
  RouterOutlet
} from '@angular/router';
import {
  Http
} from '@angular/http';
import {
  BrowserModule
}  from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';
import {
  TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader
} from 'ng2-translate';

/* Components */
import {
  AppComponent
} from './app.component';
import {
  IndexComponent
} from '../app/components/index/index.component';
import {
  PageNotFoundComponent
} from '../app/components/404/page.not.found.component';

/* Shared */
import {
  LocalStorage
} from './shared/local.storage.service';
import {
  SessionRenew
} from './components/commons/renewsessionperclick';
import {
  UserSessionPerTableApi
} from './shared/api/user/user.session.pertable';

/* routing */
import {
  rootRouting
} from './components/root.route.component';

/*module*/
import {
  LobbyModule
} from './components/lobby/lobby.module.component';
import {
  AuthenticateModule
} from './components/authenticate/authenticate.module.component';

// import {
//   GameSelectionModule
// } from './components/gameselection/game.selection.module.component';

import {
  UserApi
} from './shared/api/user/user';
// Audio Service
// import {
//   AudioService
// } from './common/components/audio';
import {
  EmitterComponent
} from './components/commons/emitter.component';
import {
  ApiErrorService
} from './components/commons/api.error.service';

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    }),
    FormsModule,
    rootRouting,
    LobbyModule,
    AuthenticateModule,
    // GameSelectionModule
  ],
  exports: [TranslateModule],
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  providers: [
    LocalStorage,
    UserApi,
    // AudioService,
    EmitterComponent,
    ApiErrorService,
    SessionRenew,
    UserSessionPerTableApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  consstructor() {
  }
}
