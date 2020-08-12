let maintable = document.createElement('table');
maintable.setAttribute('id', 'maintable');
let row1= document.createElement('tr');
row1.setAttribute('class','row');
let row1Label =document.createElement('td');
row1Label.setAttribute('id','row1Label');
row1Label.innerText='First Name'
row1.appendChild(row1Label);
let row1Input =document.createElement('td');
row1Input.setAttribute('id','row1Input');
row1Input.innerText=  localStorage.getItem('First_Name');
row1.appendChild(row1Input);
maintable.appendChild(row1);


let row2= document.createElement('tr');
row2.setAttribute('class','row');
let row2Label =document.createElement('td');
row2Label.setAttribute('id','row2Label');
row2Label.innerText= 'Last Name';
row2.appendChild(row2Label);
let row2Input =document.createElement('td');
row2Input.setAttribute('id','row2Input');
row2Input.innerText=  localStorage.getItem('Last_Name');
row2.appendChild(row2Input);
maintable.appendChild(row2);


let row3= document.createElement('tr');
row3.setAttribute('class','row');
let row3Label =document.createElement('td');
row3Label.setAttribute('id','row3Label');
row3Label.innerText= 'Address';
row3.appendChild(row3Label);
let row3Input =document.createElement('td');
row3Input.setAttribute('id','row3Input');
row3Input.innerText=  localStorage.getItem('Address');
row3.appendChild(row3Input);
maintable.appendChild(row3);


let row4= document.createElement('tr');
row4.setAttribute('class','row');
let row4Label =document.createElement('td');
row4Label.setAttribute('id','row4Label');
row4Label.innerText= 'Pincode';
row4.appendChild(row4Label);
let row4Input =document.createElement('td');
row4Input.setAttribute('id','row4Input');
row4Input.innerText= localStorage.getItem('Pincode');
row4.appendChild(row4Input);
maintable.appendChild(row4);


let row5= document.createElement('tr');
row5.setAttribute('class','row');
let row5Label =document.createElement('td');
row5Label.setAttribute('id','row5Label');
row5Label.innerText= 'State';
row5.appendChild(row5Label);
let row5Input =document.createElement('td');
row5Input.setAttribute('id','row5Input');
row5Input.innerText=  localStorage.getItem('state');
row5.appendChild(row5Input);
maintable.appendChild(row5);

let row6= document.createElement('tr');
row6.setAttribute('class','row');
let row6Label =document.createElement('td');
row6Label.setAttribute('id','row6Label');
row6Label.innerText= 'Country';
row6.appendChild(row6Label);
let row6Input =document.createElement('td');
row6Input.setAttribute('id','row6Input');
row6Input.innerText= localStorage.getItem('Country');
row6.appendChild(row6Input);
maintable.appendChild(row6);

let row7= document.createElement('tr');
row7.setAttribute('class','row');
let row7Label =document.createElement('td');
row7Label.setAttribute('id','row7Label');
row7Label.innerText= 'Gender';
row7.appendChild(row7Label);
let row7Input =document.createElement('td');
row7Input.setAttribute('id','row7Input');
row7Input.innerText= localStorage.getItem('Gender');
row7.appendChild(row7Input);
maintable.appendChild(row7);

let row8= document.createElement('tr');
row8.setAttribute('class','row');
let row8Label =document.createElement('td');
row8Label.setAttribute('id','row8Label');
row8Label.innerText= 'Choice Of Food';
row8.appendChild(row8Label);
let row8Input =document.createElement('td');
row8Input.setAttribute('id','row8Input');
row8Input.innerText=  localStorage.getItem('FoodArry');
row8.appendChild(row8Input);
maintable.appendChild(row8);

document.body.append(maintable);





