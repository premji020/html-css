var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 
    var newObject = {};

for (var i=0;i<arr.length;i++)
{
    
    var keys = arr[i][0];
    var values = arr[i][1];
    newObject[keys] = values;

}
 
 return newObject;
}
console.log(fromListToObject(arr));