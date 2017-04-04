import * as express from 'express';
import {Api} from './api';
import {ExpressConfig} from './config/express';
import {Modules} from './config/modules';

/* config */
import {
  Logger
} from './config/logger';

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

    /* api here */
    /* midlleware here */
    this.expressConfig.loadExpressMiddleware();

    process.on('unhandledRejection', (reason, p) => {
      new Logger('app.server.ts[api/room][72]', p, 'error');
      new Logger('app.server.ts[api/room][72]', 'REASON: ' + reason, 'error');
    });
  }

  getExpressInstance() {
    return this.app;
  }
}

if (!Modules.get().args.test) {new Server();}
