import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={RegisterForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" exact component={RegisterForm} />
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/:random"> <Redirect to="/" /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;