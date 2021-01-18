function myFunction() {
    var x = document.getElementById("mySearch");
    var currentVal = x.value;
    //console.log(currentVal);
    getData(currentVal);
   
}

async function getData(data){

    try{
        let recipeResp = await fetch('https://api.edamam.com/search?q='+ data +'&app_id=0cafd5f9&app_key=575d01e010c6265b95da8d395cfeb199&from=0&to=30&calories=0-722&health=alcohol-free');
        let recipeData = await recipeResp.json();
        recipeFn(recipeData);
        //console.log(recipeData.hits)
        }
        catch (error){
            console.log(error);
        }
}
    

async function recipeFn(data){

function createHTMLelement(elename,classname = ' ',id = ' ')
{
var e = document.createElement(elename);
e.setAttribute("class", classname);
e.setAttribute("id",id);
return e;
}




var container = createHTMLelement('div','container-fluid');
//var maindiv = createHTMLelement('div');  
var mainrow = createHTMLelement('div','row row-cols-1 row-cols-md-3 lg-6'); 
for(var i =0;i<=data.hits.length;i++)
{
 
  
var column = createHTMLelement('div','col col-lg-3 border mb-4 p-3');
var title = createHTMLelement('h5','card-title text-center');
title.innerHTML = data.hits[i].recipe.label;
var image = createHTMLelement('p');
image.innerHTML=`<img src = ${data.hits[i].recipe.image} class = "card-img-top">`;
var cardbody = createHTMLelement('div','card-body');
var ul_main = createHTMLelement('ul','list-group list-group-flush text-center');
var li1 = createHTMLelement('li','list-group-item');
li1.innerHTML='Calories : '+data.hits[i].recipe.calories+'Cal';
var li2 = createHTMLelement('li','list-group-item');
li2.innerHTML='Tags : '+data.hits[i].recipe.healthLabels[0]+','+data.hits[i].recipe.healthLabels[1]+','+data.hits[i].recipe.healthLabels[2];
var li3 = createHTMLelement('li','list-group-item');
li3.innerHTML='Vitamin A : '+data.hits[i].recipe.totalNutrients.VITA_RAE.quantity+' '+data.hits[i].recipe.totalNutrients.VITA_RAE.unit;
var li4 = createHTMLelement('li','list-group-item');
li4.innerHTML='Vitamin B6 : '+data.hits[i].recipe.totalNutrients.VITB6A.quantity+' '+data.hits[i].recipe.totalNutrients.VITB6A.unit;
var li5 = createHTMLelement('li','list-group-item');
li5.innerHTML='Vitamin B12 : '+data.hits[i].recipe.totalNutrients.VITB12.quantity+' '+data.hits[i].recipe.totalNutrients.VITB12.unit;
var li6 = createHTMLelement('li','list-group-item');
li6.innerHTML='Vitamin C : '+data.hits[i].recipe.totalNutrients.VITC.quantity+' '+data.hits[i].recipe.totalNutrients.VITC.unit;
var li7 = createHTMLelement('li','list-group-item');
li7.innerHTML='Vitamin D : '+data.hits[i].recipe.totalNutrients.VITD.quantity+' '+data.hits[i].recipe.totalNutrients.VITD.unit;
var li8 = createHTMLelement('li','list-group-item');
li8.innerHTML='Vitamin K : '+data.hits[i].recipe.totalNutrients.VITK1.quantity+' '+data.hits[i].recipe.totalNutrients.VITK1.unit;
var li9 = createHTMLelement('li','list-group-item');
li9.innerHTML='Vitamin E : '+data.hits[i].recipe.totalNutrients.TOCPHA.quantity+' '+data.hits[i].recipe.totalNutrients.TOCPHA.unit;

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary");
button.setAttribute("data-toggle", "modal");
button.setAttribute("data-target", "#exampleModal"+i);
button.innerText = "Ingredients";

var modal = document.createElement("div");
modal.setAttribute("class","modal fade");
modal.setAttribute("id","exampleModal"+i);
modal.setAttribute("tabindex","-1");
modal.setAttribute("aria-labelledby","exampleModalLabel");
modal.setAttribute("aria-hidden","true");

var mod_dialog = createHTMLelement('div','modal-dialog modal-lg');
var mod_cont = createHTMLelement('div','modal-content');
var mod_head = createHTMLelement('div','modal-header');
var mod_title = createHTMLelement('h5','','exampleModalLabel');

mod_title.innerText = "Ingredients List";

var mod_closebtn = document.createElement("button");
mod_closebtn.setAttribute("type","button");
mod_closebtn.setAttribute("class","close");
mod_closebtn.setAttribute("data-dismiss","modal");
//mod_closebtn.setAttribute("aria-label","Close");
//mod_closebtn.innerHTML=`<span aria-hidden="true">&times;</span>`;

var mod_data = createHTMLelement("div","modal-body");
mod_data.innerHTML = '<ul>' + data.hits[i].recipe.ingredientLines.map(function (element) {
	return '<li>' + element + '</li>';
}).join('') + '</ul>'; 
//  +'Recipe : '+data.hits[i].recipe.url;
//var s = (data.hits[i].recipe.ingredientLines).forEach(element => {
 //   console.log(element)
//});

var mod_foot = createHTMLelement("div","modal-footer");
mod_foot.innerHTML =`<input class="btn btn-primary" data-dismiss="modal" value="close">`;


mod_head.append(mod_title,mod_closebtn);
mod_cont.append(mod_head,mod_data,mod_foot);
mod_dialog.append(mod_cont);
modal.append(mod_dialog);

var li10 = createHTMLelement('li','list-group-item');
li10.innerHTML='Source : '+data.hits[i].recipe.source;

var li11 = createHTMLelement('li','list-group-item');
li11.innerHTML=`<a href="${data.hits[i].recipe.url}">Recipe Link</a>`;






ul_main.append(li2,li1,li3,li4,li5,li6,li7,li9,li8,button,modal,li11,li10);
cardbody.append(ul_main);
column.append(image,title,cardbody);
mainrow.append(column);
//maindiv.append(mainrow);
container.append(mainrow);
document.body.append(container);



}
}
