  


let main = document.createElement('div');
main.classList.add('container');
let header =document.createElement('header');
header.classList.add('display-5');
header.id='title';
header.innerText= 'Music Player';
main.append(header);

let row = document.createElement('div');
row.classList.add('row','bg-light');

let input1 = document.createElement('input');
input1.classList.add('col-4','m-2');
input1.type="text";
input1.id='urlId';
input1.placeholder='URL';
row.append(input1);
let input2 = document.createElement('input');
input2.classList.add('col-4','m-2');
input2.type="text";
input2.placeholder='Name';
input2.id='urlName'
row.append(input2);
let inputbtn = document.createElement('button');
inputbtn.classList.add('col-2','m-2','btn-outline-primary','rounded');

inputbtn.id='urlName'
inputbtn.innerHTML='submit'
row.append(inputbtn);
main.append(row);
document.body.append(main);







async function gg(url) {
     let postdata=  'https://freemp3downloads.online/download?url=mnjhgf';
    let data = await fetch('https://5f3f642444212d0016feca35.mockapi.io/songs/music-player/',{
        method:"POST",
        headers: {
            content-type: application/JSON
        }
        body: JSON.stringify({
            'id':10,
            'url':{$postdata},
        })
    });
   
    console.log('ss');;

   
    
}





https://goofy-bardeen-d2e95c.netlify.app/script.js

  
gg();