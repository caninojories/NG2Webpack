import * as moment from 'moment';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  constructor(
    private _router: Router
  ) {}

  ngOnInit() {
    this._router.navigate(['/login']);
  }
}
