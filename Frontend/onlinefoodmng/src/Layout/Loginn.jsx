import React, { useState } from 'react';  
import axios from 'axios';  
import { useNavigate, Link } from 'react-router-dom';  
import regiback from '../Images/login.jpg'; // Using the same background image  
import '../Logregi/Login.css';  

export default function Loginn() {  
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  
    const [errorMessage, setErrorMessage] = useState('');  
    const navigate = useNavigate();  

    const handleUsernameChange = (e) => setUsername(e.target.value);  
    const handlePasswordChange = (e) => setPassword(e.target.value);  

    const handleSubmit = (e) => {  
        e.preventDefault();  

        const adminUsername = "admin";  
        const adminPassword = "admin123";  

        if (username === adminUsername && password === adminPassword) {  
            localStorage.setItem('username', adminUsername);  
            setErrorMessage('Admin login successful!');  
            navigate('/adash');  
            return;  
        }  

        axios  
            .get(`http://localhost:8080/api/user/login?username=${username}&password=${password}`)  
            .then((response) => {  
                if (response.data !== "Invalid username or password") {  
                    const responseMessage = response.data;  
                    const userId = responseMessage.replace(/[^0-9]/g, '');  

                    if (userId) {  
                        localStorage.setItem('username', username);  
                        localStorage.setItem('userId', userId);  
                        alert('Login successful! User ID: ' + userId);  
                        navigate('/home');  
                    }  
                } else {  
                    setErrorMessage('Invalid username or password. Please try again.');  
                }  
            })  
            .catch((error) => {  
                console.error('Login error:', error);  
                setErrorMessage('An error occurred while logging in. Please try again later.');  
            });  
    };  

    const styles = {  
        backgroundStyle: {  
            backgroundImage: `url(${regiback})`,  
            backgroundSize: 'cover',  
            backgroundPosition: 'center',  
            minHeight: '100vh',  
            display: 'flex',  
            justifyContent: 'center',  
            alignItems: 'center',  
            padding: '20px',  
            overflow: 'hidden'  
        },  
        formContainer: {  
            background: 'rgba(255, 255, 255, 0.9)',  
            borderRadius: '15px',  
            padding: '40px',  
            width: '100%',  
            maxWidth: '400px',  
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',  
            backdropFilter: 'blur(10px)'  
        },  
        input: {  
            background: 'rgba(0, 0, 0, 0.1)',  
            color: '#333',  
            border: '1px solid #ccc',  
            borderRadius: '5px',  
            marginBottom: '15px',  
            padding: '12px',  
            width: '100%',  
            fontSize: '16px'  
        },  
        button: {  
            marginTop: '10px',  
            backgroundColor: '#e94e77',  
            color: 'white',  
            border: 'none',  
            borderRadius: '5px',  
            padding: '12px 0',  
            cursor: 'pointer',  
            transition: 'background 0.3s',  
            width: '100%',  
            fontSize: '16px'  
        }, formTitle: {  
            textAlign: 'center',  
            fontSize: '24px',  
            fontWeight: 'bold',  
        }  
    };  

    return (  
        <div style={styles.backgroundStyle}>  
            <div style={styles.formContainer}>  
            <h2 style={styles.formTitle}>Login Form</h2>   
                <p className="text-muted">Enter your credentials to continue</p>  
                {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}  
                <form onSubmit={handleSubmit}>  
                    <input  
                        type="text"  
                        style={styles.input}  
                        placeholder="Username"  
                        value={username}  
                        onChange={handleUsernameChange}  
                        required  
                    />  
                    <input  
                        type="password"  
                        style={styles.input}  
                        placeholder="Password"  
                        value={password}  
                        onChange={handlePasswordChange}  
                        required  
                    />  
                    <button type="submit" style={styles.button}>Login</button>  
                </form>  
                <p className="mt-3 text-center">  
                    Don't have an account? <Link to="/register" className="text-decoration-none">Sign up</Link>  
                </p>  
            </div>  
        </div>  
    );  
}