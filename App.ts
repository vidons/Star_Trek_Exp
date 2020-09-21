import { BattleSpace } from "./src/BattleSpace";
import { ShipModel } from "./src/ShipModel";

let newGame: BattleSpace = new BattleSpace();


//vendingMachine.orderBattle(ShipModel.GALAXY);
newGame.simpleBattle(ShipModel.GALAXY, ShipModel.PROBE);
newGame.battle("scenario1");
//alert(ShipModel.SPHERE);