// 3. Sum
// Imagine you have a shopping cart with various items. Each item has a price, and you want to know the total cost of everything in the cart.
// e.g. item=[{price: 10.99}, {price: 5.99}, {price: 29.99}]
 
function sum(item){
    let totalprice = 0
    for(let a of item){
        // console.log(item.price)
       totalprice = totalprice + a.price
    }
    return console.log("totalprice"+ totalprice)
}


let item=[{price: 10.99}, {price: 5.99}, {price: 29.99}]
sum(item)