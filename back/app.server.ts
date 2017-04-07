import * as express from 'express';
import {
  Api
} from './api';
import {
  ExpressConfig
} from './config/express';
import {
  Modules
} from './config/modules';
import {
  Mongo
} from './services/mongo';
/* config */
import {
  Logger
} from './services/logger';

/**
 * The server.
 *
 * @class Server
 */
declare let global;
export class Server {
  public app: express.Application;
  public expressConfig: ExpressConfig;
  public api: Api;
  public mongo = new Mongo();
  public modules = Modules.get();
  static bootstrap(): Server;

  /**
  * Bootstrap the application.
  *
  * @class Server
  * @method bootstrap
  * @static
  * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
  */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
  * Constructor.
  *
  * @class Server
  * @constructor
  */
  constructor() {
    //create expressjs application
    this.app            = express();
    this.expressConfig  = new ExpressConfig(this.app);
    this.api            = new Api(this.app);
    this.expressConfig.loadExpressConfig();

    /* use the mongoose promise here*/
    this.modules.mongoose.Promise = <any>Promise;

    /* api here */
    this.api
    .userApi()
    .postApi();
    /* midlleware here */
    this.expressConfig.loadExpressMiddleware();

    /* load mongodb */
    this.mongo.init();

    process.on('unhandledRejection', (reason, p) => {
      new Logger('app.server.ts[api/room][72]', p, 'error');
      new Logger('app.server.ts[api/room][72]', 'REASON: ' + reason, 'error');
    });
  }

  getExpressInstance() {
    return this.app;
  }
}

new Server();