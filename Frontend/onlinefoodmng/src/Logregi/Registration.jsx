import React, { useState } from 'react';  
import axios from 'axios';  
import { Link, useNavigate } from 'react-router-dom';  
import regiback from '../Images/regis.jpg';  
import '../Logregi/Registration.css'; // Link to your existing CSS  

export default function Registration() {  
    const [name, setName] = useState('');  
    const [address, setAddress] = useState('');  
    const [email, setEmail] = useState('');  
    const [mobileno, setMobileNo] = useState('');  
    const [username, setUserName] = useState('');  
    const [password, setPassword] = useState('');  
    const [cpwd, setCpwd] = useState('');  

    const navigate = useNavigate();  

    const handleSubmit = (e) => {  
        e.preventDefault();  

        if (password !== cpwd) {  
            alert('Passwords do not match!');  
            return;  
        }  

        const userData = { name, address, email, mobileno, username, password,cpwd };  

        axios.post("http://localhost:8080/api/user/register", userData)  
            .then((response) => {  
                alert(`Registration Successful!\nWelcome, ${name}!`);  
                navigate('/');  
            })  
            .catch((error) => {  
                console.error(error);  
                alert('Registration failed. Please try again.');  
            });  
    };  

    const styles = {  
        backgroundStyle: {  
            backgroundImage: `url(${regiback})`,  
            backgroundSize: 'cover',  
            backgroundPosition: 'center',  
            backgroundAttachment: 'fixed',  
            minHeight: '100vh',  
            display: 'flex',  
            justifyContent: 'center',  
            alignItems: 'center',  
            padding: '20px'  
        },  
        formContainer: {  
            background: 'rgba(255, 255, 255, 0.9)',  
            borderRadius: '15px',  
            padding: '30px',  
            width: '100%',  
            maxWidth: '450px',  // Reduced width for the form container  
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',  
            backdropFilter: 'blur(10px)',  
        },  
        input: {  
            background: 'rgba(0, 0, 0, 0.1)',  
            color: '#333',  
            border: '1px solid #ccc',  
            borderRadius: '5px',  
            marginBottom: '15px',  // Reduced space between inputs  
            padding: '8px',  
            width: '48%',  // Decreased width for input boxes  
            fontSize: '14px',  
            display: 'inline-block',  // To make them appear side by side  
            marginRight: '4%'  // Adds space between pairs  
        },  
        button: {  
            marginTop: '10px',  
            backgroundColor: '#e94e77',  
            color: 'white',  
            border: 'none',  
            borderRadius: '5px',  
            padding: '12px 30px',  
            cursor: 'pointer',  
            transition: 'background 0.3s',  
            width: '100%',  
            fontSize: '16px'  
        },  
        formGroup: {  
            display: 'flex',  
            justifyContent: 'space-between',  
        },  
        confirmPasswordGroup: {  
            display: 'flex',  
            justifyContent: 'center',  // Center the Confirm Password field  
            marginBottom: '15px',  
        },  
        formTitle: {  
            textAlign: 'center',  
            fontSize: '24px',  
            fontWeight: 'bold',  
        },  
        textMuted: {  
            textAlign: 'center',  
            fontSize: '14px',  
            color: '#888',  
        },  
        link: {  
            textDecoration: 'none',  
            color: '#e94e77',  
        }  
    };  

    return (  
        <div style={styles.backgroundStyle}>  
            <div style={styles.formContainer}>  
                <h2 style={styles.formTitle}>Registration Form</h2>  
                <p style={styles.textMuted}>Create your account to get started</p>  
                <form onSubmit={handleSubmit}>  
                    <div style={styles.formGroup}>  
                        <input  
                            type="text"  
                            style={styles.input}  
                            placeholder="Name"  
                            value={name}  
                            onChange={(e) => setName(e.target.value)}  
                            required  
                        />  
                        <input  
                            type="text"  
                            style={styles.input}  
                            placeholder="Address"  
                            value={address}  
                            onChange={(e) => setAddress(e.target.value)}  
                            required  
                        />  
                    </div>  
                    <div style={styles.formGroup}>  
                        <input  
                            type="email"  
                            style={styles.input}  
                            placeholder="Email"  
                            value={email}  
                            onChange={(e) => setEmail(e.target.value)}  
                            required  
                        />  
                        <input  
                            type="text"  
                            style={styles.input}  
                            placeholder="Mobile No"  
                            value={mobileno}  
                            onChange={(e) => setMobileNo(e.target.value)}  
                            required  
                        />  
                    </div>  
                    <div style={styles.formGroup}>  
                        <input  
                            type="text"  
                            style={styles.input}  
                            placeholder="Username"  
                            value={username}  
                            onChange={(e) => setUserName(e.target.value)}  
                            required  
                        />  
                        <input  
                            type="password"  
                            style={styles.input}  
                            placeholder="Password"  
                            value={password}  
                            onChange={(e) => setPassword(e.target.value)}  
                            required  
                        />  
                    </div>  
                    <div style={styles.confirmPasswordGroup}>  
                        <input  
                            type="password"  
                            style={styles.input}  
                            placeholder="Confirm Password"  
                            value={cpwd}  
                            onChange={(e) => setCpwd(e.target.value)}  
                            required  
                        />  
                    </div>  
                    <button type="submit" style={styles.button}>Register</button>  
                </form>  
                <p className="mt-3 text-center">  
                    Already have an account? <Link to="/" style={styles.link}>Sign in now</Link>  
                </p>  
            </div>  
        </div>  
    );  
}
