// // http request
// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/users");
// request.send();
// //console.log(request);

// request.onload = () => {
// 	//console.log(request);
// 	if (request.status === 200) {
// 		console.log(request.response);
// 	} else {
// 		console.log(error);
// 		console.log(`error ${request.status}`);
// 	}
// };
// //console.log("hello");

// ////////// fetch api

// //console.log(window);

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then(response => {
// 		return response.json();
// 		// console.log(response);
// 	})
// 	.then(json => {
// 		console.log(json);
// 	});

// ///////// second approach

async function getUsers() {
	let response = await fetch("https://jsonplaceholder.typicode.com/users");
	let data = await response.json();
	return data;
}

getUsers().then(data => console.log(data));
