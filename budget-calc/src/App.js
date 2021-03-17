import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
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
