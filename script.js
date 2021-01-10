let value =10;

setTimeout(function(){
    document.getElementById("demo").innerHTML = value;
    value --;
    setTimeout(function(){
        document.getElementById("demo").innerHTML = value;
        value --;
    },1000)
    setTimeout(function(){
        document.getElementById("demo").innerHTML = value;
        value --;
    },2000)
    setTimeout(function(){
        document.getElementById("demo").innerHTML = value;
        value --;
    },3000)
    setTimeout(function(){
        document.getElementById("demo").innerHTML = value;
        value --;
    },4000)
    setTimeout(function(){
        document.getElementById("demo").innerHTML = value;
        value --;
    },5000)
    setTimeout(function(){
        document.getElementById("demo").innerHTML = value;
        value --;
    },6000)
    setTimeout(function(){
        document.getElementById("demo").innerHTML = value;
        value --;
    },7000)
    setTimeout(function(){
        document.getElementById("demo").innerHTML = value;
        value --;
    },8000)
    setTimeout(function(){
        document.getElementById("demo").innerHTML = value;
        value --;
    },9000)
    setTimeout(function(){
        document.getElementById("demo").innerHTML = "Happy new year!!!";
    },10000)
},1000)