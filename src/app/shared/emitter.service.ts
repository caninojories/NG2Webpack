import {Injectable, EventEmitter} from '@angular/core'

@Injectable()
export class EmitterService {
  private static _emitters: { [channel: string]: EventEmitter<any> } = {};
  static get(channel: string): EventEmitter<any> {
    if (!this._emitters[channel]) {
      this._emitters[channel] = new EventEmitter();
    }

    return this._emitters[channel];
  }

  static remove(channel: string) {
    this._emitters[channel].unsubscribe();
    delete this._emitters[channel];
    return this._emitters[channel];
  }

  static clear(channel) {
    let self = this;
    for (let i = 0; i < channel.length; i++) {
      if (this._emitters[channel[i]]) {
        self._emitters[channel[i]].unsubscribe();
        delete self._emitters[channel[i]];
        return self._emitters[channel[i]];
      }
    }

    return false;
  }
}
