// Array Detructin
// let arr = [1,2,3]
// const [a,b,c]=arr
// console.log(a,b,c)

// object destructing
// const user={
//     name:"asdf",
//     age:4
// }
// const{name,age}=user
// console.log(name,age)

// rest and spres op (...)
// spread
// let arr == [1,2,3];
// let arr2 = [...arr,100,200]
// console.log(arr2)
// const user={
//     name:"abc",
//     age:20
// }
// const user2={
//     ,,,user,
//     phone:984651616
// }
// console.log(user2)



resizeTo(...)
const add=(...x)=>{
    console.log(
        x.reduce((acc,item)=>{
            return acc+item;
        },0)
    );
};
console.log(add)