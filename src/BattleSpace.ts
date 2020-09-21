import { ShipCharacteristics } from "./ShipCharacteristics";
import { ShipModel } from "./ShipModel";
import { WeaponType } from "./WeaponType"
import { ShipType } from "./ShipType"
import { Experience } from "./Experience";

class BattleSpace {
    private commissions: ShipCharacteristics[];
    private experienceLvl: Experience[];

    private friendShip: ShipCharacteristics;
    private enemyShip: ShipCharacteristics;

    public friendExp: number;
    public enemyExp: number;

    constructor() {
        this.initCommission();
        //this.addExp();

        this.friendShip = null;
        this.enemyShip = null;

        this.enemyExp = 0;
        this.enemyExp = 0;
    }

    public simpleBattle(shipId: string, enemyId: string): void {
        for (let ship of this.commissions) {
            if (ship.model == shipId) {
                this.friendShip = ship;
                break;
            }
        }
        
        for (let eShip of this.commissions) {
            if (eShip.model == enemyId) {
                this.enemyShip = eShip;
                break;
            }
        }
        
        if (this.friendShip != null && this.enemyShip != null) {
            this.executeBattle();
        }
    }

    totalfriendDamage;
    totalenemyDamage;
    
    totalfriendLife;
    totalenemyLife;
    
    totalfriendHeal;
    totalEnemyHeal;

    public battle(scenarioId: string): void {
        if (scenarioId == "scenario1") {
            //let friendArmada = this.friendShip.
            //alert(ShipCharacteristics[ShipModel.GALAXY]);
        } else {
            alert("no valid scenario");
        }
    }

    initCommission(): void {
        this.commissions = [];

        this.commissions.push(new ShipCharacteristics(ShipModel.GALAXY, 3, ShipType.CRUISER, 50000, 25000, 15000, WeaponType.FEDERATION, 0));
        this.commissions.push(new ShipCharacteristics(ShipModel.AMBASSADOR, 1, ShipType.CRUISER, 45000, 20000, 12500, WeaponType.FEDERATION, 0));
        this.commissions.push(new ShipCharacteristics(ShipModel.INTREPID, 3, ShipType.SCIENCEVESSEL, 15000, 12500, 7000, WeaponType.FEDERATION, 500));
        this.commissions.push(new ShipCharacteristics(ShipModel.OLYMPIC, 1, ShipType.SUPPORT, 7500, 2500, 2000, WeaponType.FEDERATION, 10000));
        this.commissions.push(new ShipCharacteristics(ShipModel.CUBE, 1, ShipType.BATTLESHIP, 100000, 25000, 5000, WeaponType.BORG, 0));
        this.commissions.push(new ShipCharacteristics(ShipModel.SPHERE, 2, ShipType.CRUISER, 40000, 20000, 10000, WeaponType.BORG, 0));
        this.commissions.push(new ShipCharacteristics(ShipModel.PROBE, 2, ShipType.SUPPORT, 10000, 3500, 2500, WeaponType.BORG, 10000));
    }

    addExp(): void {
        this.experienceLvl = [];
        if (this.friendExp > 0 ) {
            this.experienceLvl.push(new Experience(this.friendShip.model, this.friendExp));
        } else {
            this.experienceLvl.push(new Experience(this.enemyShip.model, this.enemyExp));
        }
        //alert("saasas" + this.ExperienceLvl[0].shipExp)
    }
/*
    public battleSpace() {

        if (this.friendShip.damage > this.enemyShip.hullPoints + (this.enemyShip.shield / 2)) {
            if (this.enemyShip.damage < this.friendShip.hullPoints + (this.friendShip.shield / 2))
            alert("friend win");
        } else {
            alert("enemy win");
        }

        for (var ship = 0; ship < this.Commissions.length; ship++) {
            //test[ship] =
            //alert();
            //alert(this.Commissions[ship].type);
        }
    }
*/
    executeBattle(): void {
        let msg: string = "Battle..";

        let repeatTimer = setInterval(() => {
            msg += "..";
            console.log(msg);
        }, 600);

        let finishTimer = setTimeout(() => {
            clearInterval(repeatTimer);

            if (this.friendShip.damage > this.enemyShip.hullPoints + (this.enemyShip.shield / 2)) {
                if (this.enemyShip.damage < this.friendShip.hullPoints + (this.friendShip.shield / 2))
                this.friendExp = this.enemyShip.hullPoints/10000;
                this.addExp();
                alert("Friend win and won " + this.friendExp + " experience.");
            } else {
                this.enemyExp = this.friendShip.hullPoints/10000;
                this.addExp();
                alert("Enemy win and get " + this.enemyExp + " experience.");
            }
            this.reset();
        }, 3000);
    }

    private reset(): void {
        this.friendShip = null;
        this.enemyShip = null;

        this.friendExp = null;
        this.enemyExp = null;
    }
}

export { BattleSpace }