let main = document.createElement('div');
main.classList.add('container');
let header =document.createElement('header');
header.classList.add('display-3');
header.id='title';
header.innerText= 'All COUNTRIES DATA';
main.append(header);
let row = document.createElement('div');
row.classList.add('row','bg-light');

main.append(row);
document.body.append(main);



function request(url) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open("GET",url);
       
        req.onload = () => {
            if (req.status >= 200 && req.status < 300) {
                resolve(req.response);
            } else {
                reject(req.statusText);
            }
        };
        req.onerror = () => reject(req.statusText);
        req.send();
    });
};


request( "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    .then(data => {
       data= JSON.parse(data);
       console.log(data);

       data.forEach(element => {

        let col6 = document.createElement('div');
        col6.classList.add('col-6')
      let card = document.createElement('div');
       card.classList.add('card','m-1');
       
       let img =document.createElement('img');
       img.classList.add("card-img-top" ,'m-1','border');
       img.style.width= 5+ 'em';
       img.src=element.flag;
       card.append(img);
       let cardBody = document.createElement('div');
       cardBody.classList.add("card-body");
       let h5 = document.createElement('h5');
       h5.classList.add("card-title");
       h5.innerHTML=element.name;
       cardBody.append(h5);
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


      card.append(cardBody);
col6.append(card);
      row.append(col6);
       });



    })
    .catch(error => {
        console.log(error);
    });
   





