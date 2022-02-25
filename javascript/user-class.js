class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
	}
	login() {
		console.log(this.email, "just logged in");
	}
	logout() {
		console.log(this.email, "jsut logged out");
	}
}

var userOne = new User("isabel@gmail.com", "Isabel");
var userTwo = new User("andrew@gmail.com", "andrew");

userOne.login();
userTwo.logout();
