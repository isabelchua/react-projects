import "./App.css";
import { useSelector } from "react-redux";

function App() {
	const account = useSelector(state => state.account);

	return (
		<div className="App">
			<h1>{account}</h1>
			<button>Deposit</button>
			<button>Withdraw</button>
		</div>
	);
}

export default App;
