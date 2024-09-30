const sum=require('./sum')


test('add numbers correctly',()=>{
    expect(sum(1,2)).toBe(3)
})