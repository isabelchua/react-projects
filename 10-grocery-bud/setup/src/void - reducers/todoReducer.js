import { v4 as uuidv4 } from "uuid";

const initialState = [
	{
		id: 1,
		task: "gym"
	},

	{
		id: 2,
		task: "John Doe"
	}
];

const todoReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "ADD_TODO":
			return [
				...state,
				{
					id: uuidv4(),
					task: payload.task
				}
			];
		case "REMOVE_TODO":
			const copyState = [...state];
			// find id of object to remove
			const i = copyState.findIndex(x => x.id === payload.id);
			copyState.splice(i, 1);
			return [...copyState];

		default:
			return state;
	}
};

export default todoReducer;
