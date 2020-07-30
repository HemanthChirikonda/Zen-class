var expected = {foo: 5, bar: 6};
var actual = {foo: 6, bar: 5};
var zen = 'equal';
function assertObjectsEqual(actual, expected, testName){
 // your code here
if(JSON.stringify(actual) === JSON.stringify(expected)){
	console.log("Passed");
} else {
	console.log("FAILED "+ [testName]+"Expected"+JSON.stringify(expected) +","+"but got"+ JSON.stringify(actual));
}
}
assertObjectsEqual(actual, expected, zen);