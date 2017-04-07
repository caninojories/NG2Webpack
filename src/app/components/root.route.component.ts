import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  IndexComponent
} from './index/index.component';
import {
  CanActivateComponent
} from './index/index.canactivate.component';
import {
  PageNotFoundComponent
} from './page.not.found.component';

const appRoutes: Routes = [{
  path: '', component: IndexComponent,
  canActivate: [CanActivateComponent]
}, {
  path: '**',
  component: PageNotFoundComponent
}];

export const rootRouting = RouterModule.forRoot(appRoutes);
