// CREAR UN ALGORITMO CON UN CICLO 

// Quiero que el cliente ingrese un numero, y a partir de el que se ejecute el codigo la cantidad de veces expresada en ese numero. 
// como lo logro? ingrese el dato, que el codigo se ejecute hasta que llegue al dato ingresado, y con un break se termine de ejecutar (si lo hago con FOR)
// proponer algoritmo con while, para que se ejecute mientras el dato ingresado sea distinto a (i), que cuando sea igual al dato, se corte la ejecucion.

let unNumero = parseInt(prompt("Ingrese un numero para ejecutar codigo 'FOR'"));

for (let i = 0; i<=100; i++){
    if (i == unNumero){
        break
    }
    // alert (i)
    console.log (i)
}

let unNumeroWhile = parseInt(prompt("Ingrese un numero para ejecutar codigo 'WHILE'"))
let numeroIncremento = 0;
let ejecutar = true
while (ejecutar) {
    if (numeroIncremento == unNumeroWhile){
        break;
    }
    console.log (numeroIncremento++);
}