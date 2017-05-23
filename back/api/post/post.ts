import * as Const from '../../config/const';
import {
  Post
} from '../../model/post';
import {
  User
} from '../../model/user';
import {
  Jwt
} from '../../services/jwt';
import {
  Logger
} from '../../services/logger';
import {
  Cache
} from '../../services/cache';

export class PostApi {
  constructor(private _app: any /*express.Application*/) {}

  private _jwt = new Jwt();

  saveOne() {
    this._app
    .route(Const.apiVersion + 'post')
    .post((req, res, next) => {
      let _body = req.body;
      let _user = <any>{};

      /*get the user details by getting the authentication*/
      this._jwt.decode(req.headers.authorization)
      .then(response => {
        return User.findOne({
          email: response.email
        })
        .exec();
      })
      .then(user => {
        _user = user;
        let post = new Post({
          post: _body.post,
          user: {
            email: user.email,
            fullname: user.fullname
          }
        });

        return post.save();
      })
      .then(_ => {

        res.status(200)
        .send({
          code: 1,
          data: {
            user: {
              fullname: _user.fullname
            }
          }
        });
      })
      .catch(error => {
        new Logger('post.ts[api/post][50]', error.message ? error.message : error, 'error')

        res.status(503)
        .send({
          code: 0,
          message: error && error.message ? error.message : 'error in saveOne for PostApi'
        });
      });
    });
  }

  getList() {
    this._app
    .route(Const.apiVersion + 'post/list')
    .get(new Cache().init, (req, res, next) => {
      this._jwt.decode(req.headers.authorization)
      .then(user => {
        return Post.find({})
        .sort({'createdAt': -1})
        .exec()
      })
      .then(response => {

        res.status(200)
        .send({
          code: 1,
          data: {
            post: response
          }
        })
      })
      .catch(error => {
        new Logger('post.ts[api/user][92]', error.message ? error.message : error, 'error')

        res.status(503)
        .send({
          code: 0,
          message: error && error.message ? error.message : 'error in getList for PostApi'
        });
      });
    });
  }
}