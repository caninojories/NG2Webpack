import {
  Component
} from '@angular/core';

import {
  DragonTigerCanvas
} from './dragontiger.canvas.temp';

@Component({
  selector: 'LOBBY-DRAGONTIGER',
  templateUrl: './dragontiger.component.html',
  styleUrls: ['./dragontiger.component.less']
})
export class LobbyDragonTiger {
  constructor() {}

  private _dragonTigerCanvas = new DragonTigerCanvas();

  ngOnInit() {
    this._dragonTigerCanvas.init();
    this._dragonTigerCanvas.animate();
  }
}
