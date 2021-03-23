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
	// alert
	const [alert, setAlert] = useState({ show: false });
	// ******** functionality ********
	//handle charge
	const handleCharge = e => {
		//console.log(`charge : ${e.target.value}`);
		setCharge(e.target.value);
	};
	//handle amount
	const handleAmount = e => {
		//console.log(`amount : ${e.target.value}`);

		setAmount(e.target.value);
	};
	//handle alert
	const handleAlert = ({ type, text }) => {
		setAlert({ show: true, type, text });
		setTimeout(() => {
			setAlert({ show: false });
		}, 3000);
	};

	//handle submit
	const handleSubmit = e => {
		e.preventDefault();
		//console.log(charge, amount);
		console.log(expenses);

		if (charge !== "" && amount > 0) {
			const singleExpense = { id: uuidv4(), charge, amount };
			console.log(expenses);
			setExpenses([...expenses, singleExpense]);
			handleAlert({ type: "success", text: "item added" });
			setCharge("");
			setAmount("");
		} else {
			// handle alert called
			handleAlert({
				type: "danger",
				text: `charge can't be empty value it has to be bigger than zero`
			});
		}
	};
	// const expenses = result[0];
	// const setExpenses = result[1];
	//console.log(expenses, setExpenses);

	// clear all items
	const clearItems = () => {
		//console.log("cleared all items");
		setExpenses([]);
		handleAlert({ type: "danger", text: "all items deleted" });
	};

	// handle delete
	const handleDelete = id => {
		//console.log(`item deleted : ${id}`);
		let tempExpenses = expenses.filter(item => item.id !== id);
		//console.log(tempExpenses);
		setExpenses(tempExpenses);
		handleAlert({ type: "danger", text: "item deleted" });
	};
	// handle edit
	const handleEdit = id => {
		console.log(`item edited : ${id}`);
	};
	return (
		<>
			{alert.show && <Alert type={alert.type} text={alert.text} />}
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
				<ExpenseList
					expenses={expenses}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
					clearItems={clearItems}
				/>
			</main>
			<h1>
				total spending :{" "}
				<span className="total">
					$
					{expenses.reduce((acc, curr) => {
						return (acc += parseInt(curr.amount));
					}, 0)}
				</span>
			</h1>
		</>
	);
}

export default App;
