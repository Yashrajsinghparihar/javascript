<<<<<<< HEAD
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
=======
// // let a = 10;
// // let b = 20;

// // console.log(a + b);

// // console.log(a)
// // console.warn("something went wrong")
// // console.error("error 404")

// // var 

// // var a = 10;
// // console.log(a);
// // var a = 20;
// // console.log(a)
// // a = 21;
// // console.log(a)

// // let b = 30;
// // b = 40;

// // console.log(b)

// // const f = 10;
// // f = 20;

// // console.log(f)

// // var c = 20;

// // if(true){
// //     let y = 20;
// //     let x = 30;

// //     console.log(y, x, c);
// // }
// // console.log(c);

// // data two types
// // primitive:

// // let h = "hello"
// // console.log(typeof(h))
// // let v = 45;
// // console.log(typeof(v))

// // Non- Primitve:

// // Array
// // let fruits = ["Apple", "Mango", "orange"]
// // console.log(fruits)

// // object:

// // let student = {
// //     name: "yashraj",
// //     age: 30
// // }
// // console.log(student)


// // operator

// // Arithmetic operator:

// let a = 10;
// let b = 20;

// console.log(a+b)  //addition
// console.log(a-b) //substraction
// console.log(a*b) // multiplication
// console.log(a/b) // divide
// console.log(a%b) // reminder
// console.log(a**b) //power


// // comparision operator

// console.log(10 > 4); //true
// console.log(10 < 4); // flase
// console.log(10 >= 4); // true
// console.log(10 <= 4); //false

// // equality
// console.log(10 == "10") //true
// // enquality
// console.log(10 === "10") // false

// // Assignment operator

// let score = 10;
// score += 5;
// score -= 5;
// score *= 5;
// score /= 5;

// console.log(score)

// // grouping

// console.log(3 + 4 * 4);

// // logical operator;

// // let marks = 50;
// // let attendence = 60;

// // if(marks >= 40 && attendence >= 75){
// //     console.log("you can give the exam")
// // }else{
// //     console.log("you are not allowed")
// // }

// // string

// let message = " hello javascript "

// console.log(message.length);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message.slice());
// console.log(message.trim());


// // if / else / else-if

// // if- means when condition true.
// // else- when condition false.


// // let age = 20;

// // if(age <= 18){
// //     console.log("you can able to give vote")
// // }
// // else{
// //     console.log("you are not able to give vote")
// // }


// // else-if- multiple condition check

// let marks = 80;

// if(marks >= 95){
//     console.log("grade A++")
// }
// else if(marks >= 75){
//     console.log("grade B")
// }
// else if(marks >= 60){
//     console.log("grade c")
// }
// else if(marks >= 50){
//     console.log("grade D")
// }
// else if(marks >= 40){
//     console.log("grade E")
// }
// else{
//     console.log("fail")
// }


// // loop

// // loop - Loop ka use tab hota hai jab humein same kaam baar-baar karwana ho. 
// //        Har baar same code likhne ke bajay, hum loop use karte hain.

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// // with loop

// // 1- For loop :-

// // for (start; condition; update) {
// //   // code
// // }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }


// // let i = 1 → loop 1 se start hoga.
// // i <= 5 → jab tak i 5 se chhota ya equal hai, loop chalega.
// // i++ → har round ke baad i mein 1 add hoga.

// // Even numbers print karna

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// // Reverse counting

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // 2- While loop :-  while loop tab useful hota hai jab humein pehle se nahi pata ki loop kitni baar chalega

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// // while mein update, jaise i++, zaroor likhna hai. Warna loop kabhi band nahi hoga
// //  — isse infinite loop bolte hain.

// // 3- do...while loop :- do...while mein code kam se kam ek baar zaroor run hota hai, chahe condition false ho.

// // let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// // 4. break :- break loop ko turant stop kar deta hai.

// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   }

//   console.log(i);
// }

// // Output: Jaise hi i ki value 6 hui, break ne loop ko rok diya.
// 1
// 2
// 3
// 4
// 5

// // 5. continue :- continue current round ko skip karta hai, lekin loop ko band nahi karta.

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }

//   console.log(i);
// }

// // Output: 3 wala round skip hua, baaki loop chalta raha.
// 1
// 2
// 4
// 5

// // 7. for...of loop :- for...of array ke values ko one-by-one access karta hai.

// let fruits = ["Apple", "Mango", "Banana"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// // 8. for...in loop :- for...in object ki keys ko access karta hai.

// let student = {
//   name: "Aman",
//   age: 20,
//   city: "Delhi"
// };

// for (let key in student) {
//   console.log(key, student[key]);
// }

// // 9. Problem-solving pattern: Sum of numbers

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }

// console.log(sum); // 15

// Step-by-step:
// sum = 0
// sum = 0 + 1 → 1
// sum = 1 + 2 → 3
// sum = 3 + 3 → 6
// sum = 6 + 4 → 10
// sum = 10 + 5 → 15

// One-line recap :-
// Loops repeated work ko easy banate hain: for fixed repetitions ke liye, while condition-based repetition ke liye, break loop stop karne ke liye, 
// aur continue ek round skip karne ke liye use hota hai.


// Function

// console.log("h")
// console.log("e")
// console.log("l")
// console.log("l")
// console.log("o")

// function sayHi(){
//   console.log("h")
// console.log("e")
// console.log("l")
// console.log("l")
// console.log("o")
// }
// sayHi()


// function AddTwoNumber(number1 = 10, number2){
//     console.log(number1 + number2);
// }
// AddTwoNumber(number1,20)

// let anurag = function(){
//   console.log("hello")
// }
// anurag()

// let shubham = () => {
//   console.log("hello")
// }
// shubham()


// hoisting

// console.log(a)

// let a = 10;

// console.log(a);

// sum(10,20)

// function sum(val1, val2){
//   console.log(val1 + val2)
// }


// lexical

// function a(){
//   var x = 10;
//   function b(){
//     console.log(x)
//   }
//   b();
// }
// a();


// closure

// function outer(){
//   var f1 = 90;
//   function inner(){
//     console.log(f1)
//   }
//   return inner;
// }

// var output = outer();

// output();

// higher order function

// function abc(xyz){
//   xyz();
// }
// function xyz(){
//   console.log("inside a function")
// }
// abc(xyz);

// rest and spread

// rest

// function abc(...values){
//   console.log(values)
// }
// abc(1,2,3,4,5);

// spread

// let arr = [1,2,3,4,5];

// console.log(...arr);


// this

// const user = { name: "yashraj" }

// function intro(city, country) {
//   console.log(`${this.name} lives in ${city}, ${country}`);
// }

// intro.call(user, "pune", "india");
// intro.apply(user, ["pune", "india"]);
// intro.bind(user, "pune", "india")();


// // declare
// let arr

// // intiliase array
// arr = [1,2,3,4];

// // change an element
// arr[1] = 100;

// // find lendth

// console.log(arr.length);


// let fruits = ["Apple", "mango", "Bnanana"];

// fruits[1] = "Orange"

// // fruits.push("grapes")
// fruits.unshift("watermelon");
// fruits.splice(1,1, "grapes")

// let slice = fruits.slice(1,3);
// console.log(fruits)

// // array destructuring
// let arr = [1,2,3,4,5]

// let [a,b,c] = arr

// console.log(a)
// console.log(b)
// console.log(c)


// object

// let obj = {
//     name : "yash",
//     age : 20
// }

// Adding value in obj
// obj.city = "delhi"
// obj.country = "India"

// // update
// obj.country = "switerland"
// obj.age = 21;

// remove

// delete obj.age;

// destructing in obj

// let {name, age} = obj
// console.log(name,age)

// console.log(obj)



let arr = [1,2,3,4,5];
let max = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)
// >>>>>>> ed8d901fdc7897108e233a5d2f0410866fe87d6f
