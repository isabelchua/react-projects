import React from "react";

const BlogList = ({ blogs, title, handleDelete }) => {
	// const blogs = props.blogs;
	// const title = props.title;

	console.log(blogs);
	return (
		<div className="bloglist">
			<h2>{title}</h2>
			{blogs.map(blog => (
				<div className="blogprev" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>{blog.body}</p>
					<p>written by {blog.author}</p>
					<button onClick={() => handleDelete(blog.id)}>delete</button>
				</div>
			))}
		</div>
	);
};

export default BlogList;
