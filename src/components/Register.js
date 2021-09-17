import React, {useRef, useState} from 'react';
import {useAuth} from '../contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

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
      history.push("/login")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  return (
    <div>
      Register
      {/* {currentUser.email} */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            ref={nameRef}
          />
        </div>

        <div>
          <label>Mobile</label>
          <input 
            type="text" 
            ref={mobileRef}
          />
        </div>


        <div>
          <label>Email</label>
          <input 
            type="email" 
            ref={emailRef}
          />
        </div>

        <div>
          <label>Password</label>
          <input 
            type="password" 
            ref={passwordRef}
            />
        </div>

        <div>
          <button disabled={loading}>
            Login
          </button>
        </div>
        <p>
          Already have an account?
          <Link to="/login">Login here</Link>
        </p>
      </form>
      {error && <p style={{fontSize:"12px"}}> {error} </p>}
    </div>
  )
}

export default Register
