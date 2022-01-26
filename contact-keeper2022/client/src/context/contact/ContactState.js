import React, { useReducer } from "react";
import uuid from "uuid";
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
				id: 1,
				name: "Isabel Chua",
				email: "isabel@gmail.com",
				phone: "415-494-1544",
				type: "personal"
			},
			{
				id: 1,
				name: "Isabel Chua",
				email: "isabel@gmail.com",
				phone: "415-494-1544",
				type: "personal"
			}
		]
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//Add Contact

	//Delete Contact

	//Set Current Contact

	//Clear Current Contact

	//Update Contact

	//Filter Contact

	//Clear Filter

	return (
		<ContactContext.Provide
			value={{
				cotnacts: state.contacts
			}}
		>
			{props.children}
		</ContactContext.Provide>
	);
};

export default ContactState;
