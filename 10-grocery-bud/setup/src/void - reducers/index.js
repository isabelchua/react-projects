//import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todoReducer";

const rootReducer = configureStore({
	todo: todoReducer
});

export default rootReducer;
