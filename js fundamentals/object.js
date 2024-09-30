// creating js object
//1)using literal
const obj1={name:"mansi",id:"23"};
console.log(obj1);
// 2)using new keyword
 const obj2=new Object({'age':22});
 console.log(obj2);
// 3)Creating object from existing object
const obj3=Object.create(obj1,{subject:{value:'maths'}})
console.log("object created using object.create")
console.log("object itself:",obj3);
console.log("name property of object:",obj3.name);
console.log("subject property of object:",obj3.subject);
// 4)creating an object from one or more existing object
console.log("object created using object.assign")
const obj4=Object.assign({},{obj1},{obj2})
console.log("object itself:",obj4)
console.log("object id property",obj4.id)
console.log("age property of object",obj4.age);
// Object assignment:
// The object k is not a copy of obj1.Both k and obj1 are same.
console.log("changing property value")
let k=obj1;
k.name="vashistha";
console.log("new value of name property of obj1 is ",obj1.name);

console.log("printing values of all properties of an object")
for(let x in obj1){
console.log(obj1[x]);
}

let person1={
    fname:'james',
    lname:'watt',
    fullname:function(){
        return this.fname + " " + this.lname;
    }
};

let txt=person1.fullname();
console.log(txt);

//adding method to object

person1.firstName=function(){
    return this.fname ;
};

let txt2=person1.firstName();
console.log(txt2);

//displaying object in an array form
const person2={
    name:"joe",
    age:"32"
};
const myArray=Object.values(person2);
console.log(myArray);

//display object as it is by converting it to string
let myString=JSON.stringify(person2);
console.log(myString);


const person = {
    name: "John",
    age: function () {return 30;}
  };
  console.log(person.age)
  person.age = person.age.toString();
  console.log(person.age)
  


