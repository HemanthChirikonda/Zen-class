class tv{
	constructor (Brand,price,inches,OnOffStatus,channel=1,volume=50,maxChannels= 50){
		this.Brand=Brand;
		this.channel=channel;
		this.price=price;
		this.inches= inches;
		this.OnOffStatus= OnOffStatus;
		this.volume=volume;
		this.maxChannels= maxChannels;
	}
get status(){
	return '"'+this.Brand+' '+'at channel :'+this.channel+' volume :'+this.volume+'"';

}
set Volume(setvalue){
	if(0<setvalue && setvalue<100){
		this.volume= setvalue;
	}
	}
set Channel (setvalue){
	if(setvalue<this.maxChannels){
		this.channel= setvalue;

	}
}
reset (setvalue1=1, setvalue2=50){
	this.volume=setvalue2;
	this.channel= setvalue1;

	
	}

}


let parasonic = new tv ('parasonic', 25000, 25, 'On');
console.log(parasonic.status)
parasonic.Volume=75;
parasonic.Channel=5;
console.log(parasonic);
console.log(parasonic.status);
parasonic.reset();
parasonic.Volume=125;
console.log(parasonic);
console.log(parasonic.status)


class LED extends tv{
	constructor(Brand,screenThickness, energyUsage, lifeSpan, refreshRate, ViewingAngle,backlight= 'NA', displayDetails,){
		super(Brand);
		this.screenThickness= screenThickness;
		this.energyUsage= energyUsage;
		this.lifeSpan=lifeSpan;
		this.refreshRate= refreshRate;
		this.ViewingAngle= ViewingAngle;
		this.backlight=backlight;
		this.displayDetails= displayDetails;
	}
}

class Plasma extends LED{
	constructor(){
		super();
	}
}

let samsung= new Plasma('samsung');
console.log(samsung);

