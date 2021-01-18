import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../context/actions/auth/login";
//import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

export default () => {
	const [form, setForm] = useState({});

	const history = useHistory();

	const {
		authDispatch,
		authState: {
			auth: { loading, error, data }
		}
	} = useContext(GlobalContext);

	const onChange = (e, { name, value }) => {
		setForm({ ...form, [name]: value });
	};

	console.log("form", form);

	//console.log("loading", loading);
	//console.log("error", error);
	//console.log("DATA", data);

	const loginFormValid = !form.username?.length || !form.password?.length;

	const onSubmit = () => {
		// register(form)(authDispatch);
		login(form)(authDispatch);
	};
	return { form, onChange, loading, error, loginFormValid, onSubmit };
};
