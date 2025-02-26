import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Layout/Header';
import './MenuItem.css';

export default function MenuItem() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [addedMessage, setAddedMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/menu/menufindall')
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.error('Error fetching menu items:', err));
  }, []);

  const handleMenuItemChange = (menuItem) => {
    const isSelected = selectedMenuItems.includes(menuItem);
    const updatedSelection = isSelected
      ? selectedMenuItems.filter((item) => item.id !== menuItem.id)
      : [...selectedMenuItems, menuItem];

    setSelectedMenuItems(updatedSelection);
    localStorage.setItem('selectedMenuItems', JSON.stringify(updatedSelection));

    setAddedMessage(`${menuItem.name} has been added to the cart!`);
    setTimeout(() => {
      setAddedMessage('');
    }, 3000);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMenuItems = menuItems.filter((menu) =>
    menu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    menu.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />

      {/* Show message at the top */}
      {addedMessage && (
        <div className="alert alert-success text-center fixed-top mt-3 mx-auto" style={{ width: '50%' }}>
          {addedMessage}
        </div>
      )}

      <div className="container mt-5">
        <h2 className="text-center mb-4">Menu Items</h2>

        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="form-control d-inline-block"
            style={{ width: '500px' }}
          />
          <div className="mt-4">
            <Link to="/order" className="btn btn-primary me-3">View Cart</Link>
            <Link to="/orderhistory" className="btn btn-primary">View Orders</Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredMenuItems.length > 0 ? (
            filteredMenuItems.map((menu, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img
                    src={menu.img}
                    className="card-img-top"
                    alt={menu.name || 'Menu item'}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{menu.name}</h5>
                    <p className="card-text">{menu.description}</p>
                    <p className="card-text"><strong>Price:</strong> {menu.price} Rs</p>
                    <p className="card-text"><strong>Available Quantity:</strong> {menu.availableQty}</p>
                    <p className="card-text"><strong>Discount:</strong> {menu.discount}%</p>
                  </div>
                  <div className="card-footer bg-white">
                    <button className="btn btn-primary w-100" onClick={() => handleMenuItemChange(menu)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No menu items found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
