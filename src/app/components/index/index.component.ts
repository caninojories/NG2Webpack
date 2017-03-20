import {
  Component
} from '@angular/core';
import {
  Router
} from '@angular/router';
import * as moment from 'moment';

/*shared*/
// import {CONFIG} from '../../shared/config';

// declare let $;
@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent {
  constructor(private _router: Router) {}

  ngOnInit() {
    // $('#fill-screen').focus(function() {
    //   var elem = document.getElementById('fill-screen');
    //   if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    //   }
    // });
  }

  navigate() {
    let navigationExtras = {
      queryParams: {
        'hash': '#'
      }
    };
    this._router.navigate(['/sfsdf'], navigationExtras)
  }
}
