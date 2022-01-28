import React from "react";
import { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact } = contactContext;

	const { id, name, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(id);
	};

	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{name}{" "}
				<span
					style={{ float: "right" }}
					className={
						"badge " +
						(type === "professional" ? "badge-success" : "badge-primary")
					}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className="list">
				{email && (
					<li>
						<i className="fas fa-envelope-open"> {email}</i>
					</li>
				)}
				{phone && (
					<li>
						<i className="fas fa-envelope-open"> {phone}</i>
					</li>
				)}
				<p>
					<button className="btn btn-dark btn-sm">Edit</button>
					<button className="btn btn-danger btn-sm" onClick={onDelete}>
						Delete
					</button>
				</p>
			</ul>
		</div>
	);
};

export default ContactItem;
