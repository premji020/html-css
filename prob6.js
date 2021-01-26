var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr)
{
    var tranformEmployeeList = [];
for(var i=0;i<arr.length;i++)
{
    var newObject = {};
for(var j=0;j<arr[i].length;j++)
{
    var key = arr[i][j][0];
var value = arr[i][j][1];
newObject[key] = value;
}
tranformEmployeeList.push(newObject)
}
return tranformEmployeeList;
    
}
console.log(transformEmployeeData(arr));