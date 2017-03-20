import {
  ModuleWithProviders
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  AuthenticateMainComponent
} from './authenticate.main.component';
import {
  AuthenticateComponent
} from './authenticate.component';

import {
  AuthenticateToken
} from './authenticate.token';

export const AuthenticateRoutes: Routes = [{
  path: 'authenticate',
  component: AuthenticateMainComponent,
  canActivate: [AuthenticateToken],
  children: [{
    path: '',
    data: {
      queryParams: 'children'
    },
    component: AuthenticateComponent
  }]
}];

export const AuthenticateRouting: ModuleWithProviders = RouterModule.forChild(AuthenticateRoutes);
