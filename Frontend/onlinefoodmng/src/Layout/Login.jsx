import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Logregi/Login.css'; // External CSS file for additional styles

export default function Login() {
    let [username, setUserName] = useState('');
    let [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert('Please fill in both fields');
            return;
        }

        axios.get(`http://localhost:8080/api/user/login?username=${username}&password=${password}`)
            .then((response) => {
                console.log(response.data);
                alert(`Login Successful!\nWelcome back, ${username}!`);
                navigate('/adash');
            })
            .catch((error) => {
                console.error(error);
                alert('Login failed. Please try again.');
            });
    };

    return (
        <div>
            <br /><br />
        <div className="login-page-alt d-flex align-items-center justify-content-center">
            <div className="login-card p-4 shadow-lg">
                <h2 className="text-center mb-3">Log In</h2>
                <p className="text-center text-muted">Enter your credentials to continue</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-gradient w-100">Login</button>
                    <p className="mt-3 text-center">
                        Don't have an account? <Link to="/register" className="text-decoration-none">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
        </div>
    );
}
