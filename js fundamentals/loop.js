//The default case does not have to be the last case in a switch block:
//switch
let text;
switch (new Date().getDay()) {
    default:
      text = "Looking forward to the Weekend";
      break;
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
  }

  console.log(text);
  //If default is not the last case in the switch block, remember to end the default case with a break.
  var car=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  let text2=" ";
for(let i=0;i<car.length;i++){
text2+=car[i]+ "<br>" ;
}

console.log(text2);



//You can initiate many values in (exp)expression 1 (separated by comma):
var cars=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for loop:for(exp1;exp2;exp3)
for (let i = 0, len = car.length, text3 = ""; i < len; i++) {
    text3 += cars[i] + "--";
    console.log(text3);
  }


// can omit exp1 also
let i = 2;
let len = cars.length;
let text4 = "";
for (; i < len; i++) {
  text4 += cars[i] + ":";
}
console.log(text4)


// Expression 3 can also be omitted :

let i1 = 0;
let len2 = cars.length;
let text5 = "";
for (; i1< len2; ) {
  text5 += cars[i1] + "*";
  i1++;
}
console.log(text5);



const person = {fname:"John", lname:"Doe", age:25};
let text6 = "";
for (let x in person) {
  text6 += person[x];
}
console.log(text6)

const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x]+" ";
}
console.log(txt)

let txt2=""
numbers.forEach(myFunction);
function myFunction(value) {
  txt2 += value+" ";
}
console.log(txt2)


// LOOP OVER ARRAY
const cars2 = ["BMW", "Volvo", "Mini"];
let text7 = "";
for (let x of cars2) {
  text7 += x+" ";
}
console.log(text7)

//LOOP OVER STRING
let language = "JavaScript";
let text8 = "";
for (let x of language) {
text8 += x;
}
console.log(text8)



