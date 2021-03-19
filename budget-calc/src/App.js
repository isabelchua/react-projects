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
	// ******** state values ********
	// all expenses, add expense
	const [expenses, setExpenses] = useState(initialExpenses);
	// single expense
	const [charge, setCharge] = useState("");
	// single amount
	const [amount, setAmount] = useState("");
	// ******** functionality ********
	const handleCharge = e => {
		//console.log(`charge : ${e.target.value}`);
		setCharge(e.target.value);
	};
	const handleAmount = e => {
		//console.log(`amount : ${e.target.value}`);

		setAmount(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		console.log(charge, amount);
	};
	// const expenses = result[0];
	// const setExpenses = result[1];
	//console.log(expenses, setExpenses);
	return (
		<>
			<Alert />
			<h1>budget calculator</h1>
			<main className="App">
				<ExpenseForm
					charge={charge}
					amount={amount}
					handleAmount={handleAmount}
					handleCharge={handleCharge}
					handleSubmit={handleSubmit}
				/>
				<ExpenseList expenses={expenses} />
			</main>
			<h1>
				total spending :{" "}
				<span className="total">
					$
					{expenses.reduce((acc, curr) => {
						return (acc += curr.amount);
					}, 0)}
				</span>
			</h1>
		</>
	);
}

export default App;
