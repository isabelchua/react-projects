const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
//console.log(request);

request.onload = () => {
	console.log(request);
};
console.log("hello");
