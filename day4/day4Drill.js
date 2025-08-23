//Q.Create an array nums = [1,2,3,4] and print the second element.

//   let array=[1,2,3,4];
//   console.log(array);
//   console.log(array[1]);

//Q. Add 5 at the end of nums → push()
//   let nums=[2,3,4,5,3];
//   console.log(`Before adding anything the array nums is :`,nums);
//   nums.push(5);
//   console.log(`after adding 5 the new array is : ` , nums);

// Q . Remove the first element → shift()
//     let nums=[2,3,4,5,3];
//   console.log(`Before removing anything the array nums is :`,nums);
//   nums.shift(5);
//   console.log(`after removing first element  the new array is : ` , nums);
//   nums.pop();
//   console.log(`after removing last element  the new array is : ` , nums); 
//   nums.unshift(199);//to add elem at start
//  console.log(`after adding  element at start of array the new array is `,nums);

// Q. Remove 2nd and 3rd elements → splice().
//   let nums=[2,3,4,5,3,5];
//   console.log(`Before removing anything the array nums is :`,nums);  
//   let arr=nums.slice(2,5);// stored 4 5 3 in arr but no change in nums
//   console.log(`new array nums is :`,arr); 
//   let arrr=nums.splice(1,2); // remove 2 elem from index 1 and it affect original array as well and it store the removed data in arrr
//   console.log(arrr);
//   console.log(nums);


// Q . Check if 3 exists in nums → includes().
//  let num=[23,4,23,45,43,33];
//  console.log(num.includes(33));

 // Q. Use join() to create a string "1-2-3-4"
//   let arr=["1","2","3","4"];
//   let curr=arr.join("-");
//   console.log(curr);
//   console.log(typeof curr);  

  // Q. Nested array: let arr=[[1,2],[3,4]] → access 4.
//   let arr=[[1,2],[3,4],[4,5]];
//   console.log(arr[1][1]);

// Q. Sum all elements using reduce().
//  let num=[12,3,21,23,34,24];
//  let arr=num.reduce((acc,curr)=>acc+curr,0);
//  console.log(arr);

//Q. Create a copy of array using spread [...nums].

//   let num=[1,2,3,4,2];
//   let arr=[...num];
//   console.log(arr);
   
//   let arr1 = [1,2];
//     let arr2 = [3,4];
//     let combined = [...arr1, ...arr2];
//     console.log(combined); // [1,2,3,4]
    
//     let [first, ...rest] = [1,2,3,4];
//     console.log(first); // 1
//     console.log(rest); // [2,3,4]

// Other Useful Array Methods

//reverse() → reverses array
// let rever=arr1.reverse();
//   console.log(rever);// it changes arr1 also 
   



// sort() → sorts array (lexicographically by default)
    // let arr4=arr1.concat(arr2);
    // console.log(arr4.sort());



// concat() → joins arrays
//   let arr3=arr1.concat(arr2);
//   console.log(arr3);



// flat() → flattens nested arrays

//   let arr = [1,[2,3],[4,[5]]];
//  console.log(arr.flat()); // [1,2,3,4,[5]]
//  console.log(arr.flat(2)); // [1,2,3,4,5]




// find() → returns first element matching condition

   // console.log(arr3.find(2));// throws error as .find() expects a callback fn to be called so ,
//   let arr5 = [10, 20, 30, 40];

// // find the first element equal to 20
// console.log(arr5.find(x => x === 20)); // 20

// // find the first element greater than 25
// console.log(arr5.find(x => x > 25)); // 30
// console.log(arr5.indexOf(20));         // 1




// findIndex() → returns index of first element matching condition




// some() → true if any element passes condition
// let numbers = [1, 3, 5, 7, 8];

// console.log(numbers.some(x => x % 2 === 0)); // true  (because 8 is even)
// console.log(numbers.some(x => x > 10));      // false (no number > 10)




// every() → true if all elements pass condition
// let numbers2 = [2, 4, 6, 8];

// console.log(numbers2.every(x => x % 2 === 0)); // true  (all even)
// console.log(numbers2.every(x => x > 5));       // false (2 and 4 are not > 5)




