///prob 1


var num = 10 ;

function addFive(num){
    return num+5;
}

addFive(num);


///prob 2

var num2 = 5 ;

function getOpposite(num){
    return (num)*(-1);
}

getOpposite(num2)


///prob 3

var min = 5;

function toSeconds(min){
    return min * 60;

}

toSeconds(min)


///prob 4

var mystr = "5";

function toInteger(mystr){
    var intval = parseInt(mystr);
    return intval;
}

toInteger(mystr);

///prob 5

var myint = 0;

function nextNumber(myint){

    return myint + 1

}

nextNumber(myint);

///prob 6

var arr1 = [1, 2, 3, 4, 5];

function getFirstElement(arr){

    return arr[0];

}

getFirstElement(arr1);

///prob 7


var hr = 2;

function hourToSeconds(hr){

    return hr * 3600;
}

hourToSeconds(hr);

///prob 8

var length = 6;
var width = 7;

function findPerimeter(num1,num2) {

return 2*(num1+num2);
}
var peri = findPerimeter(length,width);

///prob9

var no1 = 22;
var no2 = 14;

function lessThan100(num1,num2) {

        var sum = num1+num2;
        if(sum<100)
        {
            return true;
        } else {
            return false;
        }
}
var res = lessThan100(no1,no2);

///prob10

function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3)

///prob11

function CountAnimals(tur,horse,pigs) {
return (tur*2)+(horse*4)+(pigs*4);

}
var legs = CountAnimals(2,3,5)

///prob12

function frames(num1,num2) {
    return num1*num2*60;
}
var fps = frames(1,2);

///prob13

function divisibleByFive(num1) {
    if(num%5===0){
        return true;
    }else
    {
        return false;
    }
}
var divisible = divisibleByFive(5)

///prob14

function isEven(num){
    // your code here
    if(num%2 === 0){
        return true;
    }else{
        return false;
    }
   }
   var even = isEven(5)

///prob15

   function isOdd(num1,num2){
    // your code here
    if(num1%2 === 0 && num2%2 === 0 ){
        return true;
    }else{
        return false;
    }
   }
   var even = isOdd(5,6);

///prob16

function getFullName(firstName, lastName){
    // your code here
    return firstName+" "+lastName;
   }
   getFullName("hi","there")

///prob17

var w = "GUVI"

function getLengthOfWord(word1){
    return word1.length;
}

getLengthOfWord(w);

///prob18

var w1 = "GUVI";
var w2 = "GEEK";

function isSameLength(word1, word2){
    // your code here
    if(word1.length==word2.length){
        return true;
    }else
    {
        return false;
    }
   }

   isSameLength(w1,w2);

///prob19
function getDistance(x1, y1, x2, y2)
{
 
var diff1 = x2 -x1;
var diff2 = y2 -y1;

var sum = (diff1*diff1)+(diff2*diff2);
return Math.sqrt(sum);

}

console.log(getDistance(100, 100, 400, 300));

///prob20
var array =[1,2,3,4,5];

function getNthElement(array,n){
    // your code here
return array[n];
   }

getNthElement(array,2);

///prob21

var array =[1,2,3,4,5];

function getLastElement(array){
    // your code here
    var totallength = array.length-1;
    return array[totallength];
   }

   getLastElement(array);


////prob22


var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
    // your code here
    return obj.key;

   }

   getProperty(obj,mykey);

///prob23

var obj = {
    mykey: "value"
   };
   function addProperty(obj,key){
    // your code here
    var newobj = obj.key = "true";
    return newobj;
   }
addProperty(obj, "mykey")


///prob24
var obj = {
    mykey: "value"
   };

function removeProperty(obj, key){
   
    var newobj = delete obj.key;
    return newobj;
   }

removeProperty(obj, "mykey");

///prob25

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {

    var newarr = [];
    for(var i=0;i<arr;i++){
        if(arr[i]>=0){
            var plus = plus+1;
    }else{
var minus = minus+1;
    }
 
}
return newarr.push(plus,minus);
}

countPositivesSumNegatives(arr);

///prob 26

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(arr) {

    var newarr = [];
    for(var i=0;i<arr;i++){
        if(arr[i]>=0){
            var plus = plus+arr[i];
        return newarr.push(plus);
        }
    
 
}

}

getPositives(arr);

///prob27
var n =4;
function powersOfTwo(n){
  var res = Math.pow(2,n);
    return res;
  }

powersOfTwo(n);

///prob 28

array = [50, 60, 20, 10, 40];

function findMinMax(array) { 
    maxValue = Math.max(...array); 
    return maxValue
}
findMinMax(array);

///prob 29
function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr;
}

display(100);

///prob30

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(i,n) {
    var arr = [2];
    for (i ; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr;
}

display(10,20);



///prob 31


function reverseString(a){
var b = a.reverse().join("");
}

reverseString("hithere");


///prob32

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

function mergeArrays(ar1, ar2)
{
 var result = [];

return result.concat(ar1, ar2);

}

mergeArrays(ar1, ar2);

///prob33
var str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"
function sumCSV(s)
{
  // your code here
  var res = str.split(",");
  for(var i=0; i<res.length; i++){
      var final = final+res[i];
  }
  return final;
}

sumCSV(str);