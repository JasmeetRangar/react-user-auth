import "./App.css";
import { useState, createContext, Fragment } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
export default function App() {
	const [user, setUser] = useState(null);
	const UserContext = createContext(null);

	return (
		<Fragment>
			<Register />
			<Login />
		</Fragment>
	);
}
