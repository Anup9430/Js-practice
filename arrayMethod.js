// 1. Write a function that filters out even numbers from an array. 
// let arr = [1,2,3,4,5,6,7,8,9,10];
// const newArray=arr.filter((item)=>{
// return item%2==0; 
// } )
// console.log(newArray);


// 2. Filter an array to include only odd numbers. 
// let arr = [1,2,3,4,5,6,7,8,9,10];
// const newArray=arr.filter((item)=>{
// return item%2!==0; 
// } )
// console.log(newArray);

// 3. Given an array of strings, filter out strings that have more than 3 characters.
// let arr =["cat","dog","monkey","tiger"];
// const newArray=arr.filter((item)=>{
//     if(item.length>3)
//     return item
// })
// console.log(newArray);

// 4. Write a function that filters out negative numbers from an array. 
// let arr = [1,2,3,-4,-5,6,7,-8,9,-10];
// const newArray=arr.filter((item)=>{
//     if(item<0)
//         return item
// })
// console.log(newArray);

// 5. Given an array of boolean values, filter out the `true` values. 
// let arr = [true,false,true,false,true,true];
// const newVal=arr.filter((item)=>{
//     return item==true;
// })
// console.log(newVal);

// 6. Filter an array of strings to include only those that contain the letter 'a'.
// let arr=["roman","ravi","aditya","bicky"];
//  const newArray=arr.filter((item)=>{
//     return item.includes("a")
//  })
//  console.log(newArray)


// 7. Filter an array of numbers to return only those greater than 5. 
// let arr = [ 1,3,5,7,9,11];
// const newArray = arr.filter((item)=>{
//     return item>5;
// })
// console.log(newArray);

// 8. Write a function that filters out empty strings from an array. 
// let arr =["new","old", ""];
// const newArray = arr.filter((item)=>{
//     return item=""
// })
// console.log(newArray)

 
// function removeEmpty(arr){
//     return arr.filter(item => item!=="");
// }
// let newArray=removeEmpty(arr)
// console.log(newArray);

// 9. Write a function that maps an array of numbers to an array where each number is doubled. 
// let arr = [ 2,3,5,4,6,7];
// function doubled(arr){
//     return arr.map(item => item*2);
// }
// let newArray = doubled(arr)
// console.log(newArray);


// 10. Convert an array of numbers into an array of strings using `map`. 
// let arr = [2,4,6,8,5];
// const newArray=arr.map(String)
// console.log(newArray)


// 11. Write a function that converts an array of strings to uppercase using `map`. 
// let arr=["cat","dog","tiger","deer"];
// function newArray(arr){
//     return arr.map(str=>str.toUpperCase());
// }
//  let result =newArray(arr)
// console.log(result);


// 12. Given an array of numbers, map it to an array of `true` (if the number is positive) or `false` (if the 
// number is negative). 
// let arr = [1,2,-3,4,-5,6,-7,-9];

// const newArray=arr.map(item=> item>=0)
// console.log(newArray);
 
// const newArray = arr.map((item)=>{
//     if(item>0){
//         console.log(true);
//     }else{
//         console.log(false)
//     }

// })


// 13. Write a function that adds 1 to each number in an array using `map`. 
// let arr=[1,2,4,5,6];
// const newArray=arr.map((item)=>{
//     return item+1;
// })
// console.log(newArray);


// 14. Given an array of strings, return an array of the first letter of each string using `map`. 
// let arr = ["Ravi","Avishek","Niraj","Adity"];
// const newArray = arr.map((item)=>{
//     return item[0];
// })
// console.log(newArray);


// 15. Convert an array of strings to an array of their lengths using `map`. 
//  let arr = ["Ravi","Avishek","Niraj","Adity"];
//  const newArray=arr.map((item)=>{
//     return item.length;
//  })
//  console.log(newArray)


// 16. Write a function that squares each number in an array using `map`. 
// let arr = [1,2,3,4,5,6];
// function square(arr){
//     return arr.map(item=>item*item)
// }
// let newArray=square(arr);
// console.log(newArray)


// 17. Use `forEach` to log each element of an array to the console. 
// let arr = [1,2,3,4,5,6];
//  arr.forEach((item)=>{
//     //    return item
//        console.log(item);
//  } )


// 18. Write a function that uses `forEach` to calculate the sum of an array of numbers. 
//  let arr = [1,2,3,4,5,6];
//  let sum=0;
//  function num(arr){
//      arr.forEach((item)=>{
//     sum=sum+item;
//  })
//   return sum;
//  }
//  let total=num(arr)
//  console.log(total);


// 19. Use `forEach` to multiply each number in an array by 2 and log the results. 
//  let arr = [1,2,3,4,5,6];
// //  let mul=1;
//  function num(arr){
//      arr.forEach((item)=>{
    
//     console.log(item*2)
//  })
 
//  }
//  let total=num(arr)
//  console.log(total);



// 20. Use `forEach` to log each string in an array in uppercase. 
//   let arr = ["Ravi","Avishek","Niraj","Adity"];
//   const newArray=arr.forEach((item)=>{
//     console.log(item.toUpperCase());
//   })
//   console.log(newArray);


//   21. Use `forEach` to add an exclamation mark to each string in an array and log the new strings. 
// let arr = ["hell0","bye","lets go"];
//  arr.forEach((item)=> {
//     console.log(item+"!")
//  }) 
// console.log(newArray);


// 22. Use `forEach` to log the index and value of each element in an array. 
// let arr = [1,2,3,4,5];
