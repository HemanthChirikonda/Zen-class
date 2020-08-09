

var header =document.createElement('header');
header.setAttribute("class","page");
 

var col = document.createElement('div');
col.setAttribute("class","page");
col.setAttribute("id","col");
header.appendChild(col);

var imgdiv = document.createElement('div');
imgdiv.setAttribute("id","imgdiv");
header.appendChild(imgdiv);

var yellowblockdiv = document.createElement('div');
yellowblockdiv.setAttribute("id","yellowblock");

var yellowinnerdiv= document.createElement('div');
yellowinnerdiv.setAttribute("class","yellowinnerdiv");
var headingtag= document.createElement('h1');
headingtag.innerText= "BRIAN DUDEY";
yellowinnerdiv.append(headingtag);

yellowblockdiv.appendChild(yellowinnerdiv);

header.appendChild(yellowblockdiv);
document.body.append(header);

var line = document.createElement('div');
line.setAttribute("class","line");
var ptag= document.createElement('p');
ptag.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ip";
line.appendChild(ptag);
var nav = document.createElement('nav');
nav.innerHTML="&nbsp;";
line.appendChild(nav);
document.body.append(line);

var LeftElements= document.createElement('div');
LeftElements.setAttribute("class","LeftElements");



 var profile= document.createElement('div');
 profile.setAttribute("class","profile");
 
 var image= document.createElement('div');
 image.setAttribute("id","image");
 profile.appendChild(image);
 
 var nameHedder= document.createElement('div');
 nameHedder.setAttribute("class","nameHedder");
 
 var nameinnerHedder= document.createElement('h3');
 nameinnerHedder.innerText="Profile";
 nameHedder.appendChild(nameinnerHedder);
 profile.appendChild(nameHedder);
 
 var content= document.createElement('div');
 content.setAttribute("class","content");

 var profileinnerContent= document.createElement('p');
profileinnerContent.innerText=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit in cumque blanditiis impedit expedita. Voluptatibus in quis aliquid, mollitia odio quod nesciunt amet officia, non, corrupti ipsa fugit quasi! Expedita!"
content.appendChild(profileinnerContent);
profile.appendChild(content);

LeftElements.appendChild(profile);

var Skills= document.createElement('div');
Skills.setAttribute("id","Skills");
var image2= document.createElement('div');
image2.setAttribute("id","image2");
Skills.appendChild(image2);
var nameHedder1= document.createElement('div');
nameHedder1.setAttribute("class","nameHedder1");
var nameinnerHedder1= document.createElement('h3');
nameinnerHedder1.innerText="Skills";
nameHedder1.appendChild(nameinnerHedder1);
Skills.appendChild(nameHedder1);
var content1= document.createElement('div');
content1.setAttribute("class","content");
var skillsinnerContent= document.createElement('p');
skillsinnerContent.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit in cumque blanditiis impedit expedita. Voluptatibus in quis aliquid, mollitia odio quod nesciunt amet officia, non, corrupti ipsa fugit quasi! Expedita!"
content1.appendChild(skillsinnerContent);
Skills.appendChild(content1);


var skillsProgress1= document.createElement('div');
skillsProgress1.setAttribute("class","skillsProgress");
var skill_Subheader1= document.createElement("div");
skill_Subheader1.setAttribute("class","subhedder");
var skill_Subheader1innerhead= document.createElement('h4');

skill_Subheader1innerhead.innerText="Technical Skills";
skill_Subheader1.appendChild(skill_Subheader1innerhead);

var skillsProgress1_ul= document.createElement('ul');
skillsProgress1_ul.setAttribute("class","1a");

let skillsProgress1_ul_li_1= document.createElement('li');
skillsProgress1_ul_li_1.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress1_ul.appendChild(skillsProgress1_ul_li_1);
let skillsProgress1_ul_li_2= document.createElement('li');
skillsProgress1_ul_li_2.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress1_ul.appendChild(skillsProgress1_ul_li_2);
let skillsProgress1_ul_li_3= document.createElement('li');
skillsProgress1_ul_li_3.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress1_ul.appendChild(skillsProgress1_ul_li_3);
let skillsProgress1_ul_li_4= document.createElement('li');
skillsProgress1_ul_li_4.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress1_ul.appendChild(skillsProgress1_ul_li_4);
let skillsProgress1_ul_li_5= document.createElement('li');
skillsProgress1_ul_li_5.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress1_ul.appendChild(skillsProgress1_ul_li_5);
skill_Subheader1.appendChild(skillsProgress1_ul);
skillsProgress1.appendChild(skill_Subheader1);
Skills.append(skillsProgress1);

var skillsProgress2= document.createElement('div');
skillsProgress2.setAttribute("class","skillsProgress");
var skill_Subheader2= document.createElement("div");
skill_Subheader2.setAttribute("class","subhedder");
var skill_Subheader2innerhead= document.createElement('h4');

skill_Subheader2innerhead.innerText="Technical Skills";
skill_Subheader2.appendChild(skill_Subheader2innerhead);

var skillsProgress2_ul= document.createElement('ul');
skillsProgress2_ul.setAttribute("class","1a");

let skillsProgress2_ul_li_1= document.createElement('li');
skillsProgress2_ul_li_1.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress2_ul.appendChild(skillsProgress2_ul_li_1);
let skillsProgress2_ul_li_2= document.createElement('li');
skillsProgress2_ul_li_2.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress2_ul.appendChild(skillsProgress2_ul_li_2);
let skillsProgress2_ul_li_3= document.createElement('li');
skillsProgress2_ul_li_3.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress2_ul.appendChild(skillsProgress2_ul_li_3);
let skillsProgress2_ul_li_4= document.createElement('li');
skillsProgress2_ul_li_4.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress2_ul.appendChild(skillsProgress2_ul_li_4);
let skillsProgress2_ul_li_5= document.createElement('li');
skillsProgress2_ul_li_5.innerHTML="<label for='file'>JavaScript</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<progress id='file' value='32' max='100'> 32% </progress> ";
skillsProgress2_ul.appendChild(skillsProgress2_ul_li_5);
skill_Subheader2.appendChild(skillsProgress2_ul);
skillsProgress2.appendChild(skill_Subheader2);
Skills.append(skillsProgress2);












LeftElements.appendChild(Skills);


var WorkExperience= document.createElement('div');
WorkExperience.setAttribute("id","WorkExperience");


let image3= document.createElement('div');
image3.setAttribute("id","image3");
WorkExperience.appendChild(image3);
let nameHedder3= document.createElement('div');
nameHedder3.setAttribute("class","nameHedder");
let nameinnerHedder3= document.createElement('h3');
nameinnerHedder3.innerText="WorkExperience";
nameHedder3.appendChild(nameinnerHedder3);
WorkExperience.appendChild(nameHedder3);

let eventManager = document.createElement('div');
eventManager.setAttribute("class", "skillsProgress");
let WorkExperience_ul= document.createElement('ul');
let ul_li_1= document.createElement('li');
ul_li_1.innerHTML="<h4>Event Manager&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03/2014-02/2017&nbsp;</h4>";
WorkExperience_ul.appendChild(ul_li_1);
let ul_li_2= document.createElement('li');
ul_li_2.innerHTML="0mnjgftdrdtyuhijk, v";
WorkExperience_ul.appendChild(ul_li_2);
eventManager.appendChild(WorkExperience_ul);
WorkExperience.appendChild(eventManager);


let WorkExperience_content= document.createElement('div');
WorkExperience_content.setAttribute("class","content");
let WorkExperience_content_ul= document.createElement('ul');
let WorkExperience_content_ul_li_1= document.createElement('li');
 WorkExperience_content_ul_li_1.innerText="Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!";
 WorkExperience_content_ul.appendChild(WorkExperience_content_ul_li_1);
 let WorkExperience_content_ul_li_2= document.createElement('li');
 WorkExperience_content_ul_li_2.innerHTML=" <p>Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!</p>";
 WorkExperience_content_ul.appendChild(WorkExperience_content_ul_li_2);
 let WorkExperience_content_ul_li_3= document.createElement('li');
 WorkExperience_content_ul_li_3.innerHTML=" <p>Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!</p>";
 WorkExperience_content_ul.appendChild(WorkExperience_content_ul_li_3);
WorkExperience_content.appendChild(WorkExperience_content_ul);
WorkExperience.appendChild(WorkExperience_content);
LeftElements.appendChild(WorkExperience);
document.body.append(LeftElements);

var middle_line= document.createElement('div');
middle_line.setAttribute("class","middle_line");
let middle_line_nav= document.createElement("nav");
middle_line_nav.innerHTML="&nbsp;"
middle_line.appendChild(middle_line_nav);
document.body.append(middle_line);








var RightElements= document.createElement('div');
RightElements.setAttribute("class","RightElements");

var WorkExperience1= document.createElement('div');
WorkExperience1.setAttribute("id", "WorkExperience");


let image4= document.createElement('div');
image4.setAttribute("id","image3");
WorkExperience1.appendChild(image4);
let nameHedder4= document.createElement('div');
nameHedder4.setAttribute("class","nameHedder");
let nameinnerHedder4= document.createElement('h3');
nameinnerHedder4.innerText="WorkExperience";
nameHedder4.appendChild(nameinnerHedder4);
WorkExperience1.appendChild(nameHedder4);

let eventManager1 = document.createElement('div');
eventManager1.setAttribute("class", "skillsProgress");
let WorkExperience1_ul= document.createElement('ul');
let ul1_li_1= document.createElement('li');
ul1_li_1.innerHTML="<h4>Event Manager&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03/2014-02/2017&nbsp;</h4>";
WorkExperience1_ul.appendChild(ul1_li_1);
let ul1_li_2= document.createElement('li');
ul1_li_2.innerHTML="0mnjgftdrdtyuhijk, v";
WorkExperience1_ul.appendChild(ul1_li_2);
eventManager1.appendChild(WorkExperience1_ul);
WorkExperience1.appendChild(eventManager1);


let WorkExperience1_content= document.createElement('div');
WorkExperience1_content.setAttribute("class","content");
let WorkExperience1_content_ul= document.createElement('ul');
let WorkExperience1_content_ul_li_1= document.createElement('li');
 WorkExperience1_content_ul_li_1.innerText="Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!";
 WorkExperience1_content_ul.appendChild(WorkExperience1_content_ul_li_1);
 let WorkExperience1_content_ul_li_2= document.createElement('li');
 WorkExperience1_content_ul_li_2.innerHTML=" <p>Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!</p>";
 WorkExperience1_content_ul.appendChild(WorkExperience1_content_ul_li_2);
 let WorkExperience1_content_ul_li_3= document.createElement('li');
 WorkExperience1_content_ul_li_3.innerHTML=" <p>Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!</p>";
 WorkExperience1_content_ul.appendChild(WorkExperience1_content_ul_li_3);
WorkExperience1_content.appendChild(WorkExperience1_content_ul);
WorkExperience1.appendChild(WorkExperience1_content);

RightElements.appendChild(WorkExperience1);




var Education= document.createElement('div');
Education.setAttribute("id", "Education");


let image5= document.createElement('div');
image5.setAttribute("id","image5");
Education.appendChild(image5);
let nameHedder5= document.createElement('div');
nameHedder5.setAttribute("class","nameHedder");
let nameinnerHedder5= document.createElement('h3');
nameinnerHedder5.innerText="Education";
nameHedder5.appendChild(nameinnerHedder5);
Education.appendChild(nameHedder5);

let university = document.createElement('div');
university.setAttribute("class", "skillsProgress");
let university_ul= document.createElement('ul');
let uniersity_ul_li_1= document.createElement('li');
uniersity_ul_li_1.innerHTML="<h4>Engineering Pogream&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03/2014-02/2017&nbsp; Pogream</h4>";
university_ul.appendChild(uniersity_ul_li_1);
let uniersity_ul_li_2= document.createElement('li');
uniersity_ul_li_2.innerHTML="0mnjgftdrdtyuhijk, v";
university_ul.appendChild(uniersity_ul_li_2);
university.appendChild(university_ul);

let university_content= document.createElement('p');
university_content.innerText=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae porro quia ex fugiat in numquam, quibusdam quasi soluta reprehenderit, tempora hic tempore velit maxime cum ipsa placeat! Incidunt, reiciendis optio?";
university.appendChild(university_content);
Education.appendChild(university);


let Education_content= document.createElement('div');
Education_content.setAttribute("class","content");
let Education_content_ul= document.createElement('ul');
let Education_content_ul_li_1= document.createElement('li');
 Education_content_ul_li_1.innerText="Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!";
 Education_content_ul.appendChild(Education_content_ul_li_1);
 let Education_content_ul_li_2= document.createElement('li');
 Education_content_ul_li_2.innerHTML=" <p>Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!</p>";
 Education_content_ul.appendChild(Education_content_ul_li_2);
 let Education_content_ul_li_3= document.createElement('li');
 Education_content_ul_li_3.innerHTML=" <p>Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!</p>";
 Education_content_ul.appendChild(Education_content_ul_li_3);
 let Education_content_ul_li_4= document.createElement('li');
 Education_content_ul_li_4.innerHTML=" <p>Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!</p>";
 Education_content_ul.appendChild(Education_content_ul_li_4);
 let Education_content_ul_li_5= document.createElement('li');
 Education_content_ul_li_5.innerHTML=" <p>Lorem ipsum dolor,  assumenda laboriosam fuga sint consequaturex blanditiis fugit soluta beatae eum voluptatibus quos. Similique alias iure placeat dicta!</p>";
 Education_content_ul.appendChild(Education_content_ul_li_5);
Education_content.appendChild(Education_content_ul);
Education.appendChild(Education_content);
RightElements.appendChild(Education);
document.body.append(RightElements);


