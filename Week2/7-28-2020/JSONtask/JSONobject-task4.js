var obj = {"name": 'ISRO', "age": 35, "role": 'Scientist'};
function convertListToObject(obj) {
 let arry=[];
 let keys = Object.keys(obj);
 for( i in keys){
 	let a =[keys[i], obj[keys[i]]];
 		arry.push(a);
 }
 console.log(arry);
}
convertListToObject(obj);  