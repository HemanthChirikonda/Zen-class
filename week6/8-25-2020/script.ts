

class petshop {
   public allPets:Animal[]=[]; 
    requests:enquries[]=[];
   constructor(){
   
   }
    getallPets(){
        return this.allPets;
    }
    getavilablePets(){
        let arr=[];
      this.allPets.forEach((element:Animal) => {
            if(element.availabile =='yes'){
                 arr.push(element);
            }
        });
        return arr;
    }
    insert(animal){
       this.allPets.push(animal);
    }
    getpetsbyname(value:String){
        let arr=[];
        this.allPets.forEach((element) => {
            if(element.name===value){
                arr.push(element);
            }
        });
        return arr;
    }
    getpetsbybreed(value:String){
        let arr=[];
        this.allPets.forEach((element) => {
            if(element.breed===value){
                arr.push(element);
            }
        });
        return arr;
    }

    getpetsbyPrice(value:Number){
        let arr=[];
        this.allPets.forEach((element) => {
            if(element.price===value){
                arr.push(element);
            }
        });
        return arr;
    }

    getavilablePetsCount(array:Animal[]){
        let arr={
            'Dogs':0,
            'Cats':0,
            'Lizards':0
        }
      array.forEach((element) => {
            if(element.availabile =='yes'){
                 if(element.type==='Dog'){
                     arr.Dogs++;
                 }else if(element.type==='Cat'){
                         arr.Cats++;
                 }else if(element.type==='Lizard'){
                     arr.Lizards++;
                 }
            }
        });
        return arr;
    }
getallRequests(){
    return this.requests;
}
 createRequestsbytype(request:enquries){
  
     this.requests.push(request);
}
createRequestsbyPrice(request:enquries){
   
   
    this.requests.push(request);
}
createRequestsbyName(request:enquries){
  
    this.requests.push(request);
}
createRequestsbybreed(request:enquries){
   
    this.requests.push(request);
    
}
getaviablepetsFor5enquries(){
 let avilPets = this.getavilablePets();
 let enqpets:Animal[]=[];
 this.requests.forEach((element)=>{
   avilPets.forEach((element1)=>{
     if( element.request=== element1[element.requestType]){
         let flag= true;
         element.requestData.push(element1)
        enqpets.forEach((element2)=>{
            if(element2===element1){
                flag=false;
            }
        })
      if(flag){
        enqpets.push(element1);
      }
     }
   })
  
 });
 return enqpets;
}

}



class enquries {
    request;
    requestType;
    requestData:Animal[]=[];
constructor(request:String|Number|Animal,requestType){
   
    this.request=request;
    this.requestType=requestType;
  }
}

abstract class availability{
    availabile;
constructor(availabile:String){
    this.availabile=availabile;
}
}

abstract class Animal extends availability{
    type;
      name;
      breed;
      price;
constructor(type:String,name,breed,availabile,price:Number){
   super(availabile);
    this.type=type;
this.name=name;
this.breed=breed;
this.price=price;
}
}






class Dog extends Animal {
    typeOfCoat:String;
    sheddingType:String;
      
    constructor(type:String,name:String,breed:String,availabile:String,price:Number,typeOfCoat:String, sheddingType:String) {
        super(type,name,breed,availabile,price);
        this.sheddingType=sheddingType;
        this.typeOfCoat= typeOfCoat;
    }

}
class Cat extends Animal {
    clawType:String;
    typeOfCoat:String;
     
    constructor(type:String, name:String,breed:String,availabile:String,price:Number,clawType:String, typeOfCoat:String) {
        super(type,name,breed,availabile,price);
        this.clawType=  clawType;
        this.typeOfCoat= typeOfCoat;
    }
}


class Lizard extends Animal {
    color:String;
    size:Number;
    weight:Number;
    temperament:String;

    constructor(type:String, name:String,breed:String,color:String,availabile:String,price:Number,size:Number,weight:Number,temperament:String) {
        super(type,name,breed,availabile,price);
        this.color=  color;
        this.size=size;
        this.weight=weight; 
        this.temperament= temperament;
    }
}

let petshop1= new petshop();
for (let index = 0; index < 3; index++) {
    petshop1.insert(new Dog('Dog','dog'+index+'','Samoyed','yes', 1200,'DOUBLE COAT','Low')); 
    if(index%2===0){
        petshop1.insert(new Lizard('Lizard','lizard'+index+'','sa','yellow','yes',1500,12,35,'high')); 
        petshop1.insert(new Cat('Cat','cat'+index+'','Sam','yes', 1100,'DOUBLE COAT','Low')); 
    }else{
        petshop1.insert(new Lizard('Lizard','lizard'+index+'','sa','yellow','yes',1200,12,35,'high')); 
        petshop1.insert(new Cat('Cat','cat'+index+'','Sam','no', 1200,'DOUBLE COAT','Low'));
    }
   
}

petshop1.insert(new Lizard('Lizard','lizard10','sa','yellow','no',1500,12,35,'high'));

console.log('All pets  :',petshop1.getallPets());

console.log('All Avilable pets'+'  ', petshop1.getavilablePets());
console.log('Avilable pets Count'+'  ',petshop1.getavilablePetsCount(petshop1.getavilablePets()));


petshop1.createRequestsbytype(new enquries('Dog','type'));
petshop1.createRequestsbyName(new enquries('dog2','name'));
petshop1.createRequestsbybreed(new enquries('Samoyed','breed'));
petshop1.createRequestsbyPrice(new enquries(1200,'price'));
petshop1.createRequestsbyName(new enquries('cat2','name'));
console.log('All Enquries',petshop1.getallRequests())
console.log('Avilable pets as per Enquries'+'  ',petshop1.getaviablepetsFor5enquries());

console.log('Avilable pets Count as per Enquries '+'  ',petshop1.getavilablePetsCount(petshop1.getaviablepetsFor5enquries()));