class Square {
	constructor(_width) {
		this.width = _width;
		this.height = _width;
	}

	get area() {
		return this.width * this.height;
	}
}

let square1 = new Square(4);
console.log(square1.area);
