//we need interfaces if we want the classes to have that property mandatorily
interface UserInterface{
getFullName():string;
//the class which implments this interface has to have getfullname() as one of its method
//otherwise it will show error
}
class User1 implements UserInterface{
    fname:string;
    lname:string;
    readonly unchangableName:string;
    static readonly maxAge=50;
    //CAN NOT DO OBJ1.MAXAGE BUT CAN DO user.maxAge as maxAge is accessible to class only as it is marked static
    // static is accessible in class but not to objects


    constructor(fname:string,lastname:string){
        this.fname=fname;
        this.lname=lastname;
        this.unchangableName=fname;
    }
    changeUnchangablename():void{
        // this.unchangableName="hello"
        // Cannot assign to 'unchangableName' because it is a read-only property.
    }
    getFullName():string{
        return this.fname+' '+this.lname;
    }
    
}

class class1 extends User1{
private editor:string;
setEditor(editor:string){
    this.editor=editor;
}
getEditor(){
    return this.editor;
}

}
const obj1=new User1('mansi','vashistha')
console.log(obj1.getFullName());
const obj2=new class1('heelo','world')
console.log(obj2.getFullName())
obj2.setEditor('krish')
console.log(obj2.getEditor())
