import {
  ModuleWithProviders
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  RegistrationComponent
} from './registration.component';

const registrationRoutes : Routes = [{
  path: 'registration',
  component: RegistrationComponent
}];

export const registrationRouting: ModuleWithProviders = RouterModule.forChild(registrationRoutes);
