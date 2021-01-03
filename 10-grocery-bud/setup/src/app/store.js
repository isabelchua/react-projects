import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
// import userReducer from "../features/user/userSlice";
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "../todo/todoSlice";

export default configureStore({
	reducer: {
		todo: todoReducer
	}
});
