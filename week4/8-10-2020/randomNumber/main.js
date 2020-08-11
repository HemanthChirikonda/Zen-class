let mainpage = document.createElement('div');
mainpage.setAttribute('class','page');
let title= document.createElement ('h1');
title.innerText='RANDOM 8 DIGIT NUMBER';
mainpage.appendChild(title);
let screen= document.createElement('div');
screen.setAttribute('class','screen'); 
let output= document.createElement('p');
output.setAttribute('id','output');
screen.append(output);
mainpage.appendChild(screen);
let refreshbutton= document.createElement('button');
refreshbutton.setAttribute('class', 'button');
refreshbutton.setAttribute('onclick','random8DigitsNumber()');
refreshbutton.innerText='Press'
mainpage.appendChild(refreshbutton);
document.body.append(mainpage);



function random8DigitsNumber(){
let flag1=true;
while(flag1){
    let flag= true;
 let unitNumber=Math.random()
unitNumber= Math.floor(unitNumber*100000000);

let str= JSON.stringify(unitNumber);
console.log(str)
let digitsArry= str.split('');
for (let index = 0; index < digitsArry.length; index++) {
    let repet=0;
    for (let chkindex = index+1; chkindex < digitsArry.length; chkindex++) {
        if(digitsArry[index]===digitsArry[chkindex]){
         repet++
        }
        
    }
   if(repet>0){
       flag=false;
   }
}

if(flag && digitsArry.length===8){
  //console.log(digitsArry.join(''));
   let a= document.getElementById('output');
   a.innerText=digitsArry.join('');

    flag1= false;
}

}
}