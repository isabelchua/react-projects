import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../context/actions/auth/register";
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

	console.log("loading", loading);
	console.log("error", error);
	console.log("DATA", data);

	const loginFormValid = !form.username?.length || !form.password?.length;

	const onSubmit = () => {
		// register(form)(authDispatch);
	};
	return { form, onChange, loading, fieldErrors, loginFormValid, onSubmit };
};
