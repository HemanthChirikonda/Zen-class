
var movieArray=[];
class movie{


	constructor(title, Studio, ratings='PG'){
				this.title=title;
				this.Studio= Studio;
				this.ratings=ratings;
                  this.arry= this;

		}
		get arry(){
		
			return movieArray;
		}
set arry(value){
		movieArray.push(this)
}
}

let  Kushi = new movie('Kushi', 'GUVI');
let Police= new movie ('Police', 'GUVI');
let nani = new movie ('nani', 'Zen', 3.2);
let Robot = new movie('Robot', 'Npn',4.2);

console.log(movieArray);


let moviesWithRatingPG = movieArray.filter(a=> a.ratings==='PG');

console.log(moviesWithRatingPG);






