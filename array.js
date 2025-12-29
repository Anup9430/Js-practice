// Array is the collection of heterogeneous data types

// let arr=[1,2,3,4,5,6,7,8,67]
// index = 0-...
// lenthe= exact the total No of items in the Array

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[arr.length-1]);

// let sum=0;
// for(let i=0; i<arr.length; i++){
//     // console.log(i);
//     sum=sum+arr[+i]
   // }
//  console.log(sum);



// let arr=[1,2,3,4,5,6]
// arr.push(100)            to add at first
// arr.push(200,300)
// console.log(arr)          
// arr.pop()                 to deleter from last
// arr.pop()
// arr.pop()
// console.log(arr.pop())     to print the last deleted number
// console.log(arr.pop())
// console.log(arr.pop())

// arr.unshift(900,800)
// arr.shift()                to deleter from first
// arr.shift()
// arr.shift()
// console.log(arr.shift())   to print the deleted number
// console.log(arr.shift())
// console.log(arr.shift())
// console.log(arr)



// let arr=[1,2,3,4,5,6]
// // slice                             to delete from specific index position
// console.log(arr.slice(1,4))   
// console.log(arr.slice(2,5))
// console.log(arr.slice(1))

// splice                               to delete from spacific with updattion
// let arr = [1,2,3,4,5,6]
// console.log(arr.splice(1,3))
// console.log(arr.splice(1,3, "hellow","bye"))
// console.log(arr)

// concatination
// let arr = [1,2,3,4,5,6]
// let arr1= [ 1,3, "hellow","bye"]
// console.log(arr.concat(arr1))


// map , filter, reduce, foreach, find ,includes--> method

// foreach method
// access and print each item of Array  and yo return gardaina
// let arr=[1,2,3,4,5,6,7]
// arr.forEach((items,index)=>{
//     console.log(items+"-"+index)
// })

// Map--> new array return
// modified existing array and returns new array
// let arr=[1,2,3,4,5,6,7]
// const newArray=arr.map((item)=>{
//     return item*2
//     return item*100
//     return item%100
// })
// console.log(newArray)


// filter 
// filter is used to figure out the specific one or to modified
// let arr=[1,2,3,4,5,6,7]
// const newArray=arr.filter((item)=>{
//     return item%2==0
//     return item%2!==0
//     return item>5
//     return item<5
// })
// console.log(newArray)


// reduce-->which include accumulator which is required to pass the value in callback function for the best practise
// let arr=[1,2,3,4,5]
// let totalVal=arr.reduce((acc,item)=>{
//     return acc+item
// },0);
// console.log(totalVal);


// find= it is used to find out the item present inside the Array ya pata lagaunu
// let arr=[1,2,3];
// const i=arr.find((item)=>{
//     // return item==2
//     return item==4
// })
// console.log(i)


// includes=to check whether the value is available or not inside the Array
// let arr=[1,2,3];
// console.log(arr.includes(2));





//  let sum=0;
// for(let i=0; i<arr.length; i++){
    
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
   

// }


// let arr=[1,2,3,4,5,6,7,8,67]
//  for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// }



//  let sum=0;
// for(let i=0; i<arr.length; i++){
    
//     if(arr[i]%2==0){
//         sum=sum+arr[+i]
        
//     }
   

// }
// console.log(sum)



// 1. Question: Write a function that adds the number `7` at the end of the array `let arr = [1, 2, 3, 4];` using 
// the `push` method. What is the new array? 

// function addSeven(arr) {
//   arr.push(7);
//   return arr;
// }

// let arr = [1, 2, 3, 4];
// let newArray = addSeven(arr);

// console.log(newArray);


// function addSeven(arr) {
//   arr.push(7);



//   return arr;
// }
//  let arr = [1, 2, 3, 4];
//  let newArray=addSeven(arr)
//  console.log(newArray);



// 2. Question: Given an array ``, use the `pop` method to remove the last 
// element. What is the modified array? 

// let arr = ['apple', 'banana'];
// arr.pop()
// console.log(arr)


// 3. Question: Use the `shift` method to remove the first element from the array `let arr = [10, 20, 30, 40];`. 
// What does the array look like afterward? 

// let arr = [10, 20, 30, 40];
// arr.shift(10);
// console.log(arr)


// 4. Question: Write a function that adds the element `'start'` at the beginning of the array `let arr = 
// ['middle', 'end'];` using the `unshift` method. What is the new array? 

// let arr =  ['middle', 'end'];
// arr.unshift("start");
// console.log(arr)



// 5. Question: Convert the array `let arr = ['one', 'two', 'three'];` to a string using the `toString` method. 
// What is the resulting string?

// let arr = ['one', 'two', 'three'];
// arr.toString
// console.log(arr)


// 6. Question: Given an array `let arr = ['cat', 'dog'];`, use the `concat` method to combine it with another 
// array `['fish', 'bird'];`. What is the resulting array? 

// let arr = ['cat', 'dog'];
// let newArray=arr.concat(['fish','bird'])
// console.log(newArray);



// 7. Question: Use the `slice` method to extract the first two elements from the array `let arr = ['red', 'green', 
// 'blue'];`. What does the new array look like? 

//  let arr = ['red', 'green','blue'];
//  let newArray=arr.slice( 0,2)
//  console.log(newArray);
 


// 8. Question: Write a function that removes the last element from the array `let arr = ['x', 'y', 'z'];` and then 
// adds `'a'` at the beginning using the `unshift` method. What is the final array? 

// let arr = ['x', 'y', 'z'];
// function add(arr){
//     arr.pop()
//     arr.unshift('a')
//     return arr;
// }
//     let newArray=add(arr)
//     console.log(newArray);


// 9. Question: Use the `toString` method to convert the array `let arr = [100, 200, 300];` to a string, and 
// then find out the length of the resulting string. What is the length? 

// let arr = [100, 200, 300];
// let newArray=arr.toString();
// console.log(newArray);
// console.log(newArray.length);


// 10. Question: Write a function that uses the `push` method to add both `'orange'` and `'grape'` to the end 
// of the array `let arr = ['apple', 'banana'];`. What is the new array? 

// let arr= ['apple','banana'];
// function add(arr){
//     arr.push('orange','grape');
//     return arr
// }
//     let newArray=add(arr);
//     console.log(newArray);


// 11. Question: Use the `shift` method to remove the first element from the array `let arr = ['sun', 'moon', 
// 'stars'];`. What is the modified array? 

// let arr = ['sun','moon','star'];
//  arr.shift();
// console.log(arr);



// 12. Question: Write a function that adds the number `42` at the beginning of the array `let arr = [7, 14, 
// 21];` using the `unshift` method. What is the resulting array? 

// let arr = [7,14,21];
// function add(arr){
//       arr.unshift(42);
//       return arr;
// }
//       let newArray = add(arr);
//       console.log(newArray);



// 13. Question: Given an array `let arr = [5, 10, 15, 20];`, use the `pop` method to remove the last element 
// and store it in a variable. What is the value of the variable? 

// let arr = [5, 10, 15, 20];
// let value = arr.pop();
// console.log(value);



// 14. Question: Convert the array `let arr = ['hello', 'world'];` to a string using the `toString` method, and 
// then split the string back into an array using the `split(',')` method. What is the resulting array? 

// let arr = ['hello', 'world'];
// let str=arr.toString();
// let newArray = str.slice(',');
// console.log(newArray);


// 15. Question: Use the `concat` method to combine the arrays `let arr1 = ['x', 'y'];` and `let arr2 = [1, 2];`. 
// What is the resulting array? 

// let arr1 = ['x', 'y'];
// let arr2 = [1, 2];
// let newArray = arr1.concat(arr2);
// console.log(newArray);




// 16. Question: Write a function that adds the number `99` at the end of the array `let arr = [1, 2, 3, 4];` 
// using the `push` method, and then removes the first element using the `shift` method. What is the final 
// array? 

// let arr = [1, 2, 3, 4];
// function array(arr){
//    arr.push(99);
//    arr.shift();
//    return arr
// }
//    let newArray=array(arr);
//    console.log(newArray);



// 17. Question: Use the `slice` method to extract the last two elements from the array `let arr = ['a', 'b', 'c', 
// 'd'];`. What is the resulting array? 

// let arr = ['a', 'b', 'c', 'd'];
// let newArray=arr.slice (2,5);
// console.log(newArray);


// 18. Question: Write a function that adds both `'lion'` and `'tiger'` at the beginning of the array `let arr = 
// ['elephant', 'giraffe'];` using the `unshift` method. What is the new length of the array? 

// let arr = ['elephant', 'giraffe'];
// function add(arr){
// arr.unshift('lion','tiger');
// return arr
// }
// let newArray = add(arr);
// console.log(newArray);


// 19. Question: Convert the array `let arr = [20, 30, 40];` to a string using the `toString` method, and then 
// convert the string back to an array using the `split(',')` method. What is the final array? 

// let arr = [20, 30, 40];
// let str=arr.toString()
// let newArray=str.split(',');
// console.log(newArray);



// 20. Question: Use the `push` method to add `'grape'` to the array `let arr = ['apple', 'banana', 'orange'];`, 
// and then use the `pop` method to remove the last element. What is the resulting array? 

// let arr = ['apple', 'banana', 'orange'];
// arr.push('grape');
// arr.pop();
// console.log(arr);



                                    //   array part 2

// 1. Find Even Numbers: - Write a code to find and print all even numbers from the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]`.  

// let arr = [1,2,3,4,5,6,7,8,9]
// function evenNum(arr){
//     for(let i = 1; i<arr.length; i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// evenNum(arr)



// 2. Find Odd Numbers: - Write a code to find and print all odd numbers from the array `[10, 15, 20, 25, 30]`. 

//  let arr = [1,2,3,4,5,6,7,8,9]
// function evenNum(arr){
//     for(let i = 1; i<arr.length; i++){
//         if(i%2!==0){
//             console.log(i)
//         }
//     }
// }
// evenNum(arr)


// 3. Sum of Array Elements: - Write a code to calculate and print the sum of all elements in the array `[5, 10, 15]`.

// let arr = [5,10,15];
// let num =0;
// function sum(arr){   
//     for(let i =0; i<arr.length; i++){
//         num = num + arr[i];
//     }
//     console.log(num)
// }  
// console.log(sum(arr));


// 4. Find Maximum Value: - Write a code to find and print the maximum value in the array `[3, 5, 7, 2, 8]`. 

// let arr = [3,5,7,2,4];
// max=0;
// function maxVal(arr){
//     for (let i=0; i<arr.length; i++){
//         if(max<arr[i]){
//             max=arr[i];
//         }  
//     }
//     return max
// }
// console.log(maxVal(arr))


// 5. Find Minimum Value: - Write a code to find and print the minimum value in the array `[12, 4, 6, 9, 1]`. 

// let arr = [12,4,6,9,1];
// min = arr[0];
// function minVal(arr){
//     for ( let i = 0; i<arr.length; i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//     }
//     return min
// }
// console.log(minVal(arr))



// 6. Count Array Elements: - Write a code to count and print the number of elements in the array `[8, 3, 7, 5]`. 

// let arr= [8,3,7,5,1];
// count=arr.length;
// console.log(count)
// console.log(arr)

// count=0;
// let i=0;
// function countNum(arr){
//     while ( i<=arr.length){
//         count=i++;
//     }
//     return count;
// }
// console.log(countNum(arr))
// console.log(arr)



// 7. Multiply Array Elements: - Write a code to multiply all elements in the array `[2, 3, 4]` and print the result. 

// let arr = [2,3,4];
// let mult=1;
// function multNum(arr){
//     for( let i=0; i<arr.length; i++){
//         mult=mult*arr[i];
//     }
//     return mult;
      
// }
// console.log(multNum(arr))



// 8. Check for a Specific Number: - Write a code to check if the number `7` is present in the array `[5, 6, 7, 8]` and print "Found" 
// or "Not Found". 

// let arr = [5,6,7,8];
// function search(arr){
//     for(let i = 0; i<arr.length; i++){
//          if(arr[i]==7){
//         console.log("found");
//         return;
//     }
//     }
//      console.log("Not found");
   
// }
// search(arr);



// 9. Remove Duplicates: - Write a code to remove duplicate elements from the array `[1, 2, 2, 3, 4, 4, 5]` and print the 
// new array. 

// let arr = [1, 2, 2, 3, 4, 4, 5];
//  let newArray = [...new Set(arr)];
// console.log(newArray);


// 10. Create an Array with Squares: - Write a code to create a new array containing the squares of the elements from the array `[1, 
// 2, 3]`. 

// let arr = [1,2,3];
// let newArray=[];
// for(let i = 0; i<arr.length; i++){
//     newArray.push(arr[i]*arr[i]);


// }
// console.log(newArray)



// 11. Filter Numbers Greater than 10: - Write a code to filter and print numbers greater than `10` from the array `[5, 12, 7, 14, 3]`. 

// let arr= [5, 12, 7, 14, 3]
// const newArray=arr.filter((item)=>{
//     return item>10
// })
// console.log(newArray) 


// 12. Combine Two Arrays: - Write a code to combine the arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array. 

// let arr = [1,2,3];
// let arr1 = [4,5,6];
// const newArray=arr.concat(arr1);
// console.log(newArray)


// 13. Find Array Length: - Write a code to print the length of the array `[9, 7, 5, 3, 1]`. 

// let arr = [9, 7, 5, 3, 1];
// console.log(arr.length)


// 14. Find Average Value: - Write a code to calculate and print the average of the numbers in the array `[10, 20, 30]`. 

// let arr = [10,20,30];
// let sum=0;
// for(let i =0; i<arr.length; i++){
//     sum=sum+arr[i];  
// }
// let avr=sum/3;
// console.log( avr)


// 15. Reverse an Array: - Write a code to reverse the array `[1, 2, 3, 4, 5]` and print the reversed array. 

// let arr = [1,2,3,4,5];
// for(let i=arr.length-1;i>=0; i--){
//     console.log(arr[i])
// }


// 16. Find Common Elements: - Write a code to find and print the common elements between the arrays `[1, 2, 3]` and `[2, 3, 
// 4]`. 

// let arr=[1,2,3];
// let arr1 = [2,3,4];
// for(let i=0;i<arr.length; i++){
//     for(let j=0;j<arr1.length;i++){
//         if(arr[i]==arr1[j])
//             console.log(arr[i])
//     }
// }


// 17. Split Array into Two: - Write a code to split the array `[1, 2, 3, 4, 5]` into two arrays: one with the first half and one 
// with the second half. 

// let arr = [1,2,3,4,5];
// let arr1=[];
// let arr2=[];
// let mid=arr.length/2;
// for(let i=0;i<arr.length;i++)


// if(mid<arr[i]){
//     arr1.push(arr[i])
  
// }else{
//     arr2.push(arr[i]);
  
// }
//   console.log(arr1)
//     console.log(arr2)


// 18. Find Index of an Element: - Write a code to find the index of the element `5` in the array `[10, 20, 5, 30]`. 

// let arr = [10,20,5,30];
// for(let i =0;i<arr.length;i++){
//     if(arr[i]==5){
//         console.log(i)
//     }
// }



// 19. Check if Array Contains a Number: - Write a code to check if the number `4` is in the array `[2, 4, 6, 8]` and print "Yes" or "No".

//  let arr =  [2, 4, 6, 8];
//  let num=false;
// for(let i =0;i<arr.length;i++){  
//     if(arr[i]==4){
//         num=true;
//         break;     
//     }   
// }
// if(num){
//     console.log("Yes")
// }else{
//     console.log("No")
// }


// 20. Create an Array with String Lengths: - Write a code to create a new array containing the lengths of each string from the array 
// `["apple", "banana", "cherry"]`. 

// let arr= ["apple", "banana", "cherry"];
// let arr1=[];
// for(let i = 0;i<arr.length;i++){
//      arr1.push(arr[i].length)
// }
// console.log(arr1);