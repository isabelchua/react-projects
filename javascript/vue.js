const app = Vue.createApp({
	data() {
		return {
			showBooks: true,
			title: "my title",
			name: "isabel",
			age: 35
		};
	},
	methods: {
		// changeTitle() {
		// 	this.title = "test title";
		// },
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		}
	}
});

app.mount("#app");
