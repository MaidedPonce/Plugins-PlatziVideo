/* console.log('Hello, TypeScript')

function add(a: number, b: number) {
    return a + b;
}

const sum = add(3, 4); */
// boolean
let muted: boolean = true;
muted = false;


// Números
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Maided';
let saludo: string = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Maided', 'Andy', 'Kellin'];
// people.push('900')

let peopleAndNumbers: Array< string | number> = []


enum Sing {
    Andy = 'Andy',

    Chris = 'Chris',

    Vic = 'Vic',

    Jesse = 'Jesse'

}

let vocalFav: Sing = Sing.Andy
console.log(`Mi vocalista favorito es ${vocalFav}`)

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard '} 
// Object
let someOObject: Object = { type: 'Wildcard' }



function add(a: number, b: number): number {
    return a + b;
}

const sum = add(3, 5)


function  createAdder(a: number): (number) =>  number {
    return function(b: number) {
        return b + a;
    }
}

const addFuor = createAdder(8);
const fourPlus6 = addFuor(8)


function fullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
}

const maided = fullName('Maided', 'Ponce')