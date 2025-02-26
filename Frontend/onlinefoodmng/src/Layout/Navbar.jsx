import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import external CSS file for header styling
import foodlogo from '../Images/foodlogo.png';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar fixed-top">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/register"></a> */}
          <Link className="nav-link active" aria-current="page" to="/register"> <img src={foodlogo} alt="logo" className="logo" /></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home"> Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/menuitem"> Menu </Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about"> About </Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/blog"> Blog </Link>

              </li>
             
            </ul>
          </div>
          <div className="App d-flex justify-content-end p-1">
        <Link className="btn btn-gradient w-100"  to="/">SignIn</Link>
        </div>
        <div className="App d-flex justify-content-end p-1">
        <Link className="btn btn-gradient w-100"  to="/register">SignUp</Link>
        </div>
        </div>
      </nav>
    </div>
  );
}
