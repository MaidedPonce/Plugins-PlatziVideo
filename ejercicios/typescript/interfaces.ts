// Interfaces
enum Color {
    Rojo = 'Rojo', 
    Azul = 'Azul'
}
interface Rectangulo{
    ancho: number
    alto: number,
    color?: Color
}

let rec: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo
}

function area(r: Rectangulo) {
    return r.alto * r.ancho;
} 

const areaRect = area(rec);
console.log(areaRect)

rec.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rec.toString())
