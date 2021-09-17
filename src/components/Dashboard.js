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
        <div>
            <h2>Profile dashboard</h2>
            <p>
                <strong>Email: </strong>
                {currentUser.email}
            </p>

            <p>
                <strong>Name: </strong>
                {currentUser.name}
            </p>
            <p>
                <strong>Mobile: </strong>
                {currentUser.mobile}
            </p>
            {error && <p style={{fontSize:"12px"}}> {error} </p>}
            <button
                onClick={handleLogout}
            >
                Sign Out
            </button>
        </div>
    )
}

export default Dashboard
