var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function fromListToObject(arr) {
 var newObject = {};
 for (i in arr){
 newObject[arr[i][0]] = arr[i][1];
 }
 
 return newObject;
}


function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 for(i in arr){
tranformEmployeeList.push(fromListToObject(arr[i]));

}
 
 return tranformEmployeeList;
}
let objArry= transformEmployeeData(arr);
console.log(objArry);