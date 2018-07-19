// var balance = prompt("Your balance?","100$");

// var name = prompt("Name of our store?");

// var mainList = {
// budget: balance,
// nameofcomp: name,
// ShopGoods: [],
// employers: {director: 'John'},
// open: false
// };


// for(let i =0; i<5;i++){
// 	var a = prompt("What kind of goods will we sell?");
// 	if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 40){
// 		mainList.ShopGoods[i] = a;
// 		console.log("All right");
// 	}else{
// 		i = i - 1;
// 	}
// }
// console.log(mainList);

var arr = [];
for(let i = 0; i < 7; i++){
	var a = prompt("Enter the digits");
	arr[i] = a;
if(arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7){
	console.log(arr[i]);
};
}
