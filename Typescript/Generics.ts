const score:Array<number>=[]
const names:Array<string>=[]

function One(val:string):string{
    return val
}

function Two(val:string|boolean):string|boolean{
    return val
}

function Three(val:any):any{
    return val
}

function Four<Type>(val:Type):Type{
    return val
}

function Five<T>(val:T):T{
    return val
}

//defining our custom type
interface OurType{
    uname:string,
    id:number
}

function Six<OurType>(val:OurType):OurType{
    return val
}

Six({
    uname:'mansi',
    id:9
})
