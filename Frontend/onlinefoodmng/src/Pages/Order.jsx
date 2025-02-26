import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import axios from 'axios';


export default function Order() {
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('selectedMenuItems')) || [];
    setSelectedMenuItems(storedItems);

    const updatedTotal = storedItems.reduce((sum, item) => {
      const discountPrice = item.discountType === 'percentage'
        ? item.price - (item.price * item.discount / 100)
        : item.price - item.discount;
      return sum + discountPrice;
    }, 0);

    setTotalPrice(updatedTotal);
  }, []);

  const handleRemoveItem = (itemToRemove) => {
    const updatedItems = selectedMenuItems.filter(item => item.id !== itemToRemove.id);
    setSelectedMenuItems(updatedItems);
    localStorage.setItem('selectedMenuItems', JSON.stringify(updatedItems));

    const updatedTotal = updatedItems.reduce((sum, item) => {
      const discountPrice = item.discountType === 'percentage'
        ? item.price - (item.price * item.discount / 100)
        : item.price - item.discount;
      return sum + discountPrice;
    }, 0);

    setTotalPrice(updatedTotal);
  };

  const handleBill = () => {
    // Store the cart and total price before navigating to the Bill page
    localStorage.setItem('cart', JSON.stringify(selectedMenuItems)); 
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

    // Clean up the selected menu items after placing the order
    localStorage.removeItem('selectedMenuItems');

    // Navigate to the Bill page
    navigate('/bill');
  };

  const handlePlaceOrder = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (!userId) {
      alert("User not logged in.");
      return;
    }

    const order = {
      orderDate: new Date().toISOString(),
      user: { id: userId },
      menuItems: selectedMenuItems.map(item => ({ id: item.id })),
      totalPrice
    };

    axios.post(`http://localhost:8080/api/order/ordersave`, order)
      .then(() => {
        alert("Order placed successfully!");
        localStorage.removeItem('selectedMenuItems');
        navigate('/order');
      })
      .catch((err) => console.error("Error placing order.", err.response?.data || err.message));
  };

  return (
    <div>
      <Header /><br /><br/>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Order Summary</h2>
        <p className="text-center">
          Go To <Link to="/menuitem" style={{ color: '#007bff', fontWeight: 'bold' }}>Menu</Link>
        </p>

        {selectedMenuItems.length > 0 ? (
          <>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Original Price</th>
                  <th>Discount</th>
                  <th>Final Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {selectedMenuItems.map((item) => {
                  const discountPrice = item.discountType === 'percentage'
                    ? item.price - (item.price * item.discount / 100)
                    : item.price - item.discount;
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.price} Rs</td>
                      <td>{item.discount} {item.discountType === 'percentage' ? "%" : "Rs"}</td>
                      <td>{discountPrice} Rs</td>
                      <td>
                        <button className="btn btn-danger" onClick={() => handleRemoveItem(item)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h4 className="mt-3">Total Price: {totalPrice} Rs</h4>
            <button className="btn btn-success" onClick={handlePlaceOrder} onMouseOut={handleBill}>Proceed to Bill</button>
          </>
        ) : (
          <p className="text-center">No items in the cart</p>
        )}
      </div>
    </div>
  );
}
