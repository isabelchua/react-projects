import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { selectTodo } from "./todo/todoSlice";
import { useSelector } from "react-redux";

const List = ({ items, removeItem, editItem }) => {
	const todo = useSelector(selectTodo);
	console.log(Object.entries(todo));

	return (
		<div className="todo-list">
			{Object.values(todo).map(item => {
				const { id, task } = item;
				return (
					<article key={id} className="todo-item">
						<p className="title">{task}</p>
						<div className="btn-container">
							<button
								type="button"
								className="edit-btn"
								onClick={() => editItem(id)}
							>
								<FaEdit />
							</button>
							<button
								type="button"
								className="delete-btn"
								onClick={() => removeItem(id)}
							>
								<FaTrash />
							</button>
						</div>
					</article>
				);
			})}
			{/* {items.map(item => {
				const { id, title } = item;
				return (
					<article key={id} className="todo-item">
						<p className="title">{title}</p>
						<div className="btn-container">
							<button
								type="button"
								className="edit-btn"
								onClick={() => editItem(id)}
							>
								<FaEdit />
							</button>
							<button
								type="button"
								className="delete-btn"
								onClick={() => removeItem(id)}
							>
								<FaTrash />
							</button>
						</div>
					</article>
				);
			})} */}
		</div>
	);
};

export default List;
