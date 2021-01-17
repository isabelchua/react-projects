import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

export default () => {
	const [form, setForm] = useState({});
	const [fieldErrors, setFieldErrors] = useState({});

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

	useEffect(() => {
		if (error) {
			for (const item in error) {
				setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
			}
		}
	}, [error]);

	useEffect(() => {
		if (data) {
			history.push("/auth/login");
		}
	}, [data]);

	console.log("loading", loading);
	console.log("error", error);
	console.log("DATA", data);

	const registerFormValid =
		!form.username?.length ||
		!form.firstName?.length ||
		!form.lastName?.length ||
		!form.password?.length ||
		!form.email?.length;

	const onSubmit = () => {
		setFieldErrors({});
		register(form)(authDispatch);
	};
	return { form, onChange, loading, fieldErrors, registerFormValid, onSubmit };
};
