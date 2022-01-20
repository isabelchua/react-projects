import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [name, setName] = useState("isabel");
	const [age, setAge] = useState(35);

	const handleClick = () => {
		setName("andrew");
		setAge(33);
	};

	const handleClickAgain = name => {};

	const [blogs, setBlogs] = useState([
		{ title: "Title", body: "lorem ipsum..", author: "isabel", id: 1 },
		{ title: "Title 2", body: "lorem ipsum..", author: "andrew", id: 2 },
		{ title: "Title 3", body: "lorem ipsum..", author: "hannah", id: 3 }
	]);

	const handleDelete = id => {
		const newBlogs = blogs.filter(blog => blog.id !== id);
		setBlogs(newBlogs);
	};

	return (
		<div>
			<BlogList
				blogs={blogs}
				title={"All the blogs"}
				handleDelete={handleDelete}
			/>
			<BlogList
				blogs={blogs.filter(blog => blog.author === "hannah")}
				title="Stella's blogs"
			/>

			<br />
			<p>{name} is</p>
			<p>{age} years old</p>
			<button onClick={handleClick}>Click Me</button>
			<button onClick={e => handleClickAgain("isabel", e)}>
				click again
			</button>
		</div>
	);
};

export default Home;
