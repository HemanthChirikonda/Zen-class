let main = document.createElement('div');
main.classList.add('container');
let header =document.createElement('header');
header.classList.add('display-4');
header.id='title';
header.innerText= 'All COUNTRIES COVID-19 DATA';
main.append(header);
let row = document.createElement('div');
row.classList.add('row','bg-light');

main.append(row);
document.body.append(main);

async function details(slug){
    let stringurl = 'https://api.covid19api.com/country/'+ slug+'?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z';
 try {
     let data = await fetch(stringurl);
     let resultdata = await data.json();
     alert( JSON.stringify(resultdata));
     
 } catch (error) {
     alert(error);
 }

}




async function foo(){
   try {
    let country = await fetch('https://api.covid19api.com/summary');
    let result =await country.json();
   result.Countries.forEach(element => {
    let col6 = document.createElement('div');
    col6.classList.add('col-6')
  let card = document.createElement('div');
   card.classList.add('card','m-1');
   
   let cardBody = document.createElement('div');
       cardBody.classList.add("card-body");
       let h5 = document.createElement('h5');
       h5.classList.add("card-title");
       h5.innerHTML=element.Country
       cardBody.append(h5);
       let ul = document.createElement('ul');
       ul.classList.add("card-text");
       
       let li1 = document.createElement('li');
       li1.classList.add("card-text");
       li1.innerHTML= 'CountryCode  : ' +  element.CountryCode;
       ul.append(li1)
       let li2 = document.createElement('li');
       li2.classList.add("card-text");
       li2.innerHTML= 'Slug  : ' +  element.Slug;
       ul.append(li2);
       let li3 = document.createElement('li');
       li3.classList.add("card-text");
       li3.innerHTML= 'NewConfirmed  : ' +  element.NewConfirmed;
       ul.append(li3);
       let li4 = document.createElement('li');
       li4.classList.add("card-text");
       li4.innerHTML= 'TotalConfirmed  : ' +  element.TotalConfirmed;
       ul.append(li4);
       let li5 = document.createElement('li');
       li5.classList.add("card-text");
       li5.innerHTML= 'NewDeaths  : ' +  element.NewDeaths;
       ul.append(li5);
       let li6 = document.createElement('li');
       li6.classList.add("card-text");
       li6.innerHTML= 'TotalDeaths  : ' +  element.TotalDeaths;
       ul.append(li6);
       let li7 = document.createElement('li');
       li7.classList.add("card-text");
       li7.innerHTML= 'NewRecovered  : ' +  element.NewRecovered;
       ul.append(li7);
       let li8 = document.createElement('li');
       li8.classList.add("card-text");
       li8.innerHTML= 'TotalRecovered  : ' +  element.TotalRecovered;
       ul.append(li8);
       let li9 = document.createElement('li');
       li9.classList.add("card-text");
       li9.innerHTML= 'Date  : ' +  element.Date;
       ul.append(li9);
       cardBody.append(ul);
       let inputbtn = document.createElement('button');
       
       inputbtn.innerText='details'
       inputbtn.setAttribute('onclick','details("'+element.Slug+'")');
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