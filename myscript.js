var shoppingList = [{ name: "apple", price: 3 }, { name: "bread", price: 4 }, { name: "chips", price: 1 }, { name: "soup", price: 2 }, { name: "icecream", price: 5 } ];

var total = 0;

shoppingList.forEach(function (item) {
  console.log(item.name + " " + item.price);
  total += item.price;
});

console.log(total);
