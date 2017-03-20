import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  IndexComponent
} from './index/index.component';
import {
  PageNotFoundComponent
} from './404/page.not.found.component';

const appRoutes: Routes = [{
  path: '', component: IndexComponent
}, {
  path: '**',
  component: PageNotFoundComponent
}];

export const rootRouting = RouterModule.forRoot(appRoutes);
