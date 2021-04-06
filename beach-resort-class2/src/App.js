import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import { Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Home} />
			<Route exact path="/rooms/" component={Rooms} />
			<Route exact path="/single-room" component={SingleRoom} />
			{/* <Home />
			<Rooms />
			<Error />
			<SingleRoom /> */}
		</div>
	);
}

export default App;
