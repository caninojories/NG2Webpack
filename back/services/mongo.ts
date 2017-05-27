import {
  Modules
} from '../config/modules';

export class Mongo {
  constructor(private connection? :String) {
    this._connection = this.connection;
  }

  private _connection;
  private _modules  = Modules.get();

  init() : any {
    let self = this;
    if (self._modules.mongoose.connection.readyState === 0) {
      console.log(this._modules.chalk.red.bold('Mongo DB Started'));

      let connectingState;

      this._modules.mongoose.connection.on('connecting', _ => {
        connectingState = setInterval(_ => {
          console.log(self._modules.chalk.green.bold('Connecting...'));
        }, 300);
      });

      this._modules.mongoose.connection.on('connected', _ => {
        clearInterval(connectingState);
        console.log(self._modules.chalk.cyan.bold('Mongoose connection established successfully'));
      });

      this._modules.mongoose.connection.on('disconnected', _ => {
        clearInterval(connectingState);
        console.log(self._modules.chalk.red.bold('Mongo DB connection closed'));
      });

      this._modules.mongoose.connection.on('error', (error) => {
        clearInterval(connectingState);
        console.error('Connection to mongo failed ' + error);
      });

      /*close our connection when the app stop*/
      process.on('SIGINT', function() {
        self._modules.mongoose.connection.close(_ => {
          console.log('Mongoose disconnected on app termination');
          process.exit(0);
        });
      });

      return self._modules.mongoose.connect(self._connection || 'mongodb://192.168.0.140:27017/builder');
    }
  }
}
