// let a = 10;
// let b 
// console.log(a+b);

// Syntax
// console.log()
// console.warn()
// console.error()

// console.log(a);
// console.warn("something went wrong");
// console.error("error 404")

//difference between var, let, const

// var- redeclare or reassign kar sakte h & var is a function scope
// let- redeclare nhi kar skte h but reassign kar skte h & let is a block scope
// const- const ko hum dono hi nhi kar skte h & const is a block scope


// as a interview mein three tarike difference batate h redeclare/reassign, scope, hoisting

// var :

// var a  = 10

// console.log(a);

// var a = 20;

// console.log(a)


// let :

// let a = 10;

// console.log(a)
//  a = 30;
//  console.log(a)


// const :

// const x = 10;
// console.log(x);

// const x = 10     // we can't do redeclare

// x = 10;          // we can't reassign
// console.log(x)


// two data types are here 
// premitive and non-premitive

// premitive :

// let name = "Rahul";       // String
// let age = 21;             // Number
// let isPresent = true;     // Boolean
// let result;               // Undefined
// let emptyValue = null;    // Null
// let uniqueId = Symbol();  // Symbol
// let bigNumber = 123n;     // BigInt

// // non-premitive :
// // Array and object

// let fruits = ["Apple", "Mango", "Banana"]; // Array
// console.log(fruits)

// let student = {
//   name: "Aman",
//   age: 20
// }; // Object
// console.log(student.name)   // direct value access
// console.log(student)


// // let a = "hello";
// // console.log(typeof(a)); // string
// console.log(typeof 100);     // number
// console.log(typeof true);    // boolean

// // ye saari falsi value hoti h inke alawa saari truthy value hoti h
// // 0, null, undefined




// // var c = 10;

// // function sum() {
// //    console.log(c);
// // }

// // sum()
// // console.log(c)


// // function scope and block scope

// // var x = 3 ;

// // if(true){
// //   let y = 4;
// //   const z= 5;

// //   y=10;
//   // console.log(y, z , x);
// // }
// //  console.log(y, z);
// // console.log(x)



// // Operators : Operators boh symbols hote hain jo values ke saath calculation,
// //             comparison, ya decision lene ka kaam karte hain.

// // 1. Arithmetic Operators :

// let a = 10;
// let b = 3;

// console.log(a + b); // 13 Addition
// console.log(a - b); // 7  Subtraction
// console.log(a * b); // 30 Multiplication
// console.log(a / b); // 3.333 Division
// console.log(a % b); // 1  Remainder
// console.log(a ** b); // 1000 Power

// // Real example: 

// let price = 500;
// let quantity = 3;

// let total = price * quantity;

// console.log(total); // 1500

// // 2. Assignment Operators : Assignment operator variable mein value store ya update karta hai.

// let score = 10;

// score += 5; // score = score + 5
// console.log(score); // 15

// score -= 2; // score = score - 2
// console.log(score); // 13

// score *= 2; // score = score * 2
// console.log(score); // 26

// // Simple line:
// // += ka matlab old value mein kuch add karke same variable mein store karna.

// // 3. Comparison Operators:

// console.log(10 > 5);  // true
// console.log(10 < 5);  // false
// console.log(10 >= 10); // true
// console.log(10 <= 8);  // false

// // Equality operators:

// // == sirf value compare karta hai aur type compare nhi karta hai.
// // === value aur data type dono compare karta hai.

// console.log(10 == "10");  // true
// console.log(10 === "10"); // false

// // Best practice:
// // Hamesha mostly === use karo, kyunki yeh safer aur clear hota hai.

// // Inequality:

// console.log(10 != "10");  // false
// console.log(10 !== "10"); // true

// // 4. Logical Operators :  Logical operators multiple conditions ko combine karte hain.

// // && (AND): dono conditions true honi chahiye.
// // || (OR): kam se kam ek condition true honi chahiye.
// // ! (NOT): true ko false or false ko true banata hai.

// // && (AND):
// let marks = 75;
// let attendance = 80;

// if (marks >= 40 && attendance >= 75) {
//   console.log("You can give the exam");
// }

// // || (OR):
// let busMili = false;
// let autoMila = true;

// console.log(busMili || autoMila); // true

// true  || true  // true
// true  || false // true
// false || true  // true
// false || false // false

// // ! (Not):
// let isLoggedIn = true;

// console.log(!isLoggedIn); // false

// // 5. Expression kya hota hai?
// // Expression code ka woh part hai jo ek final value produce karta hai.

// let p = 5;
// let q = 10;

// let sum = p * q;
// console.log(sum);

// // 6. Operator Precedence aur Grouping : JavaScript calculation mein kuch 
// //                                        operators ko pehle chalata hai

// console.log(2 + 3 * 4); // 14

// // 7. Strings :

// let firstname = "Aman";
// let city = 'Delhi';

// console.log(firstname)

// // 9. Common String Methods :

// let message = "  Hello JavaScript  ";

// console.log(message.length);       // Total characters
// console.log(message.toUpperCase()); // HELLO JAVASCRIPT
// console.log(message.toLowerCase()); // hello javascript
// console.log(message.trim());        // Extra spaces remove
// console.log(message.includes("Java")); // true
// console.log(message.replace("JavaScript", "Students"));


// DOM : Document Object Model

// object literals :- {}

let person = {
  name: "Aman",
  age: 20,
  city: "Delhi"
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.city)

// DOT Notaion and Bracket Notation

console.log(person.age)
console.log(person["age"])



// let h1 = document.getElementById("heading");
// console.log(h1)


// textContent and innerHTML

console.log(message.textContent) // Hello, yash
console.log(message.innerHTML) // Hello, yash

// message.textContent = "<strong>Hello, yash</strong>"
// message.innerHTML = "<strong>Hello, yash</strong>"

const profile = document.querySelector("profile")

profile = "student"
profile.alt = "Yash Profile"