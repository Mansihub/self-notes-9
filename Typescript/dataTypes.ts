//when we don't return something,it is considered void
const writeSomething=():void=>{
    console.log("hello hey there");
   // return 1;Type 'number' is not assignable to type 'void'
}

let app : any="app"
console.log(app.bar())
// here app is 'any',typescript does not know anything regarding it so it does not show any error
//-->here app does not have any property like bar still we are not getting error bcz it is considering it as any datatype

const writeSomething2=():never=>{
    //console.log("hello hey there");
    throw "never"
}

//unknown
// -->alternative to 'any'
// -->we can not assign unknown to any other type directly
let anyval:any='p'
let unknownval:unknown='q'

let s1:string=anyval;//no error
// let s2:string=unknownval;
//Type 'unknown' is not assignable to type 'string'.

console.log(anyval.foo())//no error

// console.log(unknownval.foo())
//will show error:as foo property is not of unknownval

//Type assertion:converting one type to other
//-->using 'as' operator-->we can assign unknown to the type we want using as operator
let s3:string=unknownval as string;//

let pageNum:string='1';
//let pageInt:number=pageNum as number;
//this won't work,first convert to unknown
let pageInt:number=(pageNum as unknown) as number



