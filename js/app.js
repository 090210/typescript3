var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Voertuig = /** @class */ (function () {
    function Voertuig(kleur, gewicht, merk) {
        this.kleur = kleur;
        this.gewicht = gewicht;
        this.merk = merk;
    }
    Object.defineProperty(Voertuig.prototype, "kenteken", {
        get: function () {
            return this._kenteken;
        },
        set: function (kenteken) {
            if (kenteken.length == 8) {
                this._kenteken = kenteken;
            }
            else {
                this._kenteken = 'onjuist';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Voertuig;
}());
var PersonenAuto = /** @class */ (function (_super) {
    __extends(PersonenAuto, _super);
    function PersonenAuto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PersonenAuto;
}(Voertuig));
var vrachtauto = new Voertuig('blauw', 200, 'honda');
vrachtauto.kenteken = '00000000';
var persoonsauto = new PersonenAuto('blauw', 200, 'hunda');
persoonsauto.kenteken = '00000000';
persoonsauto.aantalDeuren = 4;
alert(persoonsauto.aantalDeuren);
