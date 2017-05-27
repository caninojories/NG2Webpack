import * as Const from '../../config/const';
import {
  User
} from '../../model/user';
import {
  Jwt
} from '../../services/jwt';
import {
  Logger
} from '../../services/logger';

export class UserApi {
  constructor(private _app : any /*express.Application*/) {}

  private _jwt = new Jwt();

  saveOne() {
    this._app
    .route(Const.apiVersion + 'user')
    .post((req, res, next) => {
      let _body = req.body;

      let user = new User({
        email: _body.user.email,
        fullname: _body.user.fullname,
        password: _body.user.password
      });

      user.save((error) => {
        error && res.status(501)
        .send({
          code: 0,
          message: error
        });

        /* add jwt here */
        let token = this._jwt.encode(_body);

        !error && res.status(200)
        .send({
          code: 1,
          data: {
            token: token,
            user: user
          }
        });
      });
    });
  }

  getOne() {
    this._app
    .route(Const.apiVersion + 'user')
    .get((req, res, next) => {
      this._jwt.decode(req.headers.authorization)
      .then(user => {
        return User.findOne({
          email: user.email
        })
        .exec();
      })
      .then(response => {

        res.status(200)
        .send({
          code: 1,
          data: {
            user: response
          }
        });
      })
      .catch(error => {
        new Logger('user.ts[api/user][71]', error.message ? error.message : error, 'error');

        res.status(503)
        .send({
          code: 0,
          message: error && error.message ? error.message : 'error in getOne for UserApi'
        });
      });
    });
  }

  doLogin() {
    this._app
    .route(Const.apiVersion + 'user/login')
    .post((req, res, next) => {
      let _body = req.body;

      // console.log(User);
      User.findOne({
        email: _body.user.email
      })
      .exec()
      .then(user => {
        user.comparePassword(_body.user.password, (error, equal) => {
          if (!error && equal) {
            /* create a jwt here */
            let token = this._jwt.encode(_body);

            res.status(200)
            .send({
              code: 1,
              data: {
                token: token,
                user : user
              }
            });
          } else {
            res.status(401)
            .send({
              code: 0,
              message: 'authentication fail.'
            });
          }
        });
      });
    });
  }
}
