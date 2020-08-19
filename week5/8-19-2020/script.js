

//--------------------------------------------------------Dom---------------------------------------------------------------
let main = document.createElement('div');
main.classList.add('container',);
let header =document.createElement('header');
header.classList.add('display-4');
header.id='title';
header.innerText= 'All COUNTRIES DATA';
main.append(header);
let row = document.createElement('div');
row.classList.add('row','bg-dark','rounded');

main.append(row);
document.body.append(main);



//-----------------------------------------------to get the data from weather api-------------------------------------------

async function details(lat,lon){
    let stringurl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&exclude={part}&appid=d0e7e1030693508695279d2848c7fc9c';
 try {
     
     let data = await fetch(stringurl);
     let resultdata = await data.json();
     
     alert('Current Weather :  '+ JSON.stringify(resultdata.current.weather));   
 } catch (error) {
     alert(error);
 }

}


//----------------------------------------------to get the data from restcountries-------------------------------------------------

async function foo(){
   try {
    let country = await fetch('https://restcountries.eu/rest/v2/all');
    let result =await country.json();
   result.forEach(element => {
    let col6 = document.createElement('div');
    col6.classList.add('col-lg-4')
  let card = document.createElement('div');
   card.classList.add('card','m-1','bg-dark','border');
   let h5 = document.createElement('h5');
   h5.classList.add("card-title");
   h5.innerHTML=element.name;
   card.append(h5);
  
   let cardBody = document.createElement('div');
   cardBody.classList.add("card-body" ,'bg-gradient-dark'  );
   let img =document.createElement('img');
   img.classList.add("card-img-top");
   img.style.width= 90 +'%';
   img.style.height= 12 +'em';
   img.src=element.flag;
   cardBody.append(img);
   let ul = document.createElement('ul');
   ul.classList.add("card-text");
   
   let li1 = document.createElement('li');
   li1.classList.add("card-text");
   li1.innerHTML= 'Capital  : ' +  element.capital;
   ul.append(li1)
   let li2 = document.createElement('li');
   li2.classList.add("card-text");
   li2.innerHTML= 'Region  : ' +  element.region;
   ul.append(li2);
   let li3 = document.createElement('li');
   li3.classList.add("card-text");
   li3.innerHTML= 'Latlng  : ' +  element.latlng;
   ul.append(li3);
   let li4 = document.createElement('li');
   li4.classList.add("card-text");
   li4.innerText= 'Currencies  :';
   let li4_ul = document.createElement('ul');
   li4_ul.classList.add("card-text");
   
   let li4_ul_li1 = document.createElement('li');
   li4_ul_li1.classList.add("card-text");
   li4_ul_li1.innerHTML= 'Code  : ' +  element.currencies[0].code;
   li4_ul.append(li4_ul_li1);

   let li4_ul_li2 = document.createElement('li');
   li4_ul_li2.classList.add("card-text");
   li4_ul_li2.innerHTML= 'Name  : ' +  element.currencies[0].name;
   li4_ul.append(li4_ul_li2);

   let li4_ul_li3 = document.createElement('li');
   li4_ul_li3.classList.add("card-text");
   li4_ul_li3.innerHTML= 'Symbol  : ' +  element.currencies[0].symbol;
   li4_ul.append(li4_ul_li3);

   li4.append(li4_ul);
   ul.append(li4);
   let li5 = document.createElement('li');
   li5.classList.add("card-text");
   li5.innerHTML= 'Population  : ' +  element.population;
   ul.append(li5);
   cardBody.append(ul);
   let inputbtn = document.createElement('button');
   inputbtn.classList.add('btn','btn-primary')    
   inputbtn.innerText='Click for Weather';
   inputbtn.setAttribute('data-toggle','modal');
   inputbtn.setAttribute('data-target','#staticBackdrop');
   inputbtn.setAttribute('onclick','details("'+ element.latlng[0]+'","'+ element.latlng[1]+'")');
   cardBody.append(inputbtn);

  card.append(cardBody);
  col6.append(card);
  row.append(col6);
       
   });
   } catch (error) {
       row.innerHTML=error;
 }

}

foo();


//-----------------------------------------------------------************--------------------------------------------------------