var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(a) {
 // your code here
 var a = Object.keys(obj);
 return a;
}
console.log(printAllValues(obj));