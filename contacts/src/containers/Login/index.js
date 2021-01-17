import React, { useContext } from "react";
import { Link } from "react-router-dom";

import LoginUI from "../../layout/Login";
import useForm from "../Register/useForm";

const LoginContainer = () => {
	return <LoginUI form={useForm()} />;
};

export default LoginContainer;
