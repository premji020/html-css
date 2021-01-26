// create a request variable. req variable issue the http req.
//by creating an instance of xml http req

var request = new XMLHttpRequest();


//open connection
request.open('GET','https://restcountries.eu/rest/v2/all',true)


//send req

request.send();

// load response when it is ready 

request.onload = function(){
    var data = JSON.parse(this.response)
    console.log(data);
    
    for(var i=0;i<250;i++)
    {
console.log(data[i]["flag"]);
    }

}

