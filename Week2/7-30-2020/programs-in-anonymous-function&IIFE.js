let arry=[];
for(let i=0; i<100; i++){
	arry[i]=i+1;
}
console.log(arry);
let oddArry= (function(arry){ return arry.filter(a=> a%2!==0 );})(arry);
console.log(oddArry);     // IIFE

function even(arry){ return arry.filter(a=> a%2===0 );}
 let evenArry =even(arry);
 console.log(evenArry);    ///anonymous function 
  

let sumALLnumbers = (function(arry){ let sum=0;for(i in arry){ sum+=arry[i];} return sum;})(arry);
console.log(sumALLnumbers);
function Prime (arry){
	let newArry=[];
	for(i in arry){
		let flag = false;
		if(arry[i]>2){
		for(let j=2; j< arry[i];j++){
			if(arry[i]%j===0){
				flag= true;
			}
		}
		if(!flag){
			newArry.push(arry[i]);
		}
	}

	}
return newArry;
}
let primeNumbersArry= Prime(arry);  ///anonymous function 

console.log(primeNumbersArry);
let name = ['guvi',]
function palindromes(arry){
 let newarry=[];
	for(i in arry){
		var re = /[\W_]/g;
		if(typeof(arry[i]) === 'string'){
			var lowRegStr = arry[i].toLowerCase().replace(re, '');
			var reverseStr = lowRegStr.split('').reverse().join(''); 
		 if(reverseStr === lowRegStr){
		 	newarry.push(arry[i]);
		 }
		}
}
}
let palindromesArry= palindromes(arry);
console.log(palindromesArry);


function meadin(arry){
let total= arry.reduce((total, currentval)=> (total+currentval),0);
console.log(total);
console.log(arry.length)
return total/arry.length;

}

let meadinArry = [meadin(arry), meadin(evenArry), meadin(oddArry)];
console.log(meadinArry);

arry.push(11);
arry.push(12);
arry.push(15);
function removeDuplicate (arry){
for ( let i=0; i<=arry.length; i++){
	let flag = false;
	for( let j=0; j<=arry.length; j++){
		if(arry[i]===arry[j]){
			flag = true;
			arry.splice(j,1);
			
		}
	}

}
return arry;
}


let arryWithoutDuplicate = removeDuplicate(arry);
console.log(JSON.stringify(arryWithoutDuplicate));


function rotatedArry(keys, arry){
	let newArry=[];
	for(let i=0; i<keys; i++){
newArry.push(arry[i]);
	}
	return newArry;
}

let RotatedkeysArry= [rotatedArry(2,arry), rotatedArry(5,arry), rotatedArry(9,arry)];
console.log(RotatedkeysArry);