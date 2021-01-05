 var table = document.createElement('table');
 table.setAttribute('id','table');
 table.setAttribute('class','table table-dark');
 document.getElementById('maintable').appendChild(table)
 
 var thead = document.createElement('thead');
 table.appendChild(thead)
 
 var tablRow = document.createElement('tr');
 table.appendChild(tablRow)
 
 let head = ["First Name","Last Name","Address","Pincode","State","Country","Gender","Food"]
 for (i=0;i<head.length;i++){
     let th = document.createElement('th')
     th.innerHTML= head[i];
     tablRow.appendChild(th)
 }
 
 var tbody = document.createElement("tbody");
 tbody.setAttribute('id','tdata');
 table.appendChild(tbody)

 
 function radios(){
 let gender = document.getElementsByName("gridRadios")
    let genderValue;
    for(let k=0;k<gender.length;k++){
        if(gender[k].checked){
            genderValue = gender[k].value
        }
    }
    return genderValue;
}



function foodfn(){
let food = document.getElementsByName("food")
let foodList = []
let foodCount = 0;

for(let j=0;j<food.length;j++){
    if(food[j].checked){
        foodList.push(food[j].value);
        foodCount++
    }
}
if(foodList.length>=2){
    result = foodList.join(", ")
}else{
    result = alert("Choose atleast 2 options out of 5 in food")
}
return foodList
}


 let arr = []
 function addData(){
   var x =  document.getElementById("validationDefault04").value;
   var msg = " ";
   var flag=0;
 
     
        if(document.getElementById("validationDefault01").value== "" || !isNaN(document.getElementById("validationDefault01").value)){
            msg = msg+" First_name"
            flag++;
        }
      
        if(document.getElementById("validationDefault02").value== ""){
            msg = msg+" Last_name"
            flag++;
        }
         
        if(document.getElementById("validationDefault03").value== ""){
            msg = msg+" addr"
            flag++;
        }
       
         if((x== "") || (isNaN(x) || x < 1 || x > 1000000)){
            msg = msg+" pincode"
            flag++;
        }
      
        if(document.getElementById("validationDefault05").value== ""){
            msg = msg+" state"
            flag++;
        }
       
        if(document.getElementById("validationDefault06").value== ""){
            msg = msg+" country"
            flag++;
        }
        

        if(flag>0){
        alert( "error in "+ msg);
        }
     
    
     else{
     
     let data = {
         fName:document.getElementById("validationDefault01").value,
         lName:document.getElementById("validationDefault02").value,
         address:document.getElementById("validationDefault03").value,
         pincode:document.getElementById("validationDefault04").value,
         state:document.getElementById("validationDefault05").value,
         country:document.getElementById("validationDefault06").value,
         gender:radios(),
         food:foodfn()
     }
     
     arr.push(data)
     loadTable(arr)
    }
 }
 
 function loadTable(array){
     
    var temp = "";
    array.forEach(element => {
        temp += `
        <tr>
         <td>${element.fName}</td>
         <td>${element.lName}</td>
         <td>${element.address}</td>
         <td>${element.pincode}</td>
         <td>${element.state}</td>
         <td>${element.country}</td>
         <td>${element.gender}</td>
         <td>${element.food}</td>
         </tr>
        `
    });
 
    document.getElementById('tdata').innerHTML = temp;
         
 }
 