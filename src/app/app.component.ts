import {
  Component,
  OnInit,
} from '@angular/core';

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

  ngOnInit() {}
}
