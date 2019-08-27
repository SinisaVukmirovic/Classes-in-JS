// JS CLASSES

// 1. The Basics
// ==============

class Rectangle {
    // constructor function and instance properties
    constructor( width, height, color ) {
        console.log('Rectangle is being created!');

        this.width = width;
        this.height = height;
        this.color = color;
    }

    // instance methods
    getArea() {
        return this.width * this.height;
    }

    printDescription() {
        console.log(`I am a rectangle of ${this.width} * ${this.height} and I am ${this.color}`);
    }
}

let rectangle1 = new Rectangle(5, 3, 'blue');
let rectangle2 = new Rectangle(10, 6, 'red');

rectangle1.printDescription();

console.log('======================================');

// 2. Getters & Setters
// =======================

class Square {
    constructor( width ) {

        this.width = width;
        this.height = width;
        this.numberOfRequestsForArea = 0;
    }

    // getter
    get area() {
        this.numberOfRequestsForArea++;
        return this.width * this.width;
    }

    // setter
    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

let square1 = new Square(4);

// getter behaves like a property and doesnot have () when called
console.log(square1.area); 

// setter 
// a setter assigns new values to instance properties
square1.area = 36;

console.log(square1.width);
console.log(square1.height);

console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.numberOfRequestsForArea);

console.log('======================================');

// 3. Static Methods
// ==================

class SquareRectangle {
    constructor( width ) {
        this.width = width;
        this.height = width;
    }

    // static method
    static equals( a, b ) {
        return a.width * a.height === b.width * b.width;
    }

    static isValidDimensions( width, height ) {
        return width === height;
    }
}

let squareRect1 = new SquareRectangle(7);
let squareRect2 = new SquareRectangle(8);

// static methods are called directly on Class itself, and not on its instance
// static metnods don't require an instance of the Clss
console.log(SquareRectangle.equals(squareRect1, squareRect2));

console.log(SquareRectangle.isValidDimensions(5, 5));

console.log('======================================');

