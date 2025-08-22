let myName="Bal Krishan Kumar";
console.log(myName);

let a=8;
let b=9;
let sum=a+b;
console.log(sum);

let a=prompt("Enter a  number :");
 let num1=parseInt(a);
let b=prompt("Enter another number:");
 let num2=parseInt(b);
let sum=num1+num2;
console.log(sum);

    let a=prompt("Enter a  number A :");
     let num1=parseInt(a);
    let b=prompt("Enter another number B: ");
     let num2=parseInt(b);
  console.log(" the new A is : ", num1+num2-num1);//concatenation  or `using $ here like ${  }`
  console.log(" The new B is : " ,num2+num1-num2);


let a=prompt("Enter a number to check Even Odd :");
 let num1=parseInt(a);
 if(num1%2==0){
     console.log(`${num1} is Even Number`);
 }else{
     console.log(`${num1} is Odd Number`);
 }
  (num1%2==0)?console.log(`${num1} is Even Number`):console.log(`${num1} is Odd Number`);

let a=prompt("Enter the temperature in farenheit:");
  let num1=parseFloat(a);
  let result=(num1-32)*5/9;
  console.log(`The temperature ${num1} degree farenheit is ${result.toFixed(2)} degree celcius `);

