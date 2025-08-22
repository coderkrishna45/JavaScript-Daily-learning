//               // DAY3
// 📌 Day 3 – Functions in JavaScript

// Study Topics:

// Function declaration vs function expression.
// Parameters & arguments.
// Return values.
// Default parameters.
// Arrow functions.
// Scope inside functions.







       // Q.Write a function that takes two numbers and returns their sum. (e.g., sum(2,3) → 5)
       
       
    //function declaration   can be called before declaration
//  function sum(a,b){
//      return a+b;
//  }
//  let result=sum(33,55);
//  console.log(result);
      
      
       //  function expression NOT HOISTED ( Can't call before defined)
// const sum=function(a,b){
//      return a+b;
//  }
//  console.log(sum(55,44));


          //  ARROW FUNCTION USEFUL FOR ONE LINER OR SHORTNER BUT HAS NO own This fn
//  const arrowsum=(a,b)=>(a+b);
//  console.log(arrowsum(55,44));



//Q . Create a function that returns the square of a number.(e.g., square(4) → 16)
  
//   const square=(a)=>a*a;
//     console.log(square(5));
    
    
//   const squaring=function(a){
//       return console.log(a*a);
//   }    
//     squaring(4);


// Q . Function with default parameter: greet someone, default is "Guest". (e.g., greet("Ram") → Hello Ram, greet() → Hello Guest)

//   function greet(name="Guest"){
//       return "hello " +name;
//   }
//   console.log(greet());
//   console.log(greet("krishna"));



// Q.Write a function that returns whether a number is even or odd. (e.g., check(7) → Odd)
  
//   const check=(number)=>{
//       if(number%2==0) return "even";
//       return "odd";
//   }
//   console.log(check(9));

//   function evenOddCheck(number){
//         if(number%2==0) return "even";
//           return "odd";
//   }
//   let num=Number(prompt("Enter the number to check Even or Odd :"));
//   let ans=evenOddCheck(num);
//      console.log(`your number ${num} is ${ans}`);


//   Q . Function expression: store a function in a variable that multiplies two numbers.

//   const multiplier=function(a,b){
//       return console.log(`The multiplication of ${a} * ${b} = ${a*b} `);
//   }
//   let a=Number(prompt("Enter the 1st number to multiply :"));
//   let b=Number(prompt("Enter the 2nd number to multiply :"));
//   multiplier(a,b);

// Q. Arrow function: return the cube of a number. (e.g., cube(3) → 27)
//  const cube=(a)=>a*a*a;
//  console.log(cube(3));

 //Q.********************** Function returning another function: create a multiplier. (e.g., multiplyBy(2)(5) → 10)****************************

//  function multiplyBy(x) {
//   return function(y) {
//     return x * y;
//   };
// }
// let double = multiplyBy(2);   // returns a function that multiplies by 2
// let triple = multiplyBy(3);   // returns a function that multiplies by 3

// console.log(double(5));  // now it goes into the double where there is a returned function available to multiply
// console.log(triple(5));  // 15
// console.log(multiplyBy(2)(5)); // 10 (direct call)


// Q.Function with multiple parameters: return the largest of 3 numbers. (e.g., max(3,7,5) → 7)
  
//   function maxOfThree(a,b,c){
//       let currmax=a;
//       if(currmax>b && currmax>c){
//           return a;
//       }else if(currmax>b && currmax<c){
//               return c;
//           }else if(currmax<b && b>c){
//               return b;
//           }else{
//               return a;
//           }
//   }
  
//   let result=maxOfThree(55,7,12);
//   console.log(`The max from 55,7 and 12 is : ${result}`);



// Q.Write a function that checks if a string contains the word "JS". (e.g., containsJS("I love JS") → true)

// function containJS(curr){
//     return curr.includes("JS");
// }
//  console.log(containJS("I Love JAS"));

// function containJS(curr) {
//     for (let i = 0; i < curr.length - 1; i++) {
//         if (curr[i] === "J" && curr[i + 1] === "S") {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(containJS("I love JS"));   // true
// console.log(containJS("I Love JAS"));  // false

 
 // Q. Recursive function: factorial of a number. (e.g., factorial(5) → 120)
//  let result=1;
//  function factorial(num){
//      if(num==0)return result;
//   result=  result*num;
//      num--;
//      return factorial(num);
//  }
//   let ans=factorial(5);
//   console.log(`the factorial of 5 is : ${ans}`);


// Q. Reverse a string function  ===>  reverse("hello") → "olleh"
//   function reverseString(s){
//       let n=s.length;
//       let arr = s.split("");
//       for(let i=0;i<n/2;i++){
//         let temp =arr[i];
//         arr[i]=arr[n-i-1];
//         arr[n-i-1]=temp;
        
//       }
//       return arr.join("");
//   }
//   let ans=reverseString("Hello");
//  console.log("The reversed string is : ",ans);
 
    // OR
//  function reverseString(s){
//      return s.split("").reverse().join("");
//  }
//  console.log(reverseString("Hello"));
//  //split("") → turns string into array of chars.
// //reverse() → reverses array.
// //join("") → makes it a string again.





// Q. Count vowels in a string
 
//   function isVowel(c){
//       if(c=='a' || c=='e' ||c=='i' || c=='o' ||c=='u' || c=='A' || c=='E' ||c=='I' || c=='O' ||c=='U'){    
//           return true;
//       }return false;
//   }

   // OR 
// i could have wrote i just knew
//     return "aeiouAEIOU".includes(c);  // simpler way to check vowels

//   function VowelCounter(s){
//     let count=0; 
//     let n=s.length;
//       for(let i=0;i<n;i++){
//           if(isVowel(s[i])){
//               count++;
//           }else{
//               continue;
//           }
//       }
//       return count;
//   }
   
//   let a="i am A devotee OF shree Ram ";
//   let ans=VowelCounter(a);
//   console.log(`in string "${a}"there are ${ans} vowels `);
   
 
 // Q. Function that returns another function (closure memory)
//makeCounter() should return a function that increases a counter each time you call it.

// function makeCounter() {
//     let count = 0; // private to this closure

//     return function() { // returned function remembers "count"
//         count++;
//         return count;
//     };
// }

// const counter1 = makeCounter(); // independent counter
// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter1()); // 3

// const counter2 = makeCounter(); // another independent counter
// console.log(counter2()); // 1
// console.log(counter2()); // 2



              // rest parameter
// function sumAll(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }

// console.log(sumAll(1, 2, 3));   // ✅ works
// console.log(sumAll(10, 20, 30, 40)); // ✅ works too


// // it worked for both call but if it was just nums fn then
// function sumAll(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }

// console.log(sumAll([1, 2, 3])); // ✅ works
// //remove it else error happens sumAll(1, 2, 3);   // ❌ Error! Only first argument is taken, rest are ignored
// console.log(sumAll([10, 20, 30, 40])); // ✅ works too
// //it took only 1st arg as array rest were ignored
// // so to avoid that we use rest parameter ...nums
// //rest parameter must be last parameter

// function sumAll(a,b,...nums) {  // here a and b are normal params and rest are in nums array
  //return nums.reduce((x, y) => x + y, a+b); // adding a and b to the sum of rest
//}
//console.log(sumAll(10, 20, 30, 40)); // 100