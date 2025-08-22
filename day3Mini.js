// Day3 Mini Project – Function Utility Tool

// 1️⃣ Even or Odd
function checkEvenOdd(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

// 2️⃣ Factorial (Recursive)
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 3️⃣ Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 4️⃣ Count Vowels
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// 5️⃣ Sum of multiple numbers (rest parameter)
function sumAll(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// Optional: closure counter to show number of operations performed
function operationCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = operationCounter();

// --------- Program Start ---------
console.log("🛠️ Welcome to Function Utility Tool 🛠️");

let choice = Number(prompt(
    `Choose an operation:
1. Even or Odd
2. Factorial
3. Reverse String
4. Count Vowels
5. Sum Numbers`
));

switch (choice) {
    case 1:
        let num1 = Number(prompt("Enter a number: "));
        console.log(`Result: ${num1} is ${checkEvenOdd(num1)}`);
        break;
    case 2:
        let num2 = Number(prompt("Enter a number: "));
        console.log(`Result: Factorial of ${num2} is ${factorial(num2)}`);
        break;
    case 3:
        let str1 = prompt("Enter a string: ");
        console.log(`Result: Reversed string is "${reverseString(str1)}"`);
        break;
    case 4:
        let str2 = prompt("Enter a string: ");
        console.log(`Result: Number of vowels is ${countVowels(str2)}`);
        break;
    case 5:
        let nums = prompt("Enter numbers separated by commas: ").split(",").map(Number);
        console.log(`Result: Sum is ${sumAll(...nums)}`);
        break;
    default:
        console.log("❌ Invalid choice");
}

// Increment operation counter
console.log(`Operations performed: ${counter()}`);
