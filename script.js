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