// 🟢 EASY LEVEL (Basics)

// Write a function to print all product names using map().

// Write a function to get the price of “iphone” using find().

// Write a function to print all products whose price is greater than 5000 using filter().

// Write a function to calculate total quantity of all products using reduce().

// Write a function to print id and name of each product.

// 🟡 MEDIUM LEVEL (Logic Building)

// Write a function to increase the price by 2 times for products with odd id using map().

// Write a function to return only products with quantity more than 100 using filter().

// Write a function to calculate total stock value
// (price × quantity) using reduce().

// Write a function to check if any product price is greater than 50,000.

// Write a function to return the product with the highest price.

// 🔵 ADVANCED LEVEL (Interview-Style)

// Write a function to increase price by 10% only for products whose quantity is greater than 1000.

// Write a function to remove the product named “abc” from the list.

// Write a function to return an array of product names in uppercase.

// Write a function to group products based on price
// (above 10,000 and below 10,000).

// Write a function to sort products by price (high → low).

// 🔥 CHALLENGE QUESTIONS

// Write a function to find the product contributing the highest stock value.

// Write a function to return total quantity of products whose id is even.

// Write a function to apply a discount of 5% to all products except iphone.

// Write a function to check if all products have quantity greater than 0.

// Write a function to create a new array with name, totalValue (price × quantity).

// 🎯 What You’ll Master by Solving These

// Correct use of map, filter, find, reduce

// Avoiding common mistakes (like wrong accumulator order)

// Writing clean, interview-ready JavaScript

// Real-world data handling logic






const products = [
  { id: 1, name: "abc", price: 2000, quantity: 10 },
  { id: 2, name: "mno", price: 4000, quantity: 20 },
  { id: 3, name: "xyz", price: 5000, quantity: 100 },
  { id: 4, name: "pqr", price: 30000, quantity: 200 },
  { id: 5, name: "iphone", price: 90000, quantity: 7000 }
];


// Write a function to print all product names using map().
// function productname(products){
//    const iphone=products.map((item)=>{
//     console.log(item.name)
//   })
// }
// productname(products)


// Write a function to get the price of “iphone” using find().
// function getprice(products){
//   const findIphone= products.find(item=> item.name=="iphone")
//   console.log(findIphone.price);
// }
// getprice(products)


// Write a function to print all products whose price is greater than 5000 using filter().
// function theProduct(products){
//   const filterProduct=products.filter(item=> item.price>5000)
//     console.log(filterProduct)
// }
// theProduct(products)


// Write a function to calculate total quantity of all products using reduce().
function totalQuantity(products){
  const qunitem=products.reduce((total,item)=>{
    return(total+item.quantity)
  },0)
  return qunitem;
}
console.log("the total quantity of product is "+totalQuantity(products))



// Write a function to print id and name of each product.
// function detail(products){
//   return products.map((item)=>{
//     console.log(`name = ${item.name} - id:${item.id}`)
     
//   })
// }
// detail(products)



// Write a function to increase the price by 2 times for products with odd id using map().
// function incresedNum(products){
//   const filterproduct = products.filter((item)=> {
//     return item%2!==0;
//   })
//   return filterproduct.map((item)=>{
//     return{
//       ...item,
//       price:item.price*2
//     }
//   })
// }
// console.log(incresedNum(products))


// Write a function to return only products with quantity more than 100 using filter().
function QuantityProduct(products){
  const theProduct = products.filter((item)=> item.quantity>100)
  console.log(theProduct)
}
// return theProduct;
QuantityProduct(products)