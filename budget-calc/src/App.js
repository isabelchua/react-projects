import "./App.css";
import Alert from "./components/Alert";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const initialExpenses = [
	{ id: uuidv4(), charge: "rent", amount: 1500 },
	{ id: uuidv4(), charge: "car payment", amount: 500 },
	{ id: uuidv4(), charge: "credit card bill", amount: 1200 }
];

function App() {
	const [expenses, setExpenses] = useState(initialExpenses);

	// const expenses = result[0];
	// const setExpenses = result[1];
	console.log(expenses, setExpenses);
	return (
		<>
			<Alert />
			<ExpenseForm />
			<ExpenseList />
		</>
	);
}

export default App;
