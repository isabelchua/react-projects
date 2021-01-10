import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: "todo",
	// initialState: {
	// 	todo: "eat"
	// },
	initialState: {
		1: { id: 1, task: "gym" },
		2: { id: 2, task: "eat" }
	},
	reducers: {
		addTodo: state => {
			//add state
		},
		deleteTodo: (state, action) => {
			delete state[action.payload.id];
		},
		editTodo: (state, action) => {
			state.map(item => {
				if (item.id === action.payload.id) {
					return { ...item, title: action.payload.name };
				}
				return item;
			});
		}
	}
});

export const { setTodo, logout, deleteTodo, editTodo } = todoSlice.actions;

// state.todo = state.todo.filter(item => item.id !== action.payload.id);
//initialState: [{ id: 1, task: "gym" }, { id: 2, task: "eat" }],
// setTodo: (state, action) => {
// 	// Redux Toolkit allows us to write "mutating" logic in reducers. It
// 	// doesn't actually mutate the state because it uses the Immer library,
// 	// which detects changes to a "draft state" and produces a brand new
// 	// immutable state based off those changes
// 	state.todo = action.payload.todo;
// },
// console.log(action.payload.id);
// 			console.log(action.payload);

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodo = state => state.todo;

export default todoSlice.reducer;
