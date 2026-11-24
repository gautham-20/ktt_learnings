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
    },
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
    },
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
    },
};

stu2.display();

console.log("The typeof this keyword is " + typeof this);

// prototype

const animal = {
    eat() {
        console.log("Animal is eating");
    },
};

const dog = {
    bark() {
        console.log("Dog is barking");
    },
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
    },
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
    },
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
} catch (error) {
    console.log(error.message);
} finally {
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

// promises
console.log("typeof promise is " + typeof Promise);
let promise2 = new Promise(function (resolve, reject) {
    let success = true;
    //let failure = false;
    if (success) {
        resolve("Success");
    } else {
        reject("Failure");
    }
});

promise2
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Operation Successfully Completed");
    });

//Promise.all()

let pro1 = Promise.resolve(10);
let pro2 = Promise.reject(20);
let pro3 = Promise.resolve(30);
//Promise.all([pro1, pro2, pro3])
Promise.allSettled([pro1, pro2, pro3])
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });

let promise1 = new Promise(function (resolve, reject) {
    resolve(10);
});

promise1.then(function (result) {
    console.log(result);
    return result * 2;
})
    .then(function (result) {
        console.log(result);
        return result * 10;
    })
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
});

async function gt() {
    return "Async function - Hello JS";
}

gt().then(function (result) {
    console.log(result);
});

//generators
function* numbers(){
    yield 10;
    yield 20;
    yield 30;
}

let gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log("\nUsing the for of loop")
for(let num of numbers())
    console.log(num);

let Eval = eval(6+5/5585485*658);
console.log("eval() is "+Eval);
console.log(eval(6+9+5));

console.log("type of eval is "+typeof eval);

//currying
function add1(x){
    return function(y){
        return function(z){
            return x + y + z;
        };
    }
}

const sum = add1(5)(3)(2);
console.log("Currying function \nSum of 5 + 3 + 2 is "+sum);
let n1 = 10n;
let n2 = 25;
console.log("Using Number to BigInt: "+(n1+BigInt(n2)));//number to BigInt
console.log("Using BigInt to Number: "+(Number(n1) + n2)); //BigInt to Number
let tamil = "வணக்கம்";
console.log(tamil);
console.log("");