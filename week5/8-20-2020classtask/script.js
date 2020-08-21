 
 let main = document.createElement('div');
 main.classList.add('container',);
 
 let row = document.createElement('div');
 row.classList.add('row','bg-dark','rounded');
 
 main.append(row);
 document.body.append(main);
 
 
 
 
 
 
 
 
 
 async function foo() {
    try {
        let data = await fetch('https://random-word-api.herokuapp.com/word?number=1');
        let result = await data.json();
         console.log(result[0]);
        let stringurl= await fetch('https://api.giphy.com/v1/gifs/search?api_key=amtYZB6qH3g49vHx0GRTuH3i6cNVtcHE&q='+result[0]+'&limit=10&offset=0&rating=g&lang=en')
        let srtingurldata = await stringurl.json();
        console.log(srtingurldata)
        if(srtingurldata.data.length !== 0){
            srtingurldata.data.forEach(element => {
                let col6 = document.createElement('div');
                col6.classList.add('col-lg-6 ','p-5')
              
                let img =document.createElement('img');
                img.classList.add("card-img-top");
                img.style.width= 20 +'em';
                
                img.src=element.images.original.url;
                
           col6.append(img);
         row.append(col6);
                
            });  
        }else{
            foo();
        }
       
    } catch (error) {
        console.error(error);
    }
      
 }
 foo();