let main= document.createElement('form');
main.setAttribute('class','main');
main.setAttribute('action','index2.html')
main.setAttribute('onSubmit',' return checkForm()')


let firstName= document.createElement('label');
firstName.setAttribute('for','FirstName');
firstName.innerText='First Name '
main.appendChild(firstName)
let firstNameInput= document.createElement('input');
 firstNameInput.setAttribute('id','firstName')
 firstNameInput.Type= 'Text';
 firstNameInput.name= 'FirstName';
 firstNameInput.placeholder= 'First Name';
 main.appendChild(firstNameInput);
 let br =document.createElement('br');
main.append(br);
 let LastName= document.createElement('label');
 LastName.setAttribute('for','LastName');
 LastName.innerText='Last Name'
 main.appendChild(LastName)
 let LastNameInput= document.createElement('input');
 LastNameInput.setAttribute('id','lastName')
 LastNameInput.Type= 'Text';
 LastNameInput.name= 'LastName';
 LastNameInput.placeholder= 'Last Name';
 main.appendChild(LastNameInput);

 let br2 =document.createElement('br');
main.append(br2);






 let address= document.createElement('label');
 address.setAttribute('for','address');
 address.innerText='Address'
 main.appendChild(address)
 let addressInput= document.createElement('input');
addressInput.id='Address'
 addressInput.Type= 'Text';
 addressInput.name= 'address';
 addressInput.placeholder= 'Address';
 main.appendChild(addressInput);


 let br3 =document.createElement('br');
main.append(br3);


 let pincode= document.createElement('label');
 pincode.setAttribute('for','pincode');
 pincode.innerText='Pincode'
 main.appendChild(pincode)
 let pincodeInput= document.createElement('input');
 pincodeInput.id='Pincode'
 pincodeInput.Type= 'text';
 pincodeInput.name= 'pincode';
 pincodeInput.placeholder= 'Pincode';
main.appendChild(pincodeInput);


let br4 =document.createElement('br');
main.append(br4);


let state= document.createElement('label');
state.setAttribute('for','state');
state.innerText='State'
main.appendChild(state)

 let stateInput= document.createElement('input');
 stateInput.id='State'
 stateInput.Type= 'Text';
 stateInput.name= 'state';
 stateInput.placeholder= 'State';
 main.appendChild(stateInput);

 let br5 =document.createElement('br');
main.append(br5);

 let country= document.createElement('label');
 country.setAttribute('for','country');
 country.innerText='Country'
 main.appendChild(country)

 let countryInput= document.createElement('input');
 countryInput.id='Country';
 countryInput.Type= 'Text';
 countryInput.name= 'country';
 countryInput.placeholder= 'Country';
 main.appendChild(countryInput);

 let br6 =document.createElement('br');
main.append(br6);


let gender= document.createElement('label');
gender.setAttribute('for','gender');
gender.id='Genderid'
gender.innerText='Gender'
main.appendChild(gender);


let maleInput= document.createElement('input');
maleInput.name='gender';
maleInput.id='male';
maleInput.value='Male';
maleInput.type='radio';
main.appendChild(maleInput);
let maleLabel= document.createElement('label');
maleLabel.setAttribute('for','gender');
maleLabel.innerText='Male'
main.appendChild(maleLabel);
let br12 =document.createElement('br');
main.append(br12);
let femaleInput= document.createElement('input');
femaleInput.name='gender';
femaleInput.id='female';
femaleInput.value='Female';
femaleInput.type='radio';
main.appendChild(femaleInput);
let femaleLabel= document.createElement('label');
femaleLabel.setAttribute('for','gender');
femaleLabel.innerText='Female'
main.appendChild(femaleLabel);



let br13 =document.createElement('br');
main.append(br13);

let choiceOfFood= document.createElement('label');
choiceOfFood.setAttribute('for','choiceOfFood');
choiceOfFood.innerText='Choice Of Food'
main.appendChild(choiceOfFood);
let fooditem1Input= document.createElement('input');
fooditem1Input.name='choiceOfFood';
fooditem1Input.id='fooditem1Input';
fooditem1Input.value='fooditem1';
fooditem1Input.type='checkbox';
main.appendChild(fooditem1Input);
let fooditem1Label= document.createElement('label');
fooditem1Label.setAttribute('for','choiceOfFood');
fooditem1Label.innerText='fooditem1'
main.appendChild(fooditem1Label);

let br7 =document.createElement('br');
main.append(br7);

let fooditem2Input= document.createElement('input');
fooditem2Input.name='choiceOfFood';
fooditem2Input.id='fooditem2Input';
fooditem2Input.value='fooditem2';
fooditem2Input.type='checkbox';
main.appendChild(fooditem2Input);
let fooditem2Label= document.createElement('label');
fooditem2Label.setAttribute('for','choiceOfFood');
fooditem2Label.innerText='fooditem2'
main.appendChild(fooditem2Label);


let br8 =document.createElement('br');
main.append(br8);
let fooditem3Input= document.createElement('input');
fooditem3Input.name='choiceOfFood';
fooditem3Input.id='fooditem3Input';
fooditem3Input.value='fooditem3';
fooditem3Input.type='checkbox';
main.appendChild(fooditem3Input);
let fooditem3Label= document.createElement('label');
fooditem3Label.setAttribute('for','choiceOfFood');
fooditem3Label.innerText='fooditem3'
main.appendChild(fooditem3Label);


let br9 =document.createElement('br');
main.append(br9);

let fooditem4Input= document.createElement('input');
fooditem4Input.name='choiceOfFood';
fooditem4Input.id='fooditem4Input';
fooditem4Input.value='fooditem4';
fooditem4Input.type='checkbox';
main.appendChild(fooditem4Input);
let fooditem4Label= document.createElement('label');
fooditem4Label.setAttribute('for','choiceOfFood');
fooditem4Label.innerText='fooditem4'
main.appendChild(fooditem4Label);




let br10 =document.createElement('br');
main.append(br10);

let fooditem5Input= document.createElement('input');
fooditem5Input.name='choiceOfFood';
fooditem5Input.id='fooditem5Input';
fooditem5Input.value='fooditem5';
fooditem5Input.type='checkbox';
main.appendChild(fooditem5Input);
let fooditem5Label= document.createElement('label');
fooditem5Label.setAttribute('for','choiceOfFood');
fooditem5Label.innerText='fooditem5'
main.appendChild(fooditem5Label);



let br11 =document.createElement('br');
main.append(br11);





let submitBtn= document.createElement('input');
submitBtn.type='submit';
submitBtn.setAttribute('id','submit-b');
submitBtn.setAttribute('onclick','checkForm()')
main.appendChild(submitBtn);

document.body.appendChild(main);









//----------------------------------------------------------------------------------------------//

function checkForm(){
let checkedItems =0;
    var ele = document.getElementsByName('choiceOfFood'); 
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            checkedItems++ 
        }
       
    } 


    if(checkedItems>=2){
       
        return true;
        
    }else{
        alert('please select two Food Items')
        return false;
    }
    
}






submitBtn.addEventListener('click',passvalues);

  
  
  
function passvalues(e){
 var First_Name= document.getElementById('firstName').value;
    localStorage.setItem('First_Name', First_Name);
var Last_Name= document.getElementById('lastName').value;
    localStorage.setItem('Last_Name', Last_Name);
var Address= document.getElementById('Address').value;
    localStorage.setItem('Address', Address);
var Pincode= document.getElementById('Pincode').value;
    localStorage.setItem('Pincode',   Pincode); 
var state= document.getElementById('State').value;
    localStorage.setItem('state', state);
var Country= document.getElementById('Country').value;
    localStorage.setItem('Country',Country);
    (function displayRadioValue() { 
        var ele = document.getElementsByName('gender'); 
          
        for(i = 0; i < ele.length; i++) { 
            if(ele[i].checked) 
           var Gender=ele[i].value; 
           localStorage.setItem('Gender',Gender)
        } 
    })();

     (function checkbox(){
        var FoodArry=[];
        var ele = document.getElementsByName('choiceOfFood'); 
        for(i = 0; i < ele.length; i++) { 
            if(ele[i].checked) 
            FoodArry.push(ele[i].value); 
           localStorage.setItem('FoodArry',FoodArry)
        } 
     })();




}                                                  


















