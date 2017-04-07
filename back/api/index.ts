import {
  User
} from '../model/user';
import {
  UserApi
} from './user/user';
import {
  PostApi
} from './post/post';

export class Api {
  constructor(private _app: any /*express.Application*/) {
    this._userApi = new UserApi(this._app);
    this._postApi = new PostApi(this._app);
  }

  private _userApi : UserApi;
  private _postApi : PostApi;

  userApi() {
    this._userApi.getOne();
    this._userApi.saveOne();
    this._userApi.doLogin();

    return this;
  }

  postApi() {
    this._postApi.saveOne();
    this._postApi.getList();

    return this;
  }
}
