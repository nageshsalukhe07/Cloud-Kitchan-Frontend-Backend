import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import { FaHome, FaUtensils, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import foodlogo from '../Images/foodlogo.png';

export default function Header() {
  const styles = {
    navbar: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
      backdropFilter: 'blur(10px)', // Frosted glass effect
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '10px 20px',
      position: 'fixed',
      width: '100%',
      zIndex: '999',
    },
    logo: {
      width: '50px',
      height: '50px',
    },
    navLink: {
      color: '#333',
      fontSize: '1rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      padding: '8px 15px',
      marginRight: '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'color 0.3s',
    },
    navLinkHover: {
      color: '#e94e77',
    },
    button: {
      background: 'linear-gradient(to right, #e94e77, #d43f6a)',
      border: 'none',
      color: 'white',
      padding: '8px 15px',
      fontSize: '1rem',
      borderRadius: '5px',
      margin: '5px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background 0.3s',
    },
    buttonHover: {
      background: 'linear-gradient(to right, #d43f6a, #e94e77)',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    navItems: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginRight: '15px',
    },
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={styles.navbar}>
      <div className="container-fluid" style={styles.container}>
        <Link to="/dashboard">
          <img src={foodlogo} alt="logo" style={styles.logo} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul style={styles.navItems}>
            <li style={styles.navItem}>
              <Link to="/home" style={styles.navLink} onMouseOver={(e) => e.target.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.target.style.color = ''}>
                🏠 Home 
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/menuitem" style={styles.navLink} onMouseOver={(e) => e.target.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.target.style.color = ''}>
              🍽️ Menu 
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/order" style={styles.navLink} onMouseOver={(e) => e.target.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.target.style.color = ''}>
              🛒 Place Order 
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/about" style={styles.navLink} onMouseOver={(e) => e.target.style.color = styles.navLinkHover.color} onMouseOut={(e) => e.target.style.color = ''}>
                 ℹ️ About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/" style={styles.button} onMouseOver={(e) => e.target.style.background = styles.buttonHover.background} onMouseOut={(e) => e.target.style.background = ''}>
          🔐 LogOut
          </Link>
        </div>
      </div>
    </nav>
  );
}
