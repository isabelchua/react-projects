import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import { Route, Link, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/rooms/" component={Rooms} />
				<Route exact path="/rooms/:slug" component={SingleRoom} />
				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default App;
