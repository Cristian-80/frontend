const vehicle = {
	tank_size: 100, 		//Tamaño del tanque
	kilm_liter: 0.2,  		//Kilometros por litro
	tire_radius: 15, 		//Radio de los neumáticos
	color: 'white',  		//Color del vehículo
	motor_status: true,		//Encendido o apagado
	fuel_quantity: 50,  	//Cantidad de combustible en tanque
	ind_tire_travel: 0,		//indicador metros recorridos por neumático
	ind_speed_up: 0,		//indicador de aceleración
	distance_traveled: 0,	//Distancia recorrida;
	tire_travel(){			//Recorrido del vehículo basado en el radio de los neumáticos
		const PI = 3.14;
		this.tire_travel = this.tire_radius * 2 * PI;
		console.log(`The distance traveled in centimeters by tire is: ${this.tire_travel}`);
		console.log(`The distance traveled in meters by tire is: ${(this.tire_travel/100).toFixed(3)}`);
	},
	fill_with_fuel(){   	//LLenar el tanque con combustible
		let aux_fuel_quantity = Math.random() * 100;
		if(aux_fuel_quantity <= (this.tank_size - this.fuel_quantity)){
			this.fuel_quantity += aux_fuel_quantity;
			console.log(`New fuel status ${this.fuel_quantity} liters`);
		}
		else{
			console.log('Fuel exceeds the maximum capacity of the tank');
		}
	},
	turn_on(){				//Encender el vehículo
		if(!this.motor_status){
			if(this.fuel_quantity >= 2){ 	//Mínimo 2 litros de combustible
				this.motor_status = true;
				console.log('The vehicle is now on');
				this.speed_up();
			}
			else{
				console.log('insufficient fuel for turn on the vehicle');
			}
		}
		else{
			console.log('The vehicle is already on');
		}
	},
	speed_up(){				//Acelerar el vehículo. También suma la distania recorrida
		if(this.motor_status){
			if(this.fuel_quantity > 0){
				this.ind_speed_up = Math.random() * 100 ;
				console.log(`the speed up is: ${this.ind_speed_up} kilometers`);
				this.distance_traveled += this.ind_speed_up;
				console.log(`Distance traveled by car is: ${this.distance_traveled} kilometers`);
				let fuel_consumed = this.ind_speed_up * this.kilm_liter
				this.fuel_quantity -= fuel_consumed;
				if(this.fuel_quantity < 0){
					this.fuel_quantity = 0;
				}
				console.log(`${fuel_consumed} liters of fuel consumed`);
				console.log(`New fuel status ${this.fuel_quantity} liters`);
			}
			else{
				this.turn_off();
				console.log('insufficient fuel');
			}
		}
		else{
			console.log('The vehicle is turn off. Please turn on it for speed up');
		}
		
	},
	turn_off(){			//Apagar el vehículo
		if(this.motor_status){
			this.motor_status = false;
			console.log('The vehicle is now off');
		}
		else{
			console.log('The vehicle is already off');
		}
	}
}


let while_control = true;

while(while_control){
	console.clear();
	menu();
	let op = prompt("switch an option: ");
	option(op);
	setTimeout(alert("2 seconds"),2000);
}

function menu(){
	console.log("1. Turn on vehicle");
	console.log("2. Turn of vehicle");
	console.log("3. Speed Up");
	console.log("4. Fill fuel");
	console.log("5. Show tire travel");
	console.log("0. Exit");
}

function option(op){
	switch(op){
		case '1' :
			vehicle.turn_on();
			break;
		case '2' :
			vehicle.turn_off();
			break;
		case '3' : 
			vehicle.speed_up();
			break;
		case '4' : 
			vehicle.fill_with_fuel();
			break;
		case '5':
			vehicle.tire_travel();
			break;
		case '0' :
			while_control = false;
			break;
	}
}