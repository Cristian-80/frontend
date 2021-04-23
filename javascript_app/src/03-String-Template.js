console.log("+--------------------------------------------String Template---------------------------------------------+");

const apellido = 'González';
let nombre = 'Cristian Fernando';

let variableNum = 6;

console.log("Señor '"+nombre+"' su multiplicación es: '"+(variableNum*6)+"'");
console.log(`STRING TEMPLATE: Señor ${nombre +' '+ apellido} su multiplicación es ${variableNum*6}`);

console.log(`Llamado a una función desde StringTemplate ==>> ${fx_randomico('xyz')}`);

function fx_randomico(parmStr){
	return `${Math.random() * 100} Parametro >>>> ${parmStr}`;
}