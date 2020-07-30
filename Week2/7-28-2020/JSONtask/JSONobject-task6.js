var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for (i in arr){
 newObject[arr[i][0]] = arr[i][1];
 }
 
 return newObject;
}

let obj =fromListToObject(arr);
console.log(obj);