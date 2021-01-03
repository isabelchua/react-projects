import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: "todo",
	// initialState: {
	// 	todo: "eat"
	// },
	initialState: [
		{
			id: 1,
			task: "gym"
		},

		{
			id: 2,
			task: "John Doe"
		}
	],
	reducers: {
		setTodo: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.todo = action.payload.todo;
		},
		logout: state => {
			state.todo = null;
		}
	}
});

export const { setTodo, logout } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodo = state => state.todo;

export default todoSlice.reducer;
