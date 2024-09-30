//creating objects
const obj={
    name:"mansi",
    id:87
}

const obj10={
    name:"meenakshi",
    id:86
}

//what if in any object we forget to add age then js will not show error
//just specify the type of each property in {} braces just after writing the object name
//put = sign and then write about object

const obj3:{name:string,id:number}={
    name:"mansi",
    id:87
}

// const obj20:{name:string,id:number}={
//     name:"mansi",
//     //if i don't write id then on hovering its showing property id is missing
// }

//but here in each object we have to define the datatype of object properties again and again:we want it all to be once
//here comes the interfaces-->help us creating objects with some properties
//creating interface

interface User200{
    name:string;
    id1:number
}

// using interface

// const obj5:User200={
//     name:"mansi",
//     //id1:87-> will also give error if any property is missing
// }

// by default , all properties in interface are treated mandatory to be included while creating object
// If we want some properties to be optional in interface just add '?' after name of property and before colon


interface User10{
    name:string;
    id?:number
}
const obj6:User10={
    name:"mansi",
    //id:87-->if not written,will not cause error as used ? in interface
}

//function inside interface
interface IUser{
    name:string;
    id?:number;
    greetMessage():string;
}
const obj7:IUser={
    name:"mansi",
    //id:87-->if not written,will not cause error as used ? in interface
    greetMessage() {
        return "hello  "+ this.name;//we have to write this.name
    },
}

console.log(obj7.greetMessage());