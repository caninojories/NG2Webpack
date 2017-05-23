import {
  Component,
  OnInit,
} from '@angular/core';
import * as CONFIG from './shared/settings/app.config';

@Component({
    selector: 'main-app',
    template: `
      <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.less'],
    providers: []
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(CONFIG);
  }
}
