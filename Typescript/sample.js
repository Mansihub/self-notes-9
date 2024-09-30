//typescript:its just an extension to js
//static typed extension 
//js-->dynamically typed-->variable type are determined at runtime
//in js-->we can face error at runtime
//in typescript-->we will get error at compile time rather than runtime
//seeeing the error earliewr is really efficvient
//typescript-->can't be run directly in browser
function foo() {
    var a = "Hello Mansi";
    console.log(a);
}
foo();
var hello = 'hello'; //here we get const hello:'heloo' on hover not hello:string
//hello='yeah'-->will show error as constant cant be changed
var a = 8;
a = 7; //we are able to change the value but to the same datatype oonly
var b = 'pin'; //when we hover over it we get to see b:string
//we can also explicitly mention type
var c = 'hello';
//all the above type declarations are var as typescript transpiles everything by default to ecmascript-->this can be run by every browser




