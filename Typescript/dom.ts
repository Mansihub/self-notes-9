
//typescript as no acces our markup
//so firstly type to be defuined then typescript  chk whether this type has the particular proprty or not
//element is the highest class in hierarchy
//event is also highest class in hierarchy
const someElement=document.querySelector('.foo')
//console.log('someElement',someElement.value)-->this does not work
//console.log('someElement',(someElement as any).value)-->this works but not good practice
//another way:
const someElement1=document.querySelector('.foo') as HTMLInputElement;
console.log('someElement',someElement1.value)
//ABOVE THING WORKS

//add event listener
const someElement3=document.querySelector('.class');
someElement3?.addEventListener('blur',(event)=>{
    const target=event.target as HTMLInputElement;
    //now our target is a html input element
    console.log("event",target.value)
   // console.log("event",event.target.value)-->gives error
});
// By adding ?. after someElement3, you're ensuring that addEventListener is only called if someElement3 is not null. If someElement3 is null, the event listener will not be added, and the code inside the event listener will not execute, avoiding the possibility of accessing properties on a null object.
