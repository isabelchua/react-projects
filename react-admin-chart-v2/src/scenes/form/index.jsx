import { Box, Button, Textfield } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	contact: "",
	address1: "",
	address2: ""
};

const phoneRegExp =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
	firstName: yup.string().required("required"),
	lastName: yup.string().required("required"),
	email: yup.string().email("invalid email").required("required"),
	contact: yup
		.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.required("required"),
	address1: yup.string().required("required"),
	address2: yup.string().required("required")
});

const Form = () => {
	const inNonMobile = useMediaQuery("(min-width:600px)");

	const handleFormSubmit = values => {
		console.log(values);
	};

	return (
		<Box m="20px">
			<Header title="CREATE USER" subtitle="Create a New User Profile" />

			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchea={userSchema}
			></Formik>
		</Box>
	);
};

export default Form;
