import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	console.log(contactContext);

	const { contacts } = contactContext;
	return (
		<>
			{contacts.map(contact => (
				<ContactItem key={contact.id} contact={contact} />
			))}
		</>
	);
};

export default Contacts;
