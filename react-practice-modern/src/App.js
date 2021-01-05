import CoursesList from "./CoursesList";

const courses = [
	{
		id: 1,
		title: "asd",
		author: "aaa",
		hourrs_video: 22,
		number_of_lectures: 200,
		rating: 4.7,
		url: "aaa"
	},
	{
		id: 2,
		title: "waaaa",
		author: "aaa",
		hourrs_video: 22,
		number_of_lectures: 200,
		rating: 4.7,
		url: "aaa"
	}
];

const App = () => {
	const handleSearchInputChange = e => {
		console.log(e.target.value);
	};
	const greeting = "Hello World!";

	const greetings = {
		greeting_one: "Hello",
		greeting_two: "world"
	};

	function getGreetingMessage() {
		return "Hello world from function";
	}
	return (
		<div>
			<h1>{greeting},</h1>
			<h2>
				{greetings.greeting_one} {greetings.greeting_two}
			</h2>
			<h1>{getGreetingMessage()}</h1>

			<h1>Sample List</h1>
			<hr />
			<label htmlFor="">Search: </label>
			<input
				id="searchInput"
				type="text"
				onChange={handleSearchInputChange}
			/>
			<CoursesList courses={courses} />
		</div>
	);
};

export default App;
