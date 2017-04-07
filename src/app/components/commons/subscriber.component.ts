import {
  EmitterComponent
} from './emitter.component';

export class SubscriberComponent {
  constructor() {
    this.mainSubscriber();
  }

  private _emitterComponent  = new EmitterComponent();
  private _main              = this._emitterComponent.main();

  mainSubscriber() {
    this._main.subscribe(data => {
      this._emitterComponent[data.emitter]().emit(data.message);
    });
  }
}