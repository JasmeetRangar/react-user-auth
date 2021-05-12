import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Success from "./components/Success";
export default function App() {
	return (
		<div className="login">
			<form>
				<label>
					<p>Username</p>
					<input type="text" />
				</label>
				<label>
					<p>Password</p>
					<input type="password" />
				</label>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}
