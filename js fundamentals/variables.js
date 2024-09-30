//automatic
x=5;
z=4;
y=x+z;
console.log(y);

//var
var p=5;
var q=4;
var r=p+q;
console.log(r);

//let
let a=5;
let b=4;
let c=a+b;
console.log(c);

//const
const price1=1;
const price2=2;
let total=price1+price2;
console.log(total);



let x1 = "5" + 2 + 3;
console.log(x1)

let x2 = 2 + 3 + "5";
console.log(x2)


const prev=5;
// const to be assigned when declared

// It does not define a constant value. It defines a constant reference to a value.

const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    
// ERROR

//comparison operator can also be used on string

string1='hello';
string2='world';
let ans=(string1<string2);
console.log(ans);


// The instanceof operator tests the presence of constructor.
let ans3=string1 instanceof String;
console.log(ans3)
// instanceof operator is for objects


let A=[2,3,4,5];
let ans2=A instanceof Array;
console.log(ans2);
//true indicates that this object is an instance of a particular class

//x ** y produces the same result as Math.pow(x,y)

console.log(Math.pow(5,3));

//logical and assignment operator
let m=10;
m&&=5;
console.log(m);
//If the first value is true, the second value is assigned.

let f=1;
f||=4;
console.log(f);
//if first is true then that value is assigned


let t=0;
t||=4;
console.log(t);
//if first is false then second  value is assigned


// If the first value is undefined or null, the second value is assigned.
const myString = null ?? 'study book';
console.log(myString);

const date = new Date("2022-03-25");
const date2=new Date();
console.log(date);
console.log(date2)




