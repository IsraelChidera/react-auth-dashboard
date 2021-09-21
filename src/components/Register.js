import React, {useRef, useState} from 'react';
import {useAuth} from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';

const Register = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const mobileRef = useRef()
  const passwordRef = useRef()
  const {signup} = useAuth()
  // const {signup, currentUser} = useAuth()
  //currentuser
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value, mobileRef.current.value, nameRef.current.value)
      await auth.currentUser.updateProfile({ displayName: nameRef.current.value })
      history.push("/login")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  return (
    <div className="register">
      <div className="signdiv">
      </div>

      <div className="register-form">
        <p className="sign-header">Sign Up</p>
        {/* {currentUser.email} */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input 
              type="text" 
              ref={nameRef}
              placeholder="Name"
            />
          </div>

          <div>
            <label>Mobile</label>
            <input 
              type="text" 
              ref={mobileRef}
              placeholder="Mobile"
            />
          </div>


          <div>
            <label>Email</label>
            <input 
              type="email" 
              ref={emailRef}
              placeholder="Email"
            />
          </div>

          <div>
            <label>Password</label>
            <input 
              type="password" 
              ref={passwordRef}
              placeholder="Password"
              />
          </div>

          {error && <p style={{fontSize:"12px",color:"red"}}> {error} </p>}
          <div>
            <button 
              className="btn"
              disabled={loading}
            >
              Login
            </button>
          </div>
          <p className="special-para">
            Already have an account?
            <Link to="/login">Login here</Link>
          </p>
        </form>
        
      </div>
    </div>
  )
}

export default Register
