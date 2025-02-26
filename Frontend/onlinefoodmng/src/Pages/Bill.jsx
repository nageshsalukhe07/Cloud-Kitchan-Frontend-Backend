import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import './Bill.css'; // CSS File for Styling

export default function Bill() {
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [billGenerated, setBillGenerated] = useState(false);

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const price = JSON.parse(localStorage.getItem('totalPrice')) || 0;
      setSelectedMenuItems(Array.isArray(cart) ? cart : []);
      setTotalPrice(typeof price === 'number' ? parseFloat(price) : 0);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      setSelectedMenuItems([]);
      setTotalPrice(0);
    }
  }, []);

  const handleGenerateBill = () => {
    if (paymentMethod) {
      setBillGenerated(true);
      saveBillToLocalStorage();
    } else {
      alert("Please select a payment method before generating the bill!");
    }
  };

  const saveBillToLocalStorage = () => {
    const billData = {
      date: new Date().toLocaleString(),
      items: selectedMenuItems,
      total: totalPrice,
      paymentMethod,
    };
    const savedBills = JSON.parse(localStorage.getItem('savedBills')) || [];
    savedBills.push(billData);
    localStorage.setItem('savedBills', JSON.stringify(savedBills));
    alert("Bill saved successfully!");
  };

  return (
    <div>
      <Header />
      <div className="container mt-5 bill-page">
        <div className="bill-card shadow-lg p-4">
          <h2 className="text-center bill-title">🧾 Customer Bill</h2>
          <p className="text-center date-text">📅 {new Date().toLocaleString()}</p>

          {!billGenerated && (
            <div className="text-center mt-3">
              <label className="me-2 fw-bold">Select Payment Method:</label>
              <select
                className="form-select d-inline w-auto custom-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="Cash">💰 Cash</option>
                <option value="Online">💳 Online</option>
                <option value="Credit Card">🏦 Credit Card</option>
              </select>
            </div>
          )}

          {!billGenerated && (
            <div className="text-center mt-4">
              <button className="btn btn-success btn-lg pulse-button" onClick={handleGenerateBill}>
                Generate Bill 📝
              </button>
            </div>
          )}

          {billGenerated && selectedMenuItems.length > 0 && (
            <div className="bill-container mt-4">
              <table className="table table-striped table-hover bill-table">
                <thead className="table-dark">
                  <tr>
                    <th>Item Name</th>
                    <th>Original Price</th>
                    <th>Discount</th>
                    <th>Final Price</th>
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
                        <td>₹{item.price}</td>
                        <td>{item.discount} {item.discountType === 'percentage' ? "%" : "₹"}</td>
                        <td>₹{discountPrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <h4 className="text-end total-price">Total: ₹{totalPrice}</h4>

              <div className="text-center mt-3">
                <h5 className="payment-method">Payment Method: <strong>{paymentMethod}</strong></h5>
              </div>

              <div className="text-center mt-4">
                <button className="btn btn-primary print-button me-2" onClick={() => window.print()}>
                  Print Bill 🖨️
                </button>
                <button className="btn btn-secondary save-button" onClick={saveBillToLocalStorage}>
                  Save Bill 💾
                </button>
              </div>
            </div>
          )}

          {billGenerated && selectedMenuItems.length === 0 && (
            <p className="text-center text-danger fw-bold mt-3">No items in your bill.</p>
          )}
        </div>
      </div>
    </div>
  );
}
