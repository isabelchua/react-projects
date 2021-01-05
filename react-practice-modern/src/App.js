import React, { useEffect, useState } from "react";
import CoursesList from "./CoursesList";
import Search from "./Search";

const courses_data = [
	{
		id: 1,
		title: "asdaa",
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
	},
	{
		id: 3,
		title: "dfdaaa",
		author: "faaa",
		hourrs_video: 22,
		number_of_lectures: 200,
		rating: 4.7,
		url: "aaa"
	}
];

const App = () => {
	const [courses, setCourses] = useState([]);

	const [isLoading, setIsLoading] = useState(false);

	const [searchText, setSearchText] = useState(
		localStorage.getItem("searchText") || ""
	);

	const handleSearch = e => {
		//console.log(e.target.value);
		setSearchText(e.target.value);
		localStorage.setItem("searchText", e.target.value);
	};

	const getCoursesAsync = () =>
		new Promise(resolve =>
			setTimeout(() => resolve({ courses: courses_data }), 2000)
		);

	useEffect(() => {
		localStorage.setItem("searchText", searchText);
	}, [searchText]);

	useEffect(() => {
		setIsLoading(true);

		getCoursesAsync().then(result => {
			setCourses(result.courses);
			setIsLoading(false);
		});
	}, []);

	const filteredCourses = courses.filter(course => {
		return (
			course.title.includes(searchText) || course.author.includes(searchText)
		);
	});

	// const handleKeyPress = e => {
	// 	if (e.key === "Enter") {
	// 		console.log("Enter key press " + e.target.value);
	// 	}
	// };

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
			<Search value={searchText} onSearch={handleSearch} />

			{isLoading ? (
				<p>Loading courses...</p>
			) : (
				<CoursesList courses={filteredCourses} />
			)}
		</div>
	);
};

export default App;
