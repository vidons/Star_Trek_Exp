import { ShipCharacteristics } from "../src/ShipCharacteristics"
import { ShipModel } from "./ShipModel";

/*
class Experience extends ShipCharacteristics {

    shipExp: number;

    constructor(
        type: ShipModel,
        number: number,
        shipRole: string,
        hullPoints: number,
        shield: number,
        damage: number,
        typeWeapon: string,
        heal: number,
        shipExp: number) {
        super (type, number, shipRole, hullPoints, shield, damage, typeWeapon, heal)
        this.shipExp = shipExp;
    }
}
*/

class Experience {
    _type: ShipModel;
    _shipExp: number;

    constructor(type: ShipModel, shipExp: number) {
        this._type = type
        this._shipExp = shipExp;
    }

    public get type(): ShipModel {
        return this._type
    }
    
    public get shipExp(): number {
        return this._shipExp
    }
}

export { Experience }