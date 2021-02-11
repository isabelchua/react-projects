import React, { useEffect, useState, useReducer } from "react";
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

const coursesReducer = (state, action) => {
	switch (action.type) {
		case "SET_COURSES":
			return action.payload;
		case "REMOVE_COURSE":
			return state.filter(course => action.payload.id !== course.id);
		default:
			throw new Error();
	}
};

// const coursesReducer = (state, action) => {
// 	switch (action.type) {
// 		case "FETCH_COURSE_START":
// 			return {
// 				...state,
// 				isLoading: true
// 			};
// 		case "FETCH_COURSES_SUCCESS":
// 			return {
// 				...state,
// 				isLoading: false,
// 				data: action.payload
// 			};
// 		case "REMOVE_COURSE":
// 			return {
// 				...state,
// 				data: state.filter(course => action.payload.id !== course.id)
// 			};
// 		default:
// 			throw new Error();
// 	}
// };

const App = () => {
	//const STRAPI_API_ENDPOINT = "http://localhost:1337/courses";

	// const [courses, dispatchCourses] = useReducer(coursesReducer, {
	// 	data: [],
	// 	isLoading: false
	// });
	const [courses, dispatchCourses] = useReducer(coursesReducer, []);

	const [isLoading, setIsLoading] = useState(false);

	const [searchText, setSearchText] = useState(
		localStorage.getItem("searchText") || ""
	);

	const handleSearch = e => {
		//console.log(e.target.value);
		setSearchText(e.target.value);
		localStorage.setItem("searchText", e.target.value);
	};

	const handleRemoveCourse = course => {
		dispatchCourses({
			type: "REMOVE_COURSE",
			payload: course
		});
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
			//setCourses(result.courses);
			dispatchCourses({
				type: "SET_COURSES",
				payload: result.courses
			});
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
				<CoursesList
					courses={filteredCourses}
					handleRemoveCourse={handleRemoveCourse}
				/>
			)}
		</div>
	);
};

export default App;
