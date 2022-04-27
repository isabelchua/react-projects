import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import { useState } from "react";

function App() {
	const [searchText, setSearchText] = useState("");
	const [plushies, setPlushies] = useState([
		{
			id: 1,
			name: "1",
			src: "https://lh3.googleusercontent.com/31T4LDSuTD9_f3tXjce2Hg6bSkgQqNFs0PSnrXecHybhz-xsp6nUwneHgvftxi_UIO2NLN-WpaiOE250tNiL2Xh1-LV1Ic_0mOQ7FeA=w367",
			properties: {
				mood: "neutral",
				item: "none",
				background: "blue"
			}
		},
		{
			id: 2,
			name: "2",
			src: "https://lh3.googleusercontent.com/qpBVKZTyGDUTVsbPZhhK_aYbxMX095nuod0oEarv8eeDAjAz823IcZhFoWHDeRpRbMEQDPAJEMYOuq03iWYqWC7TKgjwX_PosBkY=w367",
			properties: {
				mood: "satisfied",
				item: "wine",
				background: "blue"
			}
		}
	]);

	return (
		<div className="App">
			<Header handleSearchText={setSearchText} />
			<List
				plushies={plushies.filter(plush =>
					plush.name.toLowerCase().includes(searchText)
				)}
			/>
		</div>
	);
}

export default App;
