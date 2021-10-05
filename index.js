/**
 * TypeScript kodas "kompiliuojamas" į JavaScript kodą panaudojant tsc modulį (https://www.typescriptlang.org/download).
 * Kompiliatoriaus konfiguracija nurodoma tsconfig.json faile.
 * Kompiliacijos procesas aktyvuojamas naudojant `tsc` komandą. Papildomai galima nurodyti `--watch` argumentą.
 *
 * Tipus galime nurodyti:
 * - kintamiesiems (pvz. : const x: number;),
 * - funkcijų argumentams (pvz. : function x(y: string, z: boolean)),
 * - funkcijų grąžinamos reikšmės tipui nurodyti (pvz.: function f(): string[])
 */
var vardas = "Jurgis"; // visada reikia nurodyti kintamojo tipa
var x = 1;
var y = 2;
var z = x + y;
1 + 1; // 2
1 + "1"; // "11"
console.log("Labas, " + vardas);
var vardai = ["Jonas", "Birute", "barbora", "Elena"]; // kintamojo tipas saugo stringu masyva
vardai.push("Gediminas");

function pasisveikinti(pasisveikinimas, vardas) {
    console.log(pasisveikinimas + ", " + vardas);
}

function pasisveikintiSu(pasisveikinimas, vardas) {
    console.log(pasisveikinimas + ", " + vardas);
}

pasisveikintiSu("Labas", vardai[0]);
function pasisveikinkim(pasisveikinimas, vardas) {
    console.log(pasisveikinimas + ", " + vardas);
}

pasisveikinkim("Labas", vardai[0]);
function pasisveikintiSuZmonemis(vardai) {
    var iteratorius = function (vardas) {
        pasisveikinti("Labas", vardas);
    };
    vardai.forEach(iteratorius);
}
pasisveikintiSuZmonemis(vardai);

function suma(sk1, sk2) {
    return sk1 + sk2;
}

// Klasės (https://www.typescriptlang.org/docs/handbook/2/classes.html)
var Gyvenviete = /** @class */ (function () {
    function Gyvenviete(pavadinimas, gyventojuSkaicius, plotas) {
        console.log("Konstruktorius iskviestas");
        this.pavadinimas = pavadinimas;
        this.gyventojuSkaicius = gyventojuSkaicius;
        this.plotas = plotas;
    }
    Gyvenviete.prototype.spausdintiDuomenis = function () {
        console.log("Miesto pavadinimas: " + this.pavadinimas);
        console.log("Miesto gyventoju skai\u010Dius: " + this.gyventojuSkaicius);
        console.log("Miesto plotas: " + this.plotas + " km2");
        console.log("Miesto tankumas: " + this.gyventojuTankumas().toFixed(1) + " gyv./km2");
        console.log("------------");
    };
    Gyvenviete.prototype.gyventojuTankumas = function () {
        return this.gyventojuSkaicius / this.plotas;
    };
    return Gyvenviete;
}());
var gyvenviete1 = new Gyvenviete("Vilnius", 587581, 401);
var gyvenviete2 = new Gyvenviete("Klaipėda", 149157, 110);
gyvenviete1.spausdintiDuomenis();
gyvenviete2.spausdintiDuomenis();
console.log(gyvenviete1.pavadinimas);
