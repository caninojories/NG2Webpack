import {
  Modules
} from '../config/modules';
let CONFIG = require('../config/env.js');

export class Jwt {
  constructor() {}

  private _modules = Modules.get();

  encode(_decipher? : any) {
    let payload = {
      email         : _decipher.user.email,
      exp           : this._modules.moment().add(15, 'days').unix()
    };

    let token = this._modules.jwtsimple.encode(payload, CONFIG.ENCODEDHASH);

    return token;
  }

  decode(authorization) {
    return new Promise<any>((resolve, reject) => {
      if (!authorization) {
        reject();
      }

     let token = this._modules.jwtsimple.decode(authorization, CONFIG.ENCODEDHASH);

     resolve(token);
   });
  }
}
