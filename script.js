/*
// create a request variable. req variable issue the http req.
//by creating an instance of xml http req
p = new Promise(function(resolve,reject){
var request = new XMLHttpRequest();


//open connection
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onerror = function(){
    console.log("error");
    reject("Error");
}

//send req

request.send();

// load response when it is ready 

request.onload = function(){
    var data = JSON.parse(this.response)
  resolve(data);
  
}
})
for(k=0;k<restcountriesData.length;k++){
        var weatherlocation = restcountriesData[k].capital
    let weatherResp = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ weatherlocation + '&appid=f1ecd46af7be4d4cbd7f81712fc1327c');
    let weatherData = await weatherResp.json();
    }for(k=0;k<restcountriesData.length;k++){
        var weatherlocation = restcountriesData[k].capital
    let weatherResp = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ weatherlocation + '&appid=f1ecd46af7be4d4cbd7f81712fc1327c');
    let weatherData = await weatherResp.json();
    }


p.then(function(data){
    
    restcountries(data);
}).catch(function(error){
    console.log(error);
})

*/
var resturl = 'https://restcountries.eu/rest/v2/all';
async function getData() {
    try{
    let restcountriesResp = await fetch(resturl);
    let restcountriesData = await restcountriesResp.json();
    restcountries(restcountriesData);
    }
    catch (error){
        console.log(error);
    }
}

getData();




async function restcountries(data) {

    function createHTMLelement(elename,classname = ' ',id = ' ')
    {
    var e = document.createElement(elename);
    e.setAttribute("class", classname);
    e.setAttribute("id",id);
    return e;
    }

    console.log(data);
    var container = createHTMLelement('div','container');
var maindiv = createHTMLelement('div');  
var mainrow = createHTMLelement('div','row'); 

for(var i =0;i<=data.length;i++)
{
    if (i === 33) { continue; }
  
var column = createHTMLelement('div','col col-lg-3 border m-3');
var card = createHTMLelement('div','card');
var title = createHTMLelement('h5','card-title text-center');
title.innerHTML = data[i].name;
var image = createHTMLelement('h5');
image.innerHTML=`<img src = ${data[i].flag} class = "card-img-top">`;
var cardbody = createHTMLelement('div','card-body');
var ul_main = createHTMLelement('ul','list-group list-group-flush text-center');
var li1 = createHTMLelement('li','list-group-item');
li1.innerHTML='Capital: '+data[i].capital;
var li2 = createHTMLelement('li','list-group-item');
li2.innerHTML='Region: '+data[i].region;
var li3 = createHTMLelement('li','list-group-item');
li3.innerHTML='CountryCodes: '+ data[i].alpha2Code + ',' + data[i].alpha3Code;
var li4 = createHTMLelement('li','list-group-item');
li4.innerHTML='LatLong: '+ data[i].latlng[0] + ',' + data[i].latlng[1] ;
let weatherResp = await fetch('http://api.openweathermap.org/data/2.5/weather?lat='+ data[i].latlng[0] +'&lon='+ data[i].latlng[1] +'&appid=f1ecd46af7be4d4cbd7f81712fc1327c');
let weatherData = await weatherResp.json();
console.log(weatherData);
var li5 = createHTMLelement('li','list-group-item');
li5.innerHTML = 'Weather  : ' + (weatherData.weather[0].main);
var li6 = createHTMLelement('li','list-group-item');
li6.innerHTML = 'Weather description is ' + (weatherData.weather[0].description);

ul_main.append(li1,li2,li3,li4,li5,li6);
cardbody.append(ul_main);
column.append(card,title,image,cardbody);
mainrow.append(column);
maindiv.append(mainrow);
container.append(maindiv);
document.body.append(container);


}
}

      
