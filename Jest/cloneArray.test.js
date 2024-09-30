const cloneArray=require('./cloneArray')

test('array clone correctly',()=>{
    const array=[1,2,3];
    expect(cloneArray(array)).toEqual(array)
    // toEqual
    // array is different
    expect(cloneArray(array)).not.toBe(array)
})