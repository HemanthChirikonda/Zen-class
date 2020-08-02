class calculator{
	constructor(number1, number2,type){
		this.type=type;
		this.number1= number1;
		this.number2= number2;
	}

	get Out(){
		if(this.type==='add'){
			return this.add();
		}else if(this.type==='sub'){
			return this.sub();
		}else if(this.type==='mul'){
			return this.mul();
		}
	}

add(){
	return this.number1+this.number2;
}
sub(){
	return this.number1-this.number2;
}
mul(){
	return this.number1*this.number2;
}
}
let addtion= new calculator(10,20,'sub');
console.log(addtion);
console.log(addtion.Out);