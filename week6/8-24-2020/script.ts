
const chunk = (arry, size) => Array.from({ length: Math.ceil(arry.length / size) }, (j, i) =>

    arry.slice(i * size, i * size + size)
);
console.log(chunk([1, 5, 4, 6, 3, 7, 5], 2));

const sum = arry => (arry.reduce((total, item) => total + item, 0));

console.log(sum([1, 5, 4, 6, 3, 7, 5]));

const filter = (arry, cond) => arry.filter(cond);

console.log(filter([1, 5, 4, 6, 3, 7, 5], (i => i < 4)));

const find = (arry, cond) => arry.find(cond);

console.log(find([1, 5, 4, 6, 3, 7, 5], (i => i <6)));


const reduce = (arry,funcond,result ) => (arry.reduce(funcond,result));
console.log(reduce([1, 5, 4, 6, 3, 7, 5], (i,v)=> (i+v),0));





let main = document.createElement('div');
main.classList.add('container',);
let row1 = document.createElement('header');
row1.id='header'
row1.classList.add('header','rounded','display-3');
row1.innerHTML='LODASH functions'
main.append(row1);
let row = document.createElement('div');
row.classList.add('row','rounded');

row.innerHTML=`<div class= 'col-12 display-4' style="text-align: center; ">
Functions </div>
<div class= 'col-3'></div>
<div class= 'col rounded border' >
const chunk = (arry, size) => Array.from({ length: Math.ceil(arry.length / size) }, (j, i) =>

arry.slice(i * size, i * size + size)
);
<br>
console.log(chunk([1, 5, 4, 6, 3, 7, 5], 2));
<br>
const sum = arry => (arry.reduce((total, item) => total + item, 0));
<br>
console.log(sum([1, 5, 4, 6, 3, 7, 5]));
<br>
const filter = (arry, cond) => arry.filter(cond);
<br>
console.log(filter([1, 5, 4, 6, 3, 7, 5], (i => i < 4)));
<br>
const find = (arry, cond) => arry.find(cond);
<br>
console.log(find([1, 5, 4, 6, 3, 7, 5], (i => i <6)));
<br>

const reduce = (arry,funcond,result ) => (arry.reduce(funcond,result));
console.log(reduce([1, 5, 4, 6, 3, 7, 5], (i,v)=> (i+v),0));
</div>

<div class= 'col-3'></div>`
main.append(row);
let row2 = document.createElement('div');
row2.classList.add('row','rounded');

row2.innerHTML=`<div class= 'col-12 display-4'  style="text-align: center; ">
Answers </div><div class= 'col-3'></div>
<div class= 'col rounded border'>
Array(4)0: (2) [1, 5]1: (2) [4, 6]2: (2) [3, 7]3: [5]length: 4__proto__: Array(0)
<br>
 31
 <br>
 Array(2)0: 11: 3length: 2__proto__: Array(0)
<br>
1
<br>
31
<br>
</div>

<div class= 'col-3'></div>`
main.append(row2);
document.body.append(main);