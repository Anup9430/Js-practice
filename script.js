// console.log("HEY!!")
// alert("Hello this is js class")
// document.writeln("This is js class")
// userName=prompt("Enter your Name")
// console.log(userName)
// document.writeln(userName)
// alert(userName)


// #Varible and rules
// val=10
// console.log(val)
// the number of ways the variale can be deaclare
// 1.fullName
// 2.full_fullName=10
// 3.$num=10
// 4.num1=10
// 5._name="Ram"


// #data types
// 1.primitive-> which cont be modified and change and also already defined
// ex num="hello"
// type of primitive data type
// 1.string
//    -single quatation( fullName='helo')
// in this we can add value in between
//   fullName='helo'


//    -double quatationn(fullName="helo")
//    ex fullName="helo's"
// so that we can use sinlge quataiton in value

//    -backtik(fullName=`helo`)
// for the multiline 
// ex fullName=`loredf 
//              sldkjf `



// 2.number
//   0-9
//   num=10
//   num=10.4
//   num=10.4585
//   console.log(typeof num)


// 3.underdefined
// var num=null  it is empty but it takes the memeory space because user has defined the value which is null means emptly
// console.log(num)
// console.log(typeof num) it show the data type (object) which is considered as the bug of js

// // var num2;  it is empty but it doesnot takes the memeory space because user has not  defined the value means emptly
// console.log(num2)
// console.log(typeof num2)

// learn about why in js null is object



// 4.null



// 5.Boolean
// true and false
// var num=12345678954545451n
// var num=BigInt(12345574658784518n)
// console.log(typeof num)


// 6.Bigint ->for the large number of integer

// 7.Symbol->for the unique value of which acquired with it their exact time of declaration
// var a=10
// var b=10
// console.log(a==b)
// var id1=Symbol("ram")
// var id2=Symbol("ram")
// console.log(id1==id2)
// console.log(typeof id1)




// 2.non primitive->refrencial data types
// type of non priimitive data type


// 1.object
//  var user={
//     name:"ram"
//     age:21
//  }
//  var use2={
//     name:"ram"
//     age:21
//  }
//  console.log(user==user2)


//  -> yo equal hudain bcz user le chai address store gareko 
//  hunx jun ki address kaile pni tw0 different variable ko same hudaina


// 2.Array

// colllection of various heterogeneious data types 
// ele chai index lai type object dekhaunxa

// const arr=[1,2,3,4,5,6,7]
// console.log(typeof arr)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])



// 3.function
// fucntion is a block of code that perform a specific TextTrackList

// function add(){
//    console.log("add")
// }

// add()

// console.log(add)
// console.log(typeof add)






// 5.Date
// Date is inbuilt object in javascript

// const date=new Date ()
// console.log(date)
// console.log(typeof date)


// var,let and const
// var is the variable that we dont need to define the data type of any varible 
// javascript it identified which data type it is
// ani elai jati khera ni change and updat garana painxa ani same naam ko variable ni banauna sakinxa

// like 
// var a =10;
// var a="hello"
// var a=true






// const
// update garani paidaina ,block state ko variable ho ,ekxoti declare garisake pxi feri pxi
// declare garna mildaina matlavb same name ko variable banauna mildaina

// const PI=3.14
// PI=5
// {
//    const x=100
//    const x=200
//    console.log(x)
// }
// console.log(x)

// let
// update garna painxa 





// let x=10
// x=200

// {
//    let a=100
//    console.log(a)
// }
// console.log(a)



// hoisting
// hoisting var matra garna milx aru ma chai hudaina

// console.log(x) 
// var x=10
// declare na garikana haami access mangdai xau value K0
// yo case underfined lekhxa console ma kn vane var x lai mathi affaile defined 
// gardeko hunx tara value chai lidaina
// like
// var x
// console.log(x)
// var x=10

// yesaile lai hoisting vaninxa



// operators
// 1.Arithmetic operators
// +.-,*,/,%,**,++,--
// console.log(10+20)
// console.log(10-20)
// console.log(10*20)
// console.log(10/20)

// let x=10
// console.log(x++)
// console.log(x--)
// console.log(++x)
// console.log(--x)
// console.log(x)



// 2.Assigment operation
//  =,+=,-=,/=,%=,*=,**=,
// let x=10;
// x +=5;
// console.log(x)
// x -=5;
// console.log(x)

// x *=5;
// console.log(x)

// x /=5;
// console.log(x)

// x %=5;
// console.log(x)

// x **=5;
// console.log(x)


// 3.cooparison operators(true or false )
// ==,===,<,>,>=,<=,!=,!==
// let x=4;
// let y="4"
//  console.log(x==y)
//  console.log(x===y)
//  console.log(x<y)
//  console.log(x>y)
//  console.log(x>=y)
//  x is greater than y or x is equal to y
//  console.log(x<=y)
//  x is smaller than y or x is equal to y
//  true+false= true;
//  false+false = false
//  console.log(x!==y)
//  x data types is not equal to y data typeof


// // 4.Logical operators
// esma hunx 
// and or 

// condtion1 and condition2
// if both cond are true than it gives true
//  true && ture=true
//  false && true = false
//  true && false = false
//  false && false = false

//  or 
//  true || true = true
//  true || false = true
//  false || true = true
//  false || false = false

//  not(!)
//  let isAdmin= false
//  console.log(!isAdmin)



//  type casting
//  console.log(false*1+true+5)
//  console.log(false+"hi"+1+true)
//  console.log(false+1+true+"hi")

//  string in Number
//  let num=""10"
//  console.log(typeof num)
//  num=Number(num)
//  num=persInt(num);
//  console.log(typeof num);
//  console.log(num)

//  let num=973
//  console.log(typeof num);
//  num=string(num);
//  console.log(typeof num)



//  string,number,empty to Boolean
//  let x="hi"
//  console.log(x)
//  0,null,undefined,empty,false = false
// let x=-5
// console.log(Boolean(x))


// If_else
// if(true){
//    console.log("if")
// }else{}
// console.log()



// switch("A"){
//    case "A" :{
//       console.log("A");
//       break;
//    }
//    case "B" :{
//       console.log("B");
//       break;
//    }
//    case "C" :{
//       console.log("C");
//       break;
//    }
//     case "D" :{
//       console.log("D");
//       break;
//    }
//     case "E" :{
//       console.log("E");
//       break;
//    }
//    default:{
//       console.log("default")
//    }
// }



// type of function
// 1.Named function

// function add(){
//    console.log("add")
// }



// 2.Arrow function

// const add=(a,b)=>{
//    console.log(a+b);
//    return a+b
// }
// add(2,3)

// const add= (a,b)=>a+b;
// const add = a => a+5;
// console.log(add(2));


// immitdetly invoked function also anonomous function
// (function(){
//    console.log("hello")
// })()


// 4.inner function
// function outer(){  //outer function
//    function inner(){    // inner function should cant be call outside the outer function it must should be call in outer function
//       console.log("inner");
//    }
//    inner();
// }
// outer();



// callback function
// euta function lai arko function ma as a parameter le passs garunu lai callback function vanxan

// const second =(f,x)=>{
//    f(x);
//    console.log("Second");
// }
// second( (a) =>{
//    console.log("first",a);
// }
// ,100);





const outer =(f,num)=>{
   f();

   
   // console.log("Second");
}
 outer(
   (a)=>{
       if( a %2==0){
      console.log("first",a);
   }else {
      console.log("odd");
   }
   },100);




   // setInterval(()=>{
   //    console.log("setInterval")
   // },1000)



   default parameter

   const add =(x, y=1)=>{  //by default it takes the value of y itself from the parameter
      console.log(x,y);
   }
   add(100)