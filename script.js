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

// 4. Extends keyword and inheritance

// Parent class
class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
    
    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

// Child class
class Programmer extends Person {
    constructor( name, age, language ) {
        // super() calls the constructor of the parent class
        super( name, age );
        
        // custom behaviour
        this.language = language;
    }
    
    code() {
        console.log(`${this.name} is a coder in ${this.language}`);
    }
}

let person1 = new Person('Jeff', 44);
let programmer1 = new Programmer('Dom', 36, 'JavaScript');

console.log(person1);
console.log(programmer1);

programmer1.describe();
programmer1.code();
// code() method will only work on instance of programmer not instance of person

const programmers = [
    new Programmer( 'DOM', 33, 'JavaScript'),
    new Programmer( 'Brad', 27, 'CSS 3'),
    new Programmer( 'Sinisa', 27, 'Svelte.js'),
    new Programmer( 'Vukmirovic', 19, 'HTML'),
    new Programmer( 'Sin', 27, 'Git')
];

function developSoftware(programmers) {
    // develop software
    for (let programmer of programmers) {
        programmer.describe();
        programmer.code();
    }
}

developSoftware(programmers);

console.log('======================================');

// 5. Polymorphism
// ================

class Animal {
    constructor(breed) {
        this.breed = breed;
    }

    makeSound() {
        console.log(`This ${this.breed} makes a generic animal sound!'`);
    }
}

class Dog extends Animal {
    constructor( breed, name ) {
        super( breed );
        
        this.name = name;
    }

    // polymorphism - redefyning methods of constructor parent class
    makeSound() {
        console.log(`${this.name} barks Wuff Wuff!`);
    }
}

const animal1 = new Animal('Dog');
const animal2 = new Dog('Dog', 'Rex');

animal1.makeSound();
animal2.makeSound();