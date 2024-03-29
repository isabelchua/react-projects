import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from "../types";

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: "Isabel Chua",
				email: "isabel@gmail.com",
				phone: "415-494-1544",
				type: "personal"
			},
			{
				id: 3,
				name: "Andrew de la Serna",
				email: "isabel@gmail.com",
				phone: "415-494-1544",
				type: "professional"
			},
			{
				id: 5,
				name: "Isabel Chua",
				email: "isabel@gmail.com",
				phone: "415-494-1544",
				type: "personal"
			}
		]
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//Add Contact
	const addContact = contact => {
		contact.id = uuidv4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	//Delete Contact
	const deleteContact = id => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	//Set Current Contact

	//Clear Current Contact

	//Update Contact

	//Filter Contact

	//Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				addContact,
				deleteContact
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
