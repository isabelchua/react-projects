class Vehicle {
	constructor(_wheels) {
		this.numWheels = _wheels;
	}
	get wheels() {
		return this.numWheels;
	}
	set wheels(_wheels) {
		this.numWheels = _wheels;
	}
}

let car = new Vehicle(4);
console.log(car.wheels);
