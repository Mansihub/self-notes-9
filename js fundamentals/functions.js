let x= myfunction(4,3);

let p=myfunction;
function myfunction(a,b){
    return a+b;
}

console.log(x);
console.log(p);//this returns the function itself 


const person = {
    firstName: "mansi",
    lastName : "vashistha",
    id       : 5566,
    fullname:function(){
        return this.firstName+" "+this.lastName;
    }
  };


console.log(person.fullname);//op:fxn definition
console.log(person.fullname());//op:mansi vashistha






  