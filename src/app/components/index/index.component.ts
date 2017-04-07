import * as moment from 'moment';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  UserApi
} from '../../shared/api/user';
import {
  PostApi
} from '../../shared/api/post';
import {
  GlobalVariable
} from '../commons/global.variable.component';
import {
  LocalStorage
} from '../../shared/local.storage.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  constructor(
    private _router: Router,
    private _userApi: UserApi,
    private _postApi: PostApi,
    private _localStorage: LocalStorage
  ) {}

  private _user = GlobalVariable._user;
  private _post = [];

  ngOnInit() {
    this.getOneUser();
    this.getListPost();
  }

  doShout() {
    if (!this._user.post) {return;}

    this._postApi.saveOne(this._user.post)
    .subscribe(response => {
      this._post.unshift({
        post: this._user.post,
        user: {
          fullname: response.data.user.fullname
        }
      })

      this._user.post = '';
    });
  }

  doLogout() {
    console.log('logout')
    this._localStorage.removeToken('builder-token');
    window.location.reload();
  }

  getOneUser() {
    this._userApi.getOne()
    .subscribe(response => {
      GlobalVariable._user = response.data.user;
      this._user = GlobalVariable._user;
    }, (error) => {

    }, () => {

    });
  }

  getListPost() {
    this._postApi.getList()
    .subscribe(response => {

      this._post = response.data.post;
    });
  }
}
