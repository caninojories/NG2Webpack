export class User {
  constructor(private _options ? : any) {
    if (!this._options) { return; }

    this.email    = this._options.email;
    this.fullname = this._options.fullname;
    this.password = this._options.password;
  }

  public email    : string;
  public fullname : string;
  public password : string;
  public post     : string;
}
