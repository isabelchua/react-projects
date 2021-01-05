import React from "react";

const CoursesList = ({ courses, handleRemoveCourse }) => {
	return courses.map(course => {
		return (
			<div key={course.id}>
				<span>
					<a href={course.url}>
						<h4>{course.title}</h4>
					</a>
				</span>
				<span>
					by <strong>{course.author}</strong>
				</span>
				<span> | Video Hours: {course.hourrs_video}</span>
				<span> | Rating: {course.rating}</span>
				<br />
				<br />

				<span>
					<button type="button" onClick={() => handleRemoveCourse(course)}>
						Remove
					</button>
				</span>
			</div>
		);
	});
};

export default CoursesList;
