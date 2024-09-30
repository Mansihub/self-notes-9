//union-->operator to combine data types
let username:string='mansi'
let id:string|number='m'//-->no error
let id2:string|number=8
let errorMsg:string|null=null;
//we can use custom interfaces inside union
//lets consider user,if user is not fetched it is by default null
interface UserInfo{
    name:string;
    age:number
}

let user1:UserInfo|null=null;//as user is by default null

//Type aliases
type ID= string;

interface User{
    id:ID
}
//similarly we can write aliases for string,arrays and use it everywhere
//types and interfaces are written/start with capital letter

//const carNames : string[]=['maruti','eon']//this is correct but for better understanding we can also write like:
type carName=string;
const carNames:carName[]=['maruti','eon']

//custom type-->for combining type alias and unions
type MaybePopularcar=carName|null;

const newTag:MaybePopularcar='maruti';
