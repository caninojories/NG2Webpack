import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  IndexComponent
} from './index/index.component';
import {
  PageNotFoundComponent
} from './page.not.found.component';

const appRoutes: Routes = [{
  path: '', component: IndexComponent
}, {
  path: '**',
  component: PageNotFoundComponent
}];

export const rootRouting = RouterModule.forRoot(appRoutes);
