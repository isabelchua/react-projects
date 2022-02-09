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

/// joke API FETCH

const displayJoke = document.getElementById("display-joke");
const clickHere = document.getElementById("click-here");

function getJoke() {
	fetch("https://karljoke.herokuapp.com/jokes/random")
		.then(response => {
			return response.json();
			// console.log(response);
		})
		.then(json => {
			console.log(json);
			const listJoke = document.createElement("h1");
			listJoke.innerText = displayJoke.value;
			console.log(json.setup);
			displayJoke.innerHTML(json.setup);
		});
}

document.getElementById("click-here").addEventListener("click", getJoke);

// ///////// second approach

// async function getUsers() {
// 	let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	let data = await response.json();
// 	return data;
// }

// getUsers().then(data => console.log(data));

// axios

// axios.get("https://jsonplaceholder.typicode.com/users").then(
// 	response => console.log(response.data),
// 	err => {
// 		console.log(err);
// 	}
// );

// jQuery
// $(document).ready(function () {
// 	$.ajax({
// 		url: "https://jsonplaceholder.typicode.com/users",
// 		type: "GET",
// 		success: function (result) {
// 			console.log(result);
// 		},
// 		error: function (err) {
// 			console.log(err);
// 		}
// 	});
// });
