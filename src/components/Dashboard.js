import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
// import app from '../firebase'
import {useAuth} from '../contexts/AuthContext';

const Dashboard = () => {
    const {currentUser, logout} = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();
    
    
    async function handleLogout() {
        setError("")
        try {
            await logout();
            history.push("/login")
        } catch {
            setError("Failed to sign out")
        }
    }

    return (
        <div className="dashboard">
            <h2 className="login-header">Profile dashboard</h2>
            <p style={{marginTop: "1rem"}}>
                <strong>Your Email is: </strong>
                {currentUser.displayName}
            </p>

            {/* <p>
                <strong>Name: </strong>
                {currentUser.name}
            </p>
            <p>
                <strong>Mobile: </strong>
                {currentUser.mobile}
            </p> */}
            {error && <p style={{fontSize:"12px"}}> {error} </p>}
            <button
                className="btn-dashboard"
                onClick={handleLogout}
            >
                Sign Out
            </button>
        </div>
    )
}

export default Dashboard
