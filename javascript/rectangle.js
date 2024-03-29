class Rectangle {
	//Setup
	constructor(_width, _height, _color) {
		console.log("The Rectangle is being created!");

		this.width = _width;
		this.height = _height;
		this.color = _color;
	}

	getArea() {
		return this.width * this.height;
	}
	printDesciption() {
		console.log(
			`my width is ${this.width} my height is ${this.height} my color is ${this.color}`
		);
	}
}

let myRectangle1 = new Rectangle(5, 3, "blue");
let myRectangle2 = new Rectangle(10, 5, "red");

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());

myRectangle1.printDesciption();
