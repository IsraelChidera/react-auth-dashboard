import React, {useRef, useState} from 'react';
import {useAuth} from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  // const {signup, currentUser} = useAuth()
  //currentuser
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory()


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to login")
    }
    setLoading(false)
  }

  return (
    <div className="register">
      <div className="logindiv">
      </div>

      <div className="register-form">
        
        {/* {currentUser.email} */}
        <p className="login-header">
          Login
        </p>
        <form onSubmit={handleSubmit}>
        

          <div>
            <label>Email</label>
            <input 
              type="email" 
              ref={emailRef}
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label>Password</label>
            <input 
              type="password" 
              ref={passwordRef}
              placeholder="Enter Password"
              />
          </div>

          {error && <p style={{fontSize:"12px",color:"red"}}> {error} </p>}
          <div>
            <button
              className="btn-login" 
              disabled={loading}
            >
              Login
            </button>
          </div>
          <p className="special-para">
            Need an account?
            <Link to="/register">Sign up here</Link>
          </p>
        </form>
        
      </div>
    </div>
  )
}

export default Login
