
"use strict";

// 1. this with call()
let person = {
    name: "Ram",
};

function greet(age) {
    console.log(this.name, age);
}

greet.call(person, 23);


// 2. this inside an object method
const stu = {
    name: "Giri",

    display: function () {
        console.log(this.name);
    }
};

stu.display();


// 3. this inside a nested regular function
const stu1 = {
    name2: "Giri",

    display: function () {
        function disp() {
            console.log(this.name2);
        }

        disp.call(this);
    }
};

stu1.display();


// 4. this inside an arrow function
const stu2 = {
    name1: "Thor",

    display: function () {
        const show = () => {
            console.log(this.name1);
        };

        show();
    }
};

stu2.display();


console.log("The typeof this keyword is " + typeof this);

// prototype 

const animal = {
    eat() {
        console.log("Animal is eating");
    }
};

const dog = {
    bark() {
        console.log("Dog is barking");
    }
};

Object.setPrototypeOf(dog, animal);

dog.eat();
dog.bark();

//getter and setter
let user1 = {
    name: "Steve ",
    surname: "Smith",

    get fullName() {
        return this.name + this.surname;
    }
};

console.log(user1.fullName);

let user2 = {
    name: "Mitchell",
    surname: "Starc",

    get fullName() {
        return this.name + " " + this.surname;
    },

    set fullName(value) {
        let parts = value.split(" ");
        this.name = parts[0];
        this.surname = parts[1];
    }
};

console.log(user2.fullName);

user2.fullName = "John Wick";
console.log(user2.fullName);
console.log(user2.name);

console.log(typeof setPrototypeOf);

class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name + " is barking");
    }
}

let dog1 = new Dog("Tommy");
dog1.eat();
dog1.bark();

console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Dog);

let age = 10;
try {
    if (age < 18) {
        throw new Error("You are not eligible");
    }
    console.log("You are eligible");
}
catch (error) {
    console.log(error.message);
}
finally {
    console.log("This is final block");
}

//callback

function greet1(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sB() {
    console.log("Goodbye!");
}

greet1("Victor", sB);


// callback in operations

function calc(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

console.log(calc(10, 2, add));
console.log(calc(50, 4, mul));