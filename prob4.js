var arr = ["GUVI", "I", "am", "geek"];
function transformFirstAndLast(arr) {

    newObject = {};
    var len = arr.length;
    var size = len-1;
    var a = arr[0];
    var b = arr[size];
    key = a;
    value = b;
    newObject[key] = value;


 
 return newObject;
}
console.log(transformFirstAndLast(arr));