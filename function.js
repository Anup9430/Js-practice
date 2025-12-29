// function

// function addTwo(){
//     console.log("addTwo");
//     return;
// }
// console.log(addTwo());


// function add(a,b,c){
//     // console.log(a+b+c);
//     return a+b+c    return used to send the value back function name
// }
// // add(1,2,3)
// let sum=add(1,2,3)
// console.log(sum);


// function sub(a,b,c){
//     // console.log(a-b-c);
//     return a-b-c
// }
// // sub(9,2,1)
// let x=sub(9,2,1);
// console.log(x);


// function mul(a,b,c){
//     return a*b*c
// }
// let y=mul(1,2,3)
// console.log(y);


// write a function that will tel given num  or pass num even or odd

// function check(a){
//     if(a%2==0){
//         console.log("even")
//     }else{
//         console.log(odd);
//     }
// }
// check(8)



// wr a function that will print 1 to nth num

// function num(b){
//     for(let i=1;i<=b;i++){
//         console.log(i)
//     }
// }
// num(5)



// wr a function thet will print even numbers from 1 to n th
// function num(a){
//     for(let i=0; i<=a; i++){
//     if(a%2==0){
//         console.log(`even ${a}`);
//         // console.log(i);
//     }else {
//         console.log("odd")
//     }
    
// }
// }
// num(10)




// wr a function that will print sum of even numbers from 1 to nth natural number

// function add(a){
//      let sum=0;
//     for(let i=1; i<=a; i++){
//        if( i%2==0){
//         sum=sum+i;
//        }
//     }
//     console.log(sum)
// }
// add(5)

// wr a function that will calculate the factorial of given number

// function calculatFactorial(num){
//     let fact=1;
//     for(let i=1; i<=num; i++){
//         fact=fact*i;
//     }
//     console.log(fact);
// }
// calculatFactorial(4)


// function isPrime(num){
//     if(num<=0 || num==1){
//         console.log("isnotprime")
//     }
//     let prime = true;
//     for (let i=2; i<num; i++){
//         if(num%i===0){
//          prime= false
//         break;
//         }
       
//     }
//     if(prime){
//     console.log("is Prime")
// }else{
//     console.log("is NOt prime")
// }
// }
// isPrime(11)


 
// 1. Write a function that uses a `for` loop to print numbers from 1 to 10. 


// function printNum(){
//     for(let i=1; i<=10; i++){
//         console.log(i)
//     }
// }
// printNum()



// 2. Write a function that uses a `for` loop to calculate and return the sum of the first `n` natural numbers. 


// function sumNatural(n){
//     let sum=0;
//     for(let i=0; i<=10; i++){
//       sum=sum+i;
//     }
//     return sum
// }

// let num=sumNatural(10)
// console.log(num)



// 3. Write a function that uses a `for` loop to print all even numbers between 1 and 20. 

// function printEven(){
//     for(let i=1;i<=20; i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// printEven()




// 4. Write a function that uses a `for` loop to print all odd numbers between 1 and 20. 

// function printEven(){
//     for(let i=1;i<=20; i++){
//         if(i%2==0){
           
//         }else{
//      console.log(i)
//                  }
//     }
// }
// printEven()



// 5. Write a function that uses a `for` loop to calculate and return the factorial of a given number `n`. 

// function factorial(n){
//      let fact=1;
//     for(let i=1; i<=n; i++){
       
//         fact=fact*i
//     }
//     return fact
// }
// let num=factorial(4)
// console.log(num);



// 6. Write a function that uses a `for` loop to print the multiplication table of 5. 

// function multiple(n){
//     let mult=1;
//     for(let i=1; i<=10; i++){
//        mutl=n*i;
//        console.log(`${n}x${i}=${mutl}`)
//     }
// }
// multiple(5)



// 7. Write a function that uses a `for` loop to print numbers from 10 to 1 in reverse order. 

// function reverse(){
//     for(i=10;i>=1;i--){
//         console.log(i);
//     }
// }
// reverse()



// 8. Write a function that uses a `for` loop to print all multiples of 3 between 1 and 30. 

// function multiple(n){
//     let mult=1;
//     for(let i=1; i<=30; i++){
//        mutl=n*i;
//        console.log(`${n}x${i}=${mutl}`)
//     }
// }
// multiple(3)



// 9. Write a function that uses a `for` loop to calculate and return the sum of all even numbers between 1 
// and 50. 

// let sum=0;
// function evenSum(){
//     for(let i=1;i<=50; i++){
//         if(i%2==0){
//             sum=sum+i;
//         }
//     }
//     return sum
// }
// console.log(evenSum());




// 10. Write a function that uses a `for` loop to calculate and return the sum of all odd numbers between 1 
// and 50. 


let sum=0;
function evenSum(){
    for(let i=1;i<=50; i++){
        if(i%2==0){
            
        }else{
            sum=sum+i;
        }
    }
    return sum
}
console.log(evenSum());