import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewMenuItem.css'; // Include the custom CSS file

export default function ViewMenuItem() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/menu/menufindall')
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((error) => {
        console.log('Error fetching menu items:', error);
      });
  }, []);

  const deleteMenuItem = (id) => {
    axios
      .delete(`http://localhost:8080/api/menu/menudeletebyid/${id}`)
      .then((res) => {
        console.log('Menu item deleted successfully');
        setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting menu item:', error);
      });
  };

  return (
    <div className="container my-5" style={{ maxWidth: '1100px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <h1 className="text-center mb-4">Menu Items</h1>
      <p className="text-center mt-3">
        Go To Dashboard <Link to="/adash" className="text-primary fw-bold">Dashboard</Link>
      </p>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Discount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center text-muted">No menu items available</td>
              </tr>
            ) : (
              menuItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.availableQty}</td>
                  <td>{item.discount}</td>
                  <td>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-thumbnail"
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link to={`/updatemenuitem/${item.id}`} className="btn btn-primary btn-sm">
                        Update
                      </Link>
                      <button onClick={() => deleteMenuItem(item.id)} className="btn btn-danger btn-sm">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
