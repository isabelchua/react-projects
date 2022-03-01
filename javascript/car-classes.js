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
	static accelerate() {
		console.log("go faster");
	}
}

let car = new Vehicle(4);
console.log(car.wheels);

class Car extends Vehicle {
	constructor(_wheels, _make, _model, _year) {
		super(_wheels);
		this.make = _make;
		this.model = _model;
		this.year = _year;
	}

	info() {
		console.log(
			"The",
			this.make,
			this.model,
			"was made in",
			this.year,
			"and has",
			this.wheels,
			"wheels"
		);
	}
}

let ferrari = new Car(4, "Ferrari", "Testarossa", 1985);
ferrari.info();
Car.accelerate();

class Animal {
	constructor(_legs) {
		this.legs = _legs;
	}
}

class Mammal extends Animal {
	constructor(_legs, _ears) {
		super(_legs);
		this.ears = _ears;
	}
}

let rabbit = new Animal(4);

// rabbit.legs;

console.log(rabbit.legs);

let horse = new Mammal(4, 2);
console.log("Ears " + horse.ears);
