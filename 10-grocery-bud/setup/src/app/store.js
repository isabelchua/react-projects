import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
// import userReducer from "../features/user/userSlice";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "../reducers/todoReducer";

export default configureStore({
	reducer: {
		counter: todoReducer
	}
});
