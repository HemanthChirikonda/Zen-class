// Create a request variable and assign a new XMLHttpRequest object to it.

function sendXMLHttpRequest(method, url){
	function primise (){

	}
var request = new XMLHttpRequest()
var url_string = url;
// Open a new connection, using the GET request on the URL endpoint
request.open(method,url_string , true)

request.send();
request.setRequestHeader('access-control-allow-origin', '*');
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);

}
}
sendXMLHttpRequest('GET','https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com');

/*
fetch(url_string) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
*/


