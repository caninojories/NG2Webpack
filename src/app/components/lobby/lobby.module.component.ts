import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  CommonModule
} from '@angular/common';

/* roads child component */
// import {
//   LoaderComponent
// } from '../../common/components/loader';
/*route*/
import {
  lobbyRouting
} from './lobby.routing.component';

/* api */

import {
  DerivedRoadsApi
} from '../../shared/api/roads/derivedroads/derivedroads';
import {
  RoomBetAreaMinMaxBetApi
} from '../../shared/api/room/room.betareaminmaxbet';
import {
  UserBalanceApi
} from '../../shared/api/user/user.balance';
import {
  UserSessionApi
} from '../../shared/api/user/user.session';
import {
  UserLoginHistoryApi
} from '../../shared/api/user/user.login.history';
import {
  UserHistoryPendingBetsApi
} from '../../shared/api/user/user.history.pendingbets';
import {
  UserHistoryDoneBetsApi
} from '../../shared/api/user/user.history.donebets';
import {
  AuthenticateTokenAndHash
} from './authenticatetokenandhash';
import {
  UserCheckTokenAndHashApi
} from '../../shared/api/user/user.checktokenandhash';
/*components*/
import {
  LobbyMainComponent
} from './lobby.main.component';
import {
  LobbyDragonTiger
} from './dragontiger/dragontiger.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    lobbyRouting
  ],
  declarations: [
    LobbyMainComponent,
    LobbyDragonTiger
  ],
  providers: [
    UserBalanceApi,
    UserSessionApi,
    DerivedRoadsApi,
    UserLoginHistoryApi,
    UserHistoryDoneBetsApi,
    RoomBetAreaMinMaxBetApi,
    AuthenticateTokenAndHash,
    UserCheckTokenAndHashApi,
    UserHistoryPendingBetsApi,
  ]
})
export class LobbyModule { }
