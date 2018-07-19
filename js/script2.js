var s = 'Anton hi there';
console.log(s.replace("hi",'hello'));
console.log(s[10]);
console.log(s.indexOf('h'));
console.log(s.slice(5));


var a = 0, isTrue = true;
isTrue && (a = 5);
console.log(a);


function greet(name){
	return "Hello " + name;
}

console.log(greet());

var a = 1+3+"3"+6+2;
console.log(a);
console.log(typeof a);
console.log(!!"");
var b = 45;
console.log(b.toString());
console.log(+"");

var name = "Toha", homecity;

if(name === "Toha"){
	homecity="Dnipro";
} else if (name === "Sorax"){
	homecity = "Kiev";
} else {homecity = "Lviv"};
console.log(homecity);


switch (name){
	case "Toha": homecity = "Dnipro";break;
	case "Sorax": homecity = "Kiev";break;
	case "Sanya": homecity = "Kerch"; break;
	default: homecity = "Lviv"; break;
}
console.log(homecity);

(5<10)? console.log("True") : console.log("False")

var num = 0;
while(num <10){
	num++;
	console.log(num);
}


	var num = 0;
for(let i = 1; i<=5; i++){
	num++;
	console.log(num);
}

var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

for(let i =0; i<7;i++){
if(i<5){
	console.log(week[i])
} else if(i == 5 || i == 6){
console.log(week[i].bold());
};
};



var num = 33721;
var b = String(num).split("");
console.log(typeof(b));
var proizv = 1;
for(i=0; i<=4;i++){
 proizv*=b[i];
}
console.log(proizv);
console.log(Math.pow(proizv,3));


var arr = [];
for(let i = 0; i < 7; i++){
	var a = prompt("Enter the digits");
	arr[i] = a;
if(arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7){
	console.log(arr[i]);
};
}
