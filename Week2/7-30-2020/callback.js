function something (a,b, c=10, d=20){

	return b[a](c,d);
}


var oprArry =[add,sub,mul];
 function  add(a,b){
 	return a+b;
 } 
function  sub(a,b){
 	return a-b;
 } 

function  mul(a,b){
 	return a*b;
 }

 let aa= something(0,oprArry);
 console.log(aa);
 let ab= something(1, oprArry, 15,10);
 console.log(ab);
  let bb= something(2, oprArry, 20,10);
 console.log(bb);