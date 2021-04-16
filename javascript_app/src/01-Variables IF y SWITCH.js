//Variables y Constantes
console.log('Alcance de Variables');

var variableGlobal = 'Variable de alcance Global';
const varConstante = 'Constante durante ejecucion';
let varLetLocal = 'ABC';
let varLetnumero = 1112;

console.log('Variable Global 1. '+variableGlobal);
console.log('Constante = '+varConstante);

{
    variableGlobal = 'otro Valor';
    console.log('Variable Global 2. '+variableGlobal);
    let varLetLocal = 'XYZ';
    console.log('letLocal: '+varLetLocal);
}
console.log('letLocal: '+varLetLocal);

console.log('+-------------------EVALUACION------------------------+');
let evaluacionIf = true;

if (evaluacionIf) {
    console.log('Adentro del IF');
    let letNumeroY = 11;
    let letNumeroX = 76;

    console.log('Operacion * = '+(letNumeroX * letNumeroY));
}else{
    console.log('Estamos en el ELSE del if');
}

console.log('+-------------------SELECTOR------------------------+');
let letKey = 2;
switch (letKey) {
    case 1:
        console.log('Caso para 1');
        break;
    case 2:
        console.log('Caso para 2');
        break;
    case 3:
        console.log('Caso para 3');
        break;
    default:
        console.log('Valor no determinado en el selector');
        break;
}