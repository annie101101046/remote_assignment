
function avg(data){
 // your code here
 // console.log(data)
var price = 0;
for (var i = 0; i <data.size; i += 1){
// console.log(data.products[i].price);
price = data.products[i].price + price;
}
console.log(price / data.size);
}


avg({
size:3, 
products:[

{
name:"Product 1",
price:100 
},

{
name:"Product 2",
price:700 
},

{
name:"Product 3",
price:250 
}
]
});  // show the average price of all products

