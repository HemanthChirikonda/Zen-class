let container= document.createElement('div');
container.setAttribute('class', 'container bg-info border rounded');
let firstRow= document.createElement('div');
firstRow.setAttribute('class','row ');
let firstCol4 = document.createElement('div');
firstCol4.setAttribute('class',    'col-8 page  m-5  border');
let labledob= document.createElement('label');
labledob.setAttribute('for', 'dob');
labledob.innerText='  Date of birth';
firstCol4.appendChild(labledob);
let dobInput = document.createElement('input');
dobInput.setAttribute('name','dob');

dobInput.setAttribute('type', 'date');
dobInput.setAttribute('id', 'dobDate');
dobInput.setAttribute('class','m-4')
firstCol4.appendChild(dobInput);

let lableToday= document.createElement('label');
lableToday.setAttribute('for', 'todayInput');
lableToday.innerText=' Present Date';
firstCol4.appendChild(lableToday);
let todayInput = document.createElement('input');
todayInput.setAttribute('name','todayInput');
todayInput.setAttribute('type', 'date');
todayInput.valueAsDate= new Date();
todayInput.setAttribute('id', 'todayDate');
todayInput.setAttribute('class','m-4')
firstCol4.appendChild(todayInput);
let buttton= document.createElement('button');
buttton.setAttribute('class','btn btn-primary  m-4 ml-5  bs4 btn-lg');
buttton.innerText= 'Get the age'
buttton.setAttribute('onclick','callf()');
firstCol4.appendChild(buttton);
firstRow.appendChild(firstCol4);
let secondCol4 = document.createElement('div');
secondCol4.setAttribute('class','col-6  m-5 border output para');
let SEcColRow = document.createElement('div');
SEcColRow.setAttribute('class','row');
let p1 = document.createElement('p');
p1.setAttribute('class','col-12');
p1.setAttribute('id','p1');
SEcColRow.appendChild(p1);
let p2 = document.createElement('p');
p2.setAttribute('class','col-12');
p2.setAttribute('id','p2');
SEcColRow.appendChild(p2);
let p3 = document.createElement('p');
p3.setAttribute('class','col-12');
p3.setAttribute('id','p3');
SEcColRow.appendChild(p3);
let p4 = document.createElement('p');
p4.setAttribute('class','col-12');
p4.setAttribute('id','p4');
SEcColRow.appendChild(p4);
let p5 = document.createElement('p');
p5.setAttribute('class','col-12');
p5.setAttribute('id','p5');
SEcColRow.appendChild(p5);
let p6 = document.createElement('p');
p6.setAttribute('class','col-12');
p6.setAttribute('id','p6');
SEcColRow.appendChild(p6);
secondCol4.appendChild(SEcColRow);
firstRow.appendChild(secondCol4);


container.appendChild(firstRow);
document.body.appendChild(container)

function callf(){
    let dob = document.getElementById('dobDate');
    let today= document.getElementById('todayDate');
if(dobInput.value< todayInput.value){
    var diff = new Date(today.value) - new Date(dob.value);
}else {
    alert('Please select Right date')
}


let milliSeconds=0;
if( diff >0){
 milliSeconds = diff;
 
document.getElementById('p1').innerText ='(Or) '+'     '+ Math.floor(milliSeconds/(1000*3600*24*365.25))+'  Years';


document.getElementById('p2').innerText='(Or) '+'     '+ Math.floor(milliSeconds/(1000*3600*24*365.25/12)) +'   Months';

document.getElementById('p3').innerText= '(Or) '+'     '+Math.floor(milliSeconds/(1000*3600*24))+'  Days';


document.getElementById('p4').innerText='(Or) '+'     ' +Math.floor(milliSeconds/(1000*3600)) + '  Hours';


document.getElementById('p5').innerText='(Or) '+'     '+ Math.floor(milliSeconds/1000) + ' Seconds';

document.getElementById('p6').innerText='(Or) '+'     '+ Math.floor(milliSeconds) + ' MilliSeconds';

}else {
    alert('Plese select the date');
}


}



