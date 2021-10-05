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

let vardas: string = "Jurgis";  // visada reikia nurodyti kintamojo tipa

const x: number = 1;
const y: number = 2;
const z: number = x + y;

1 + 1; // 2
1 + "1";// "11"

console.log(`Labas, ${vardas}`);

const vardai: string[] = ["Jonas", "Birute", "barbora", "Elena"];   // kintamojo tipas saugo stringu masyva
vardai.push("Gediminas");

function pasisveikinti(pasisveikinimas: string, vardas: string ): void {  // void tipas reiskia, kad funkcija nieko negrazins
    console.log(`${pasisveikinimas}, ${vardas}`);
    
}

function pasisveikintiSu(pasisveikinimas: string, vardas: string ): void {  // void tipas reiskia, kad funkcija nieko negrazins
    console.log(`${pasisveikinimas}, ${vardas}`);
}
pasisveikintiSu("Labas", vardai[0]);

function pasisveikinkim(pasisveikinimas: "Labas" |"Sveiki" | "Ahoy", vardas: string ): void {  
    console.log(`${pasisveikinimas}, ${vardas}`);
}
pasisveikinkim("Labas", vardai[0]);

function pasisveikintiSuZmonemis(vardai: string[]): void { // arba [string, string] arba Array<string>
    const iteratorius = (vardas: string) => {
        pasisveikinti("Labas", vardas);
    };
    vardai.forEach(iteratorius);
}
pasisveikintiSuZmonemis(vardai);

function suma(sk1: number, sk2: number): number {
    return sk1 + sk2;
}

// Klasės (https://www.typescriptlang.org/docs/handbook/2/classes.html)
class Gyvenviete {
pavadinimas: string;    // pavadinimas yra atributas
gyventojuSkaicius: number;
plotas: number; // km2

constructor(pavadinimas: string, gyventojuSkaicius: number, plotas: number) {
console.log("Konstruktorius iskviestas");
this.pavadinimas = pavadinimas;
this.gyventojuSkaicius = gyventojuSkaicius;
this.plotas = plotas;
}
spausdintiDuomenis(): void {
        console.log(`Miesto pavadinimas: ${this.pavadinimas}`);
        console.log(`Miesto gyventoju skaičius: ${this.gyventojuSkaicius}`);
        console.log(`Miesto plotas: ${this.plotas} km2`);
        console.log(`Miesto tankumas: ${this.gyventojuTankumas().toFixed(1)} gyv./km2`);
        console.log("------------");
    }

    gyventojuTankumas(): number {
        return this.gyventojuSkaicius / this.plotas;
    }
}

const gyvenviete1 = new Gyvenviete("Vilnius", 587581, 401);
const gyvenviete2 = new Gyvenviete("Klaipėda", 149157, 110);

gyvenviete1.spausdintiDuomenis();
gyvenviete2.spausdintiDuomenis();

console.log(gyvenviete1.pavadinimas);
