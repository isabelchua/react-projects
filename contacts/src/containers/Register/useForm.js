import { useContext, useState } from "react";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

export default () => {
	const [form, setForm] = useState({});

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

	const registerFormValid =
		!form.username?.length ||
		!form.firstName?.length ||
		!form.lastName?.length ||
		!form.password?.length ||
		!form.email?.length;

	const onSubmit = form => {
		register(form)(authDispatch);
	};
	return { form, onChange, loading, registerFormValid, onSubmit };
};
