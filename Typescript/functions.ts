const getFullName=(fName,lName)=>{
    return fName+' '+lName;
}

//console.log(getFullName(2,3));//will give output:2 3
//as we have not specified the type then user can give any type of arg and we will not get result as desired so need to write string explicitly

const getFullName2=(fName2:string,lName2:string)=>{
    return fName2+' '+lName2;//ts will automatically understand that output is string
}

//console.log(getFullName2([5],6))-->now error will be raised as type defined explicitly
console.log(getFullName2('mansi','vashistha'))
// -->will give output

//defining functions
//still it is safer to explicitly provide return datatype also in fxn 
const getFullName3=(fName2:string,lName2:string):string=>{
    return fName2+' '+lName2;
    //ts will automatically understand that output is string
    //return true;
    //we will get error here ony as this return type is not string
    //so if we write diff dtattype then will get error and we can remove it
}