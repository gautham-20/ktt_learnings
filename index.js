"use strict"; // Enables strict mode

// Variables and data types
var abc = "Hello World";
console.log(typeof abc); // Checks data type

let abcd = 123;
console.log(typeof abcd);

let asdf = 32.15;
console.log(typeof asdf);

let a = 10;
console.log("let: " + a);

var a1 = "Hello";
console.log("var: " + a1);

const a2 = 999999999999999;
console.log("const: " + a2);

// Null and undefined
let syb = null;
console.log(syb);

let notAssigned;
console.log(notAssigned);

// Comparison operators
console.log(5.10 > 30);

console.log(NaN == NaN);

// Type conversion
console.log(true + 10);
console.log(false + 10);

console.log(Number.isInteger(a1));

console.log(a.toString());

console.log("65" === "A");

// Ternary operator
//let res = (a!==null && a!==undefined)?a:b;
console.log("\nObjects\n");
// Object creation
let obi = {
    name: "Logan",
    age: 20,
    job: "Super Hero"
};

delete obi.job; // Deletes a property

console.log(obi.name); // Dot notation
console.log(obi["age"]); // Bracket notation

// Adding object properties
let player = {
    name: "Starc",
    age: 36,
    sport: "cricket"
};

player.role = "bowler";

console.log(player);

// For in loop
let car = {
    brand: "toyoto",
    model: "fortuner",
    year: 2025,
    color: "black",
    isAutomatic: true
};

for (let key in car) {
    console.log(key + ' - ' + car[key]);
}

// Accessing and updating object properties
console.log("Car Brand: " + car.brand);
console.log("Car Model: " + car.model);

car.color = "white"; // Updates property
console.log(car.color);

car.price = 2500000; // Adds new property
console.log(car.price);

console.log(car);

// Employee object
const employee = {
    name: "Ravi",
    age: 22,
    department: "Marketing",
    salary: 25000,
    skills: ['problem solving', 'leadership', 'good communication', 'presence of mind']
};

console.log('name' in employee); // Checks property existence

// Accessing employee properties and updating salary
console.log('\nEmployee Name: ' + employee.name + '\nEmployee Department: ' + employee.department + '\nEmployee skill: ' + employee.skills[0] + '\nEmployee Salary: ' + (employee.salary = 30000));

employee.company = "ABC Company"; // Added company property

// Function
function introduce() {
    console.log("\nEmployee Name: " + employee.name);
    console.log("Employee Department: " + employee.department);
}

introduce();

// Arrow function
let FA = (n) => 5 * n;
console.log(FA(2));

// Object reference
const user1 = {
    name: "John"
};

let name2 = user1; // Copies object reference

user1.name = 'April';
console.log(user1);

// Object keys
let chek = ['x', 'y', 'z'];
console.log(Object.keys(chek));

// Garbage collection
let var1 = {
    name: "Chris",
    age: 36,
};

var1 = null; // Removes the reference to the object

console.log("Garbage Collection: " + var1);

//this keyword

let thisKey = {
    name: "Gautham",

    sayHi() {
        console.log(this.name);
    }
};
console.log("\nthis keyword")
thisKey.sayHi();

//new keyword
function User(nam, dept) {
    this.nam = nam;
    this.dept = dept;
}

let User1 = new User("Batman", "Super Hero");
let User2 = new User("Superman", "Super Hero");
console.log("\nUsing the new keyword: \n" + User1.nam + ", " + User1.dept + "\n" + User2.nam + ", " + User2.dept);

//Optional Chaining

const optChaining = {
    name3: "Kavin",
    dept: "MCA",
    State: "TN",
};
console.log("\nOptional Chaining")
console.log(optChaining.name3);
console.log(optChaining.dept);
console.log(optChaining.city?.country);

//Symbol Type
const sy1 = Symbol("Hello");
const sy2 = Symbol("abcd");

console.log(sy1);
console.log(sy2);

console.log(sy1 == sy2);

//object to primitive 

const objToPrimitive = {
    name7: "Gautham",

    toString() {
        return this.name7;
    }
}

console.log("Hello " + objToPrimitive + "!");
