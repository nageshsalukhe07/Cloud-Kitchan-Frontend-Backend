import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import regiback from '../Images/regis.jpg';  


export default function UpdateMenuItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [availableQty, setAvailableQty] = useState('');
    const [discount, setDiscount] = useState('');
    const [img, setImg] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/menu/menufindbyid/${id}`)
            .then(response => {
                const menuItem = response.data;
                setName(menuItem.name);
                setDescription(menuItem.description);
                setPrice(menuItem.price);
                setAvailableQty(menuItem.availableQty);
                setDiscount(menuItem.discount);
                setImg(menuItem.img);
            })
            .catch(error => {
                console.error('Error fetching menu item:', error);
            });
    }, [id]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        
        const updatedMenuItem = {
            name,
            description,
            price: parseInt(price),
            availableQty: parseInt(availableQty),
            discount: parseFloat(discount),
            img,
        };
        
        axios.put(`http://localhost:8080/api/menu/menuupdate/${id}`, updatedMenuItem)
            .then(() => {
                alert('Menu item updated successfully!');
                navigate('/viewmenuitem');
            })
            .catch(error => {
                alert('Failed to update menu item. Please try again.');
                console.error('Error updating menu item:', error);
            });
    };

    const styles = {
        pageContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: `url(${regiback})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(6px)',
        },
        card: {
            width: isMobile ? '90%' : '50%',
            padding: '30px',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        },
        title: {
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
        },
        formGroup: {
            display: isMobile ? 'block' : 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px',
        },
        inputContainer: {
            width: isMobile ? '100%' : '48%',
            marginBottom: isMobile ? '10px' : '0',
        },
        input: {
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
        },
        textarea: {
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
            resize: 'none',
            height: '80px',
        },
        button: {
          width: '100%',
          padding: '12px',
          fontSize: '18px',
          backgroundColor: 'orange',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
          transition: '0.3s',
      },
        buttonHover: {
            backgroundColor: '#0056b3',
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                <h2 style={styles.title}>Update Menu Item</h2>
                <p className="mt-3 text-center">  
                    Go To Dashboard <Link to="/adash" style={styles.link}>Dashboard</Link>  
                </p>
                <form onSubmit={handleUpdate}>
                    <div style={styles.formGroup}>
                        <div style={styles.inputContainer}>
                            <label>Name:</label>
                            <input type="text" style={styles.input} value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div style={styles.inputContainer}>
                            <label>Price:</label>
                            <input type="number" style={styles.input} value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </div>
                    </div>
                    <div style={styles.formGroup}>
                        <div style={styles.inputContainer}>
                            <label>Available Quantity:</label>
                            <input type="number" style={styles.input} value={availableQty} onChange={(e) => setAvailableQty(e.target.value)} required />
                        </div>
                        <div style={styles.inputContainer}>
                            <label>Discount (%):</label>
                            <input type="number" step="0.01" style={styles.input} value={discount} onChange={(e) => setDiscount(e.target.value)} required />
                        </div>
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea style={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Image URL:</label>
                        <input type="text" style={styles.input} value={img} onChange={(e) => setImg(e.target.value)} required />
                    </div>
                    <button type="submit" style={styles.button} onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}>Update Item</button>
                </form>
            </div>
        </div>
    );
}
