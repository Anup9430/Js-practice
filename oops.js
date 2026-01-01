// class-class is blueprint or template for the object 
// basically it provide the dry principle and neglect repeatation of code or object 



// object
// drp - principle
// dry-do not repeat yourself\

// this vaneko current object lai refer garxa


class User{
    constructor(userName,userPhone){
        this.name=userName
        this.phone=userPhone
    }
    walk=()=>{
        console.log("walk")
    }
    info=()=>{
       console.log(this.name)
       console.log(this.phone)
    }
}
 
const u1=new User("Abc","986431310")
// {
//     name:"Abc",
//     phone:"986461946"
// }
const u2 =new User("sdf","97613131")
// console.log(u1)
// u1.walk()
// console.log(u1.name)
// console.log(u1.phone)
u1.info()

// super() esko kaam ho ki parent ko properties refer gardinxa

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
}
class student extends Person{
    constructor(name,age,roll){
        super(name, age)
        this.roll=roll
    }
}
class emp extends Person{
    constructor(name,age,dpr){
        super(name, age)
        this.dpr=dpr
    }
}
const s1=new student("anup","22",22);
console.log(s1)
const s2=new emp("anup","22","It");
console.log(s2)