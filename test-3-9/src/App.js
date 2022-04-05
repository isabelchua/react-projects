import "./App.css";
import AddText from "./components/AddText";
import List from "./components/List";

function App() {
	return (
		<div className="calculator-grid">
			<div className="output">
				<div className="previous-operand"></div>
				<div className="current-operand"></div>
			</div>
			<button className="span-two">AC</button>
		</div>
	);
}

export default App;
