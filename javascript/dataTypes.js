// Primitive Data Types

//Numbers
console.log("Number Types \n");
let d0 = 23;
console.log("Number without Decimal " + d0);
let d1 = 22.5;
console.log("Number with Decimal " + d1);
let eL = 123e7;
console.log("Number Extra large Exponent " + eL);
let eS = 1230e-8;
console.log("Number Extra small Exponent " + eS);
let minIntP = 999999999999999;  // accurate upto 15 decimals
console.log("Minimum Integer Precision " + minIntP);
let maxIntP = 99999999999999999; // maximum decimal is 17
console.log("Maximum Integer Precision " + maxIntP);
let floatPre = 0.2 + 0.1;    //the float precision does not give the 100% accurate value due to js uses IEEE754 Decimal-precision floating-point 
//(0.2*10 + 0.1*10)/10 to get the accurate value or floatPre.toFixed(2));

console.log("Float Precision: " + floatPre);

// The JavaScript interpreter works from left to right.
// In JavaScript + is used for concatenation and addition 

let x1 = 10;
let y1 = 100;
console.log("Addition of 10 + 100 is " + (x1 + y1));
console.log(x1 + "100")
let z1 = "200";
let res = x1 + y1 + z1;
console.log("Result " + res); //110200 came because of res is a string

console.log("\nNumeric String");
let x2 = "100";
let y2 = "10";
console.log("100 + 10 is " + (x2 + y2));// js will not convert the sting to number while adding
console.log("100 *10  is " + (x2 * y2));
console.log("100 / 10 is " + (x2 / y2));
console.log("100 - 10 is " + (x2 - y2));
console.log("100 % 10 is " + (x2 % y2));

console.log("Not a Number - NaN")
let x3 = 10;
let y3 = "Cat";
console.log("10 / cat is " + (x3 / y3));
console.log("NaN + 5 is " + (NaN + 5));
console.log("Type of NaN is " + typeof NaN);
console.log("-2 / 0 is " + (-2 / 0));
console.log("2 / 0 is " + (2 / 0));

console.log("Type of Infinity is " + typeof Infinity);

console.log("Hexadecimal of 0xFF is " + (0xFF));

let n1 = 500;
let n2 = new Number(500);
console.log(n1 == n2);
console.log(n1 === n2);
console.log(typeof n1 + "\n" + typeof n2);
let n1Str = n1.toString();
console.log("500 to String - " + typeof n1Str);
console.log("valueOf() n1 is " + n1.valueOf()); //value of return number as a number
let x4 = 9.3854;
console.log("Exponential of " + x4 + " is " + x4.toExponential(2));

let date1 = Number(new Date("2004-07-18"));
console.log(date1);
console.log("toFixed() is " + x4.toFixed(3));
console.log("toPrecision() is " + x4.toPrecision());
console.log("12345678901234567890 is isSafeInteger: " + Number.isSafeInteger(12345678901234567890));
console.log("parseInt: " + Number.parseInt("10.362566"));
console.log("parserFloat: " + Number.parseFloat("23.0056948"));
console.log("isInteger " + Number.isInteger(23.985566));
console.log("EPSILON: " + Number.EPSILON);
console.log("MAX VALUE: " + Number.MAX_VALUE); 4
console.log("MIN VALUE: " + Number.MIN_VALUE);
console.log("+ve Infinity: " + Number.POSITIVE_INFINITY);
console.log("-ve Infinity: " + Number.NEGATIVE_INFINITY);


//String
console.log("\nString\n")
let name1 = "Maxwell";
console.log("String: " + name1);
console.log("Length of the string: " + name1.length);
let str1 = `"This is the example for the Template Strings"`; //Template Strings allow both single and double quotes inside a string
console.log("Template String: " + str1);
let str2 = new String("Hello")
console.log("String as Object in JS: " + str2 + "\ntypeOf Hello is " + typeof str2);
let str3 = "Hello"
console.log("typeOf Hello is " + typeof str3);
console.log(str2 == str3);
console.log(str2 === str3);
let str4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("Length of str4 is " + str4.length);
console.log("At 17th position is " + str4.charAt(17));
console.log("Code Point " + str4.codePointAt(25));//shows the ascii of an specific position
console.log("at(): " + str4.at(6));
console.log("Concatenation: " + str3.concat(" ", str4))
let strARR = "Cat, Dog, Elephant";
console.log("Slice: " + strARR.slice(5, 13));
console.log("toLowerCase: " + str4.toLocaleLowerCase());
let str5 = "Hello World \uD800";
console.log("" + str5.toWellFormed());
let str6 = "              I am Batman                  ";
console.log("Trim: " + str6.trim());
console.log("Trim at start: " + str6.trimStart());
console.log("Trim at End: " + str6.trimEnd());
let text1 = "5";
console.log("padStart: " + text1.padStart(5, "x"));
console.log("padEnd: " + text1.padEnd(5, "x"));
console.log("Repeat '5' five times: " + text1.repeat(5));
let text3 = "Please visit the Factory the init";
console.log("Replace: " + text3.replace("Factory", "company"));
console.log("Split: " + text3.split(" "));
console.log("Search: " + text3.search("visit"));
const t4 = text3.match(/it/g);
console.log("Match: " + t4);
console.log("includes: " + text3.includes("Please"));
console.log("Starts with: " + text3.startsWith("please"));
console.log("Ends with: " + text3.endsWith("ory", 24));
console.log("indexOf: " + text3.indexOf("the"));
console.log("firstIndexOf: " + text3.lastIndexOf("the"));


//Array
const arr1 = ["Car", "Bike", "Truck", "Cycle"];

const arr2 = [];
arr2[0] = "Bike";
arr2[1] = "Cycle";

for(let i = 0; i< arr1.length; i++)
    console.log("Array 1 "+ arr1[i])

console.log("Sorting: "+arr1.sort());
console.log("Length of an array is "+arr1.length);
const app = arr1.push("Ship");
console.log(arr1);
console.log("typeOf array is : "+typeof arr1);
console.log("isArray: "+Array.isArray(arr1));

