import {
  ModuleWithProviders
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  LobbyMainComponent
} from './lobby.main.component';
import {
  AuthenticateTokenAndHash
} from './authenticatetokenandhash';

/*routes*/
import {
  LobbyDragonTiger
} from './dragontiger/dragontiger.component';

export const lobbyRoutes: Routes = [{
  path: 'game-lobby',
  component: LobbyMainComponent,
  // canActivate: [AuthenticateTokenAndHash],
  children: [{
    path: 'dragontiger',
    data: {
      queryParams: 'children'
    },
    component: LobbyDragonTiger
  }]
}];

export const lobbyRouting: ModuleWithProviders = RouterModule.forChild(lobbyRoutes);
