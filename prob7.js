var a = {foo: 5, bar: 6};
var b = {foo: 5, bar: 6}
var expected = JSON.stringify(a);
var actual = JSON.stringify(b);

function demo(expected,actual){

if (expected===actual)
{
    return('equal');
}
else
{
return('not equal');
}
}
console.log(demo(expected,actual));