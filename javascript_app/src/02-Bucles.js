console.log('+-------------------Bucles------------------------+');

let limiteBucle = 10;
let contador = 0;

console.log('+ Bucle: Do While');
do {
    contador ++;
    console.log('Contador: '+contador);
} while (contador < limiteBucle);

console.log('+ Bucle: Do While');
let letCondicion = true;

while (letCondicion) {
    let letRandom = Math.random() * 10;
    console.log('Numero Randomico: '+letRandom);
    if (letRandom > 5) {
        letCondicion = false;
        console.log('Salida del Bucle: '+letCondicion);
    }
}

// reto: 1. implementar un contador y 2. sumar los numeros randomicos en un acumulador

console.log('+ Bucle: For');

let limiteFor = 20;

console.log('Limite = '+limiteFor);
for (let index = 0; index < limiteFor; index++) {
    let randomFor =  Number.parseInt((Math.random() * 10),10);
    console.log('Indice for: '+index);
    console.log('Random    : '+randomFor);    
}