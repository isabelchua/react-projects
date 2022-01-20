import React from "react";

const BlogList = props => {
	const blogs = props.blogs;
	const title = props.title;

	console.log(props, blogs);
	return (
		<div className="bloglist">
			<h2>{title}</h2>
			{props.blogs.map(blog => (
				<div className="blogprev" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>{blog.body}</p>
					<p>written by {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default BlogList;
