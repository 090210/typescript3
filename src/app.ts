class Voertuig {

    kleur: string;
    gewicht: number;
    merk: string;
    private _kenteken: string;

    constructor(kleur: string, gewicht:number, merk:string){
        this.kleur = kleur;
        this.gewicht = gewicht;
        this.merk = merk;
    }

    get kenteken():string {
        return this._kenteken;
    }

    set kenteken(kenteken: string){
        if(kenteken.length == 8){
            this._kenteken = kenteken;
        } else {
            this._kenteken = 'onjuist';
        }
    }
}

class PersonenAuto extends Voertuig {
    aantalDeuren: number;
}

var vrachtauto = new Voertuig('blauw', 200, 'honda');
vrachtauto.kenteken = '00000000'
var persoonsauto = new PersonenAuto('blauw', 200, 'hunda');
persoonsauto.kenteken = '00000000';
persoonsauto.aantalDeuren = 4;

alert(persoonsauto.aantalDeuren);
