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

//console.log(initialExpenses);
function App() {
	//console.log(useState());
	const result = useState(initialExpenses);
	const expenses = result[0];
	const setExpenses = result[1];
	console.log(expenses, setExpenses);
	return (
		<div className="App">
			<Alert />
			<ExpenseForm />
			<ExpenseList />
			hello
		</div>
	);
}

export default App;
