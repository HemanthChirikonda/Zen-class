
var obj = {"name" : 'RajiniKanth', "age" : 33, "hasPets" : false};
function printAllValues(object) {
	let arry=[];
	arry.push(object.name);
	arry.push(object.age);
	arry.push(object.hasPets);
	console.log(arry);
 
}
printAllValues(obj);   //task 1

function printAllKeys(object) {
	let arry=Object.keys(object);
	console.log(arry);
 
}
printAllKeys(obj);   // task 2