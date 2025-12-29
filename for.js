// 1. Counting from 1 to 20: Write a loop to print numbers from 1 to 20. 

// for(let i=1;i<=20;i++){
//     console.log(i);
// }



// 2. Sum of First 10 Numbers: Use a loop to calculate the sum of the first 10 natural numbers (1, 2, 3, ..., 
// 10). 

// let sum=0;
// for(let i=1; i<=10; i++){
//     sum=sum+i;
// }
// console.log(sum);


// 3. Multiplication Table of 5: Create a loop to print the multiplication table of 5. 

// let mult=1;
// for(let i=1;i<=10;i++){
//     mult=5*i;
//     console.log(`5X${i}=${mult}`)
// }



// 4. Print Numbers from 1 to 100: Write a loop to print numbers from 1 to 100.

// for(let i = 1; i<=100; i++)
// {
//     console.log(i);
// }



// 5. Sum of Odd Numbers: Use a loop to calculate the sum of odd numbers between 1 and 10. 

// let sum=0;
// for(let i=0; i<=10; i++){
//     if(i%2==0){

//     }else{
//      sum=sum+i
//     }
// }
// console.log(sum);


// 6. Count Down from 20 to 1: Write a loop to print numbers from 20 down to 1. 

// for(let i=20; i>0; i--){
//     console.log(i);
// }



// 7. Print Multiples of 3: Use a loop to print the first 10 multiples of 3. 

// let mult=1;
// for(let i=1;i<=10;i++){
//     mult=3*i;
//     console.log(`3x${i}=${mult}`);
// }


// 8. Print Squares of Numbers: Write a loop to print the square of each number from 1 to 10. 

// for(let i=1; i<=10; i++){
//     console.log(i*i)
// }


// 9. Sum of First 100 Numbers: Use a loop to calculate the sum of the first 100 natural numbers. 

// let sum=0;
// for(let i=1;i<=100; i++){
//     sum=sum+i;
// }
// console.log(sum);


// 10. Print Cube of Numbers: Write a loop to print the cube of each number from 1 to 5. 

// for (let i=1; i<=5; i++){
//     console.log(i*i*i)
// }


// 11. Print Numbers in Reverse Order: Write a loop to print numbers from 50 down to 1. 

// for(let i=50;i>0;i--){
//     console.log(i)
// }



// 12. Count Down Odd Numbers: Create a loop to print odd numbers from 19 down to 1. 

// for(let i=19; i>=1; i--){
//     if(i%2==0){

//     }else{
//         console.log(i);
//     }
// }



// 13. Sum of First 5 Odd Numbers: Use a loop to calculate the sum of the first 5 odd numbers (1, 3, 5, 7, 9). 


// let sum=0;
// for (let i=1; i<=10; i++){
//     if(i%2==0){

//     }else{
//         sum=sum+i;
//         console.log(i)
//     }
// }
//       console.log(`The sum of first 5 odd number is ${sum}`);




// 14. Print the First 10 Positive Integers: Write a loop to print the first 10 positive integers.

// for(let i=0;i<=10; i++){
//     console.log(i)
// }



// 15. Print Powers of 2: Use a loop to print the powers of 2 from `2^1` to `2^10`. 


// for(let i=1; i<=10; i++){
//     console.log(2**i)
// }



// 16. Sum of First 10 Even Numbers: Write a loop to calculate the sum of the first 10 even numbers (2, 4, 6, 
// ..., 20). 

// let sum=0;
// for(let i=1; i<=20; i++){
//     if(i%2==0){
//        sum=sum+i;
//     }
// }
// console.log(sum);



// 17. Print Multiples of 4: Create a loop to print the first 10 multiples of 4. 

// let mult=1;
// for(let i=1; i<=10; i++){
//     mult=4*i;
//     console.log(`4x${i}=${mult}`);
// }



// 18. Print First 5 Prime Numbers: Write a loop to print the first 5 prime numbers. 

let count=0
let num=2

while(count<5){
    let isPrime=true;

    for(let i=2; i<num; i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(num);
        count++
    }
    num++
}
 






//  19. Reverse Counting Even Numbers: Use a loop to print even numbers from 30 down to 10. 

//  for(let i=30; i>=10; i--){
//     if(i%2==0){

//     }else{
//         console.log(i)
//     }
//  }