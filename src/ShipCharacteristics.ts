import { ShipModel } from "./ShipModel";

class ShipCharacteristics {
    private _model: ShipModel;
    private _number: number;
    private _shipRole: string;
    private _hullPoints: number;
    private _shield: number;
    private _damage: number;
    private _typeWeapon: string;
    private _heal: number;

    constructor(
        model: ShipModel,
        number: number,
        shipRole: string,
        hullPoints: number,
        shield: number,
        damage: number,
        typeWeapon: string,
        heal: number) {
        this._model = model;
        this._number = number;
        this._shipRole = shipRole;
        this._hullPoints = hullPoints;
        this._shield = shield;
        this._damage = damage;
        this._typeWeapon = typeWeapon;
        this._heal = heal;
    }

    public get model(): ShipModel {
        return this._model;
    }

    public get number(): number {
        return this._number;
    }

    public get shipRole(): string {
        return this._shipRole;
    }

    public get hullPoints(): number {
        return this._hullPoints;
    }

    public get shield(): number {
        return this._shield;
    }

    public get damage(): number {
        return this._damage;
    }

    public get typeWeapon(): string {
        return this._typeWeapon;
    }

    public get heal(): number {
        return this._heal;
    }
}

export { ShipCharacteristics }
