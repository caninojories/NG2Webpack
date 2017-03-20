import {
  EmitterComponent
} from './emitter.component';

export class Canvas {
  constructor() {
    this.chipsToCanvas();
  }

  private _emitterComponent = new EmitterComponent();
  private _main = this._emitterComponent.main();

  chipsToCanvas() {
    this._main.subscribe(data => {
      this._emitterComponent[data.emitter]().emit(data.message);
    });
  }
}
