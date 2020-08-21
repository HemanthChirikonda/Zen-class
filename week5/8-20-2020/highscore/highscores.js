let container = document.body;
container.setAttribute("style","background-color:  white; display:flex; justify-content: center;")
let outer_div_end = document.createElement("div");
container.appendChild(outer_div_end);


//-----------------------------------------------------------High Scores Heading----------------------------------------//
let header = document.createElement("h1");
header.setAttribute("class","h1");
header.setAttribute("style","color:blue;  ")
header.innerText= "High Scores";
outer_div_end.appendChild(header);

let name=sessionStorage.getItem('name');
let score= sessionStorage.getItem('score');
let bodydata =document.createElement('div');
bodydata.classList.add('col-12','display-3');
bodydata.innerHTML='<span id: name> '+name+'</span> <span id: score>'+Number(score)+'</span> ';
outer_div_end.append(bodydata);



//---------------------------------------------------------------------Go Home -----------------------------------------*/
let a2 = document.createElement('a');
a2.setAttribute('href','../index.html');
let goHome = document.createElement("button");
goHome.setAttribute("class", "btn btn-outline-dark");
goHome.setAttribute("id", "goHome");
//goHome.setAttribute("onclick",``);
goHome.setAttribute("style","border-color: grey; display:flex; margin-left:40px; position:absolute; bottom:70px; ");
goHome.innerText = " Go Home ";
a2.append(goHome);
outer_div_end.appendChild(a2);


