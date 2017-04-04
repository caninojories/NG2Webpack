import * as path from 'path';
import * as args from 'yargs';
import * as bodyparser from 'body-parser';
import * as chalk from 'chalk';
import * as compression from 'compression';
import * as fs from 'fs';
import * as jwtsimple from 'jwt-simple';
import * as methodoverride from 'method-override';
import * as moment from 'moment';
import * as morgan from 'morgan';
import * as oboe from 'oboe';
import * as url from 'url';

export class Modules {
  constructor() {}

  static get() {
    return {
      args          : args.argv,
      bodyparser    : bodyparser,
      chalk         : chalk,
      compression   : compression,
      fs            : fs,
      path          : path,
      jwtsimple     : jwtsimple,
      methodoverride: methodoverride,
      moment        : moment,
      morgan        : morgan,
      oboe          : oboe,
      url           : url
    }
  }
}
