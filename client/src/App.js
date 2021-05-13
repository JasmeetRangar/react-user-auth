import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import './App.css';
import RegisterForm from './components/RegisterForm';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  const handleLogin = user => {
    axios
      .post('/api/login', { ...user })
      .then(res => setCurrentUser(res.data))

  }

	const handleRegister = user => {
    axios
      .post('/api/register', { ...user })
  }

	const handleLogout = () => {
		setCurrentUser(null)
    axios
      .post('/api/logout')
  }

  useEffect(() => {
    axios
      .post('/api/authenticate')
      .then(res => setCurrentUser(res.data))
  }, [])


  return (
    <Router>
      <div className="App">
        <header>
          <h1>Basic React User Authentication</h1>
          <nav>
             <button> <Link to="/">Home		</Link></button>
						 <button><Link to="/register" >Register	</Link></button>
						 <button><Link to="/login">Login		</Link></button>
          </nav>
        </header>
        <main>
          <h2>Welcome</h2>
          <Switch>
            <Route path="/register">
              <RegisterForm handleRegister={handleRegister} />
            </Route>
            <Route path="/login">
							<LoginForm handleLogin={handleLogin} />
            </Route>
            
            <Route path="/">
              {currentUser ? <p>Hello {currentUser.email} <Logout handleLogout={handleLogout}/></p> : <p>Please Login or Register</p>}<p></p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;