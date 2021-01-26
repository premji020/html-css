var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(a) {
 // your code here
 var a = Object.entries(a);
 return a;
}
console.log(convertListToObject(obj));
