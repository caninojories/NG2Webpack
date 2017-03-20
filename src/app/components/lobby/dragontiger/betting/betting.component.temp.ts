import {
  TieLayoutComponent
} from './tie.layout.component';
import {
  DragonLayoutComponent
} from './dragon.layout.component';

export class BettingComponent {
  constructor() {}

  private _tieLayoutComponent = new TieLayoutComponent();
  private _dragonLayoutComponent = new DragonLayoutComponent();

  build() {
    return {
      tie : this._tieLayoutComponent.build(),
      dragon: this._dragonLayoutComponent.build()
    }
  }
}
