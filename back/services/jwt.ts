import {
  Modules
} from '../config/modules';

export class Jwt {
  constructor() {}

  private _modules = Modules.get();

  encode(_decipher? : any) {
    let payload = {
      username      : _decipher.username,
      password      : _decipher.password,
      exp           : this._modules.moment().add(15, 'days').unix()
    };
    let token = this._modules.jwtsimple.encode(payload, process.env.ENCODEDHASH);

    return token;
  }

  decode(authorization) {
    return new Promise<any>((resolve, reject) => {
      if (!authorization) {
        reject();
      }

     let token = this._modules.jwtsimple.decode(authorization, process.env.ENCODEDHASH);

     resolve(token);
   });
  }
}
