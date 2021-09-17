import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>

            <Route exact path="/register">
              <Register/>
            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>

  );
}

export default App;
