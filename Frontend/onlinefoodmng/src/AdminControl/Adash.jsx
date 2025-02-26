import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Adash() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication details (if stored in localStorage or sessionStorage)
    localStorage.removeItem("authToken"); 
    navigate("/"); // Redirect to login page
  };

  return (
    <div>
      <div className="container my-5">
        {/* Log Out Button */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>

        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Manage Menu Items</h5>
                <p className="card-text">
                  Add menu items.
                </p>
                <Link to="/addmenuitem" className="btn btn-primary">
                  Add Menu Item
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Manage Menu Items</h5>
                <p className="card-text">
                  View, update and delete Menu Items.
                </p>
                <Link to="/viewmenuitem" className="btn btn-primary">
                  View Menu Items
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Manage Orders</h5>
                <p className="card-text">
                  View and manage customer orders.
                </p>
                <Link to="/vieworder" className="btn btn-primary">
                  View Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
