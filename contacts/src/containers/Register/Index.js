import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { register } from "../../context/actions/register";
import RegisterUI from "../../layout/Register";

const RegisterContainer = () => {
	useEffect(() => {
		register();
	}, []);

	return <RegisterUI />;
};

export default RegisterContainer;
