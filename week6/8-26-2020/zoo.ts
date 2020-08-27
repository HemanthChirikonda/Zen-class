class tv{
    chennels:chennel[]=[];
    brand:string;
    volume:number;
    chennelId:number;
    Maxchennels:number;
    constructor(brand:string,volume=50,chennelId=0,maxchennels=50){
        this.brand=brand;
        for (let index = 0; index < 50; index++) {
            this.chennels.push(new chennel("https://feeds.intoday.in/livetv/?id=livetv-at&amp;aud_togle=1&amp;autostart=1&amp;t_src=live_tv_page&amp;t_med=web&amp;utm_medium=web&amp;utm_source=live_tv_page&amp;v=1.3&amp;noads=0?autoplay=1",index))
         
        }
        this.volume=volume;
        this.chennelId=chennelId;
        this.Maxchennels=maxchennels;
        this.IncChennel();
    }
    IncChennel(){
        if(this.chennelId<=this.Maxchennels && this.chennelId>=0){
            this.chennelId++
            this.chennels.forEach(element => {
                if(element.Id===this.chennelId){
                    console.log(element.Id)
                  let tvDiv= <HTMLElement>document.getElementById('tv');
                  tvDiv.innerHTML = "";
                    let displaychennel = element.chennelData();
                 tvDiv.append( displaychennel);
                }
            });
        }
         }
         decChennel(){
            if(this.chennelId<=this.Maxchennels && this.chennelId>1){
                this.chennelId--;
                this.chennels.forEach(element => {
                    if(element.Id===this.chennelId){
                        console.log(element.Id)
                      let tvDiv= <HTMLElement>document.getElementById('tv');
                      tvDiv.innerHTML = "";
                        let displaychennel = element.chennelData();
                     tvDiv.append( displaychennel);
                    }
                });
            }
             }
         callAllchennels(){
            return this.chennels;
        }
        incVolume(){
            if( this.volume<=100 && this.volume>=0){
               this.volume++;
               document.querySelectorAll('video').forEach(element => {
                element.volume= this.volume;
                   
               });
            } else{
                alert("Volume recahed Max")
            }
            
        }
        decVolume(){
                  if( this.volume<=100 && this.volume>=0){
               this.volume--;
               document.querySelectorAll('video').forEach(element => {
                element.volume= this.volume;
                   });
            } else {
                alert("Volume recahed 0")
            }
            
        }
        reset(){
            this.volume=50;
            this.chennelId=0;
            this.IncChennel();
        }
        status(){
          let tvstatus= <HTMLDivElement> document.getElementById("displaystatus");
          tvstatus.innerHTML=this.brand+"   "+"at    "+'chennel   '+this.chennelId+","+"    volume"+this.volume;
          console.log('status')
        }
}

class chennel{
        url:String;
        Id:Number;
       
        constructor(url:String,Id:Number){
            this.url=url;
            this.Id=Id;
           
        }
  chennelData(){
    let VideoDiv = document.createElement('div');
    VideoDiv.classList.add('row');
    let iframe = document.createElement('iframe');
    iframe.src = '' + this.url + '';
    iframe.id = '' + this.Id + '';
    iframe.style.width = 100 + "%";
    iframe.style.height = 500 + "px";
    iframe.setAttribute('autoplay','true')
    VideoDiv.append(iframe);
    return VideoDiv;
  }
        
}




let Led =new tv('Parasonic');

document.getElementById('chnelInc')?.addEventListener('click',()=>{
   Led.IncChennel();
;})

document.getElementById('chnelDnc')?.addEventListener('click',()=>{
   Led.decChennel();
;})

document.getElementById('volInc')?.addEventListener('click',()=>{
   
    Led.incVolume();
;})
document.getElementById('volDnc')?.addEventListener('click',()=>{
   
    Led.decVolume(); 
;})
document.getElementById('reset')?.addEventListener('click',()=>{
   
    Led.reset(); 
;})
document.getElementById('status')?.addEventListener('click',()=>{
   
    Led.status(); 
;})



class LED extends tv{
    screenThickness:number;
energyUsage:number;
	lifeSpan:number;
	refreshRate:number;
	ViewingAngle:number;
	backlight:string;
	displayDetails:string;

constructor(Brand:string,screenThickness:number, energyUsage:number, lifeSpan:number, refreshRate:number, ViewingAngle:number,backlight= 'NA', displayDetails:string){
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
	constructor(Brand:string,screenThickness:number, energyUsage:number, lifeSpan:number, refreshRate:number, ViewingAngle:number,backlight= 'NA', displayDetails:string,){
		super(Brand,screenThickness, energyUsage, lifeSpan, refreshRate, ViewingAngle,backlight= 'NA', displayDetails);
	}