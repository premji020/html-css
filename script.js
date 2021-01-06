var count = 0;
function myFunction() {
    count = 0;
    var x = document.getElementById("num").value;
    

    
   if(x.length !=4){
        alert("Enter 4 digit no!!")
    }else if(karpno(x) === 6174){
        document.getElementById("demo").innerHTML = x
    }
}

  function karpno(x){
      var flag=0;
     count=0;
    for(count=0;count<7;count++){
    var a = x.split("");
    var b = x.split("");
    var asc = a.sort(function(a, b){return a-b});
    var dsc = b.sort(function(a, b){return b-a});
    var asc_str = asc.join("");
    var dsc_str = dsc.join("");
    var asc_int = parseInt(asc_str);
    var dsc_int = parseInt(dsc_str);  
     sub = dsc_int - asc_int;
     console.log(sub ,count, dsc_int,asc_int)
    var instances = count+1;
    if(sub === 6174){
         flag=1;
         document.getElementById("demo").innerHTML = "It is a Karprekar Number!!!!" 
         document.getElementById("demo2").innerHTML = "No of iterations taken " + instances;
         break;
    }else{
        document.getElementById("demo").innerHTML = "It is not a Karprekar Number!!!!"
        document.getElementById("demo2").innerHTML = "No of iterations taken " + instances;
    }
    
    x = sub.toString();
  




    }
   
    
    /*if(flag==1){
        return sub
  }else{
      var str = ' ';
      var y = sub
      str+=y;

     return karpno(x)
      
  }*/
  
}

