const array = ["casa", "perro", "jardin", "platos", "agua"]

const arrayRecortado = (array) => {
  console.log (array.slice(array.length-2) )
}

arrayRecortado(array)


const resultado =[]
for (let i = 0; i < 8; i++) {
    
    resultado.push ("hola")
}

const crearArray = (cantidad, valor) => {
let arraynuevo = []
for (let i = 0; i < cantidad; i++) {
    arraynuevo.push (valor)
    
}
return arraynuevo
}

console.log (crearArray(3, "perro"))


const crearPiramide = (valor) => {
    let numeroFilas = ""
    for (let i = 0; i < valor; i++) {
        numeroFilas = numeroFilas + "*"
        console.log (numeroFilas)
        
    }
}

// crearPiramide(13)

// for (let i = 0; i < array.length; i++) {
//     console.log (array[i])
    
// }

// Definí una función contiene que reciba como argumentos un número numero y 
// un array de números numeros y devuelva si el número se encuentra en dicho array.

//  contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])
// true
//  contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
// false

const contiene = (numero, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array.includes(numero)) {
            return true
        }

        else {
            return false
        }
        
    }
}

console.log (contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]))
console.log (contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]))

let nuevoArrayEnMayusculas = []

for (let i = 0; i < array.length; i++) {
   nuevoArrayEnMayusculas.push (array[i].toUpperCase())
    console.log(nuevoArrayEnMayusculas)
}


const palabrasMenoresa3 = (array) => {
    let nuevoArrayMenora3 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length <= 5) {
            nuevoArrayMenora3.push(array[i])
            console.log (nuevoArrayMenora3)
        }
        
    }
}

palabrasMenoresa3 (array)