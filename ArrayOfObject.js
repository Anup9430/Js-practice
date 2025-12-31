const products = [
  {
    id: 1,
    name: "abc",
    price: 2000,
    quantity: 10,
  },
  {
    id: 2,
    name: "mno",
    price: 4000,
    quantity: 20,
  },
  {
    id: 3,
    name: "xyz",
    price: 5000,
    quantity: 100,
  },
  {
    id: 4,
    name: "pqr",
    price: 30000,
    quantity: 200,
  },
  {
    id: 5,
    name: "iphone",
    price: 900,
    quantity: 700,
  },
];
// console.log(products[0].name)
// console.log(products[1].name)
// console.log(products[0].price)
// console.log(products[0].id)

// products.forEach((item) => {
//   console.log(item.name);
//   console.log(item.price);
//   console.log(item.id);
// });


// 1.wr a function that will calculate the total number of quantity of all products
//  function totalQuantity(){
//   return products.reduce((total,item)=>{
//     return total+item.quantity
//   },0)
//  }
//  console.log(totalQuantity());


// 2.wrt a function that will calculate the taotal price all products
// function totalPrice(){
//    return products.reduce((total,item)=>{
//     return total+item.price
//   },0)
// } 
// console.log(totalPrice())


// 3.wrt a function that will find out more than 5000 product price
// function largerProduct(){
//   return products.filter((item)=>{
//        if(item.price>5000){
//         console.log(item)
//        }
//   })
// }
// largerProduct();


// 3.wrt a function that will print the price of iphone
  function getIphone(products){
    const iphone=products.find(item=> item.name==="iphone")
      console.log(iphone.price);
  }
  getIphone(products)



// 3.wrt a function that will calculate the total price of iphone
function totalPrice(products){
  const object = products.find(item=>item.name === "iphone")
  return price=object.price*object.quantity
  
}
console.log(totalPrice(products))



// 6. wrt a function that increase the  price of product by 2 times  whose id is odd.(map)
function increasedProduct(products){
  const filterProduct= products.filter((item)=> {
   return item.id%2!==0;
  })
    return filterProduct.map((item)=>{
      return{
        ...item,
        price:item.price*2
      }
    })
   }

console.log(increasedProduct(products))




//1. wrt a function that will calculate the total number of quantity of all products(reduce)
function totalQuantity(product){
  const Qproduct=products.reduce((total,item)=>{
    return total+item.quantity
  },0)
  return Qproduct
}
console.log(totalQuantity(products));