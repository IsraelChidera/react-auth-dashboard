import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './components/PrivateRoute';
import {useState, useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";



function App() {
  const override = css`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {
        loading ?
        <HashLoader color={"#333444"} css={override} loading={loading} size={70} />
        :
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
      }
    </>

  );
}

export default App;


