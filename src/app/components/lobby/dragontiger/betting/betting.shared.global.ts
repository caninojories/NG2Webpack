import * as PIXI from 'pixi.js'

export class BettingSharedGlobal {
  public static _tieHoverContainer       = BettingSharedGlobal._tieHoverContainer ? BettingSharedGlobal._tieHoverContainer : new PIXI.Container();
  public static _dragonHoverContainer    = BettingSharedGlobal._dragonHoverContainer ? BettingSharedGlobal._dragonHoverContainer : new PIXI.Container();
  public static _tigerHoverContainer     = BettingSharedGlobal._tigerHoverContainer ?  BettingSharedGlobal._tigerHoverContainer : new PIXI.Container();
}
