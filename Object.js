// Object is collection of data which is used to collect the date which include key and value

// CURD - create, update, read(get , fetch), delete

// create Object
// let user={
//     [key]:value;
//     [key]:value;
//     [key]:value;
// }

// create
// let user= {
//     name:"Virat",
//     roll:18,
//     isBatsman:true
// }
// console.log(user)

// // read
// console.log(user.name)
// console.log(user.roll)
// // other Option
// console.log("-----------")
// console.log(user["name"])
// console.log(user["isBatsman"])

// // delete
// delete user.name
// delete user.roll
// console.log(user)


// let user ={
//     name:"Abc",
//     roll:14,
//     isStuden:true
// }

// update





let user = {
    name: "Anup",
    roll:5,
    isStuden:true,
    phone:{
        p1:9898989898,
        p2:9797979797
    },
    marks:[30,20,10,50,40]

};
// console.log(user.phone.p1)
// console.log(user.phone.p2)
// console.log(user.marks)

console.log(user.marks.reduce((acc,item)=>{
    return acc + item
},0))
