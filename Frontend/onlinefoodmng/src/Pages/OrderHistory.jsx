import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';

export default function OrderHistory() {
    const [orders, setOrders] = useState([]);

    // Fetch all orders
    useEffect(() => {
        axios.get('http://localhost:8080/api/order/orderfindall')
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                console.error('Error fetching orders:', err);
            });
    }, []);

    // Cancel order function
    const cancelOrder = (orderId) => {
        axios.delete(`http://localhost:8080/api/order/orderdeletebyid/${orderId}`)
            .then(() => {
                console.log('Order cancelled successfully');
                setOrders((prevOrders) => prevOrders.filter((order) => order.oderId !== orderId));
            })
            .catch((error) => {
                console.error('Error cancelling order:', error);
            });
    };

    // Styles Object
    const styles = {
        container: {
            maxWidth: '1100px',
            margin: '40px auto',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
        },
        heading: {
            textAlign: 'center',
            marginBottom: '20px'
        },
        dashboardLink: {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#007bff',
            fontWeight: 'bold'
        },
        tableContainer: {
            overflowX: 'auto'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left'
        },
        tableHeader: {
            backgroundColor: '#343a40',
            color: '#fff'
        },
        tableHeaderCell: {
            padding: '10px'
        },
        tableRow: {
            borderBottom: '1px solid #ddd'
        },
        tableCell: {
            padding: '10px'
        },
        noOrdersCell: {
            padding: '15px',
            textAlign: 'center',
            fontSize: '18px',
            color: '#555'
        },
        cancelButton: {
            padding: '8px 12px',
            fontSize: '14px',
            backgroundColor: '#d9534f',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: '0.3s'
        },
        cancelButtonHover: {
            backgroundColor: '#c9302c'
        }
    };

    return (
        <div>
            <Header />
        <div style={styles.container}>
            <h1 style={styles.heading}>Orders</h1>
            <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                Go To Menu Item <Link to="/menuitem" style={styles.dashboardLink}>Menu Item</Link>
            </p>

            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead style={styles.tableHeader}>
                        <tr>
                            <th style={styles.tableHeaderCell}>Order Id</th>
                            <th style={styles.tableHeaderCell}>Order Date</th>
                            <th style={styles.tableHeaderCell}>User Id</th>
                            <th style={styles.tableHeaderCell}>Menu Item Id</th>
                            <th style={styles.tableHeaderCell}>Total Price</th>
                            <th style={styles.tableHeaderCell}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 ? (
                            <tr>
                                <td colSpan="6" style={styles.noOrdersCell}>
                                    No orders available
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => (
                                <tr key={order.oderId} style={styles.tableRow}>
                                    <td style={styles.tableCell}>{order.oderId}</td>
                                    <td style={styles.tableCell}>{order.orderDate}</td>
                                    <td style={styles.tableCell}>{order.user.id}</td>
                                    <td style={styles.tableCell}>
                                        {order.menuItems.map((item) => item.id).join(', ')}
                                    </td>
                                    <td style={styles.tableCell}>{order.totalPrice}</td>
                                    <td style={styles.tableCell}>
                                        <button
                                            onClick={() => cancelOrder(order.oderId)}
                                            style={styles.cancelButton}
                                            onMouseOver={(e) => e.target.style.backgroundColor = styles.cancelButtonHover.backgroundColor}
                                            onMouseOut={(e) => e.target.style.backgroundColor = styles.cancelButton.backgroundColor}
                                        >
                                            Cancel Order
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}
