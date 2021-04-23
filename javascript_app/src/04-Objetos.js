console.log('+-------------------Objetos------------------------+');

const persona = {
	nombre: 'Cristian',
	apellido_paterno: 'González',
	apellido_materno: 'Páez',
	fecha_nacimiento: '03-10-1998',
	direccion: {
		viaPrincipal: 'Calle',
		numVia: '127',
		nombreVia: 'Avenida',
		placa: '74a - 28',
		barrio: 'Niza',
		locacion: 'Norte',
		comuna: 'none'
	},
	propiedades: {
		finca: 'Gonzatlán',
		carro: 'Tesla model 3',
		notebook: 'MacBook Pro 13',
		TV: 'Samsumg QLED',
	},
	habilidades: {
		idiomas: ['Inglés', 'Francés', 'Italiano', 'Alemán', 'Español'],
		lenguajes_programacion: ['JavaScript', 'C#', 'PHP', 'Python', 'Go'],
	},
	novia: 'Shary Rodríguez',
	hermano: 'Sebastián González',
	fx_nombre_completo(){
		console.log(`Mi nombre es ${this.nombre} ${this.apellido_paterno} ${this.apellido_materno}`);
	},
	fx_tabular_atributos(){
		console.table(this);
	}
};

let otraPersona = {...persona}

let obj = Object.create(persona)

obj.nombre = 'Cristian';
obj.fx_nombre_completo();
obj.fx_tabular_atributos();

//console.table(otraPersona);

console.log('+-------------------Fin Programa------------------------+');