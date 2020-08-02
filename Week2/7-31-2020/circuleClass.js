class circle {
	constructor (radius, color){
	this.color= color;
	this.radius= radius;
	
	}

get area(){
	return this.calArea();
}

calArea(){
	console.log(this);
	return this.radius*(Math.PI)*this.radius;
}


}
let greenCircle= new circle( 11 , 'Green');

console.log('greenCircle area : ',greenCircle.area);
