var cat = {
 "name": "Fluffy",
 "activities": ['play', "eat cat food"],
 "catFriends": [
 {
 "name": 'bar',
 "activities": ['be grumpy','eat bread omblet'],
 "weight": 8,
 "furcolor": 'white' 

 }, 
 {
 "name": 'foo',
 "activities": ['sleep', "pre-sleep naps"],
 "weight": 3
 }
 ]
};
console.log(cat);
cat.height= 8;
cat.weight=22;
cat.name = "Fluffyy";;
console.log(cat);
let SumWeight=0;
console.log(cat.activities);
for(i in cat.catFriends){

console.log(cat.catFriends[i].activities);

SumWeight+=cat.catFriends[i].weight;
}
for(i in cat.catFriends){
	console.log(cat.catFriends[i].name);
	
}
cat.catFriends[0].activities.push("go to bath");
cat.catFriends[1].activities.push("go for a walk");
console.log("total weight", SumWeight);
for(i in cat.catFriends){
console.log(cat.catFriends[i].activities);
}
cat.catFriends[0].furcolor= "blue";
console.log(JSON.stringify(cat)); 