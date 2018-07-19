var balance = prompt("Your balance?","100$");
console.log(balance);

var c = prompt("Name of our store?");
console.log(c);

var mainList = {
budget: 100,
nameofcomp: 'BookStore',
ShopGoods: ['book1','book2','book3','book4'],
employers: {
director: 'John',
}
};
console.log(mainList.employers.director);

var good1 = prompt("What kind of goods will we sell?");
var good2 = prompt("What kind of goods will we sell?");
var good3 = prompt("What kind of goods will we sell?");
var arrofgoods = [good1,good2,good3];
console.log(arrofgoods);

var num = 33721;
var b = String(num).split("");
console.log(typeof(b));
var proizv = 1;
for(i=0; i<=4;i++){
 proizv*=b[i];
}
console.log(proizv);
console.log(Math.pow(proizv,3));
