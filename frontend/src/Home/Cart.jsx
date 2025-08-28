import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { books } from '../assets/assets';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);
  const [showCart, setShowCart] = useState(true);
  const navigate = useNavigate();

  // Get book details for items in cart
  const cartItems = Object.entries(cart || {}).map(([bookId, quantity]) => {
    const book = books.find(b => b.id === bookId);
    return book ? { ...book, quantity } : null;
  }).filter(Boolean);

  // Calculate final price
  const finalPrice = cartItems.reduce((sum, item) => {
    // Remove currency symbol and parse price
    const priceNum = Number(item.price.replace(/[^0-9.]/g, ""));
    return sum + priceNum * item.quantity;
  }, 0);

  // Close cart handler
  const handleClose = () => {
    setShowCart(false);
    navigate(-1); // Go back to previous page
  };

  // Proceed to payment handler (dummy)
  const handlePayment = () => {
    alert('Proceeding to payment...');
    // You can navigate to a payment page here
  };

  if (!showCart) return null;

  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-4 py-2 font-bold"
        >
          × Close
        </button>
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center space-x-6 bg-white p-4 rounded shadow">
                <img src={item.cover[0]} alt={item.title} className="w-20 h-28 object-cover rounded" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">by {item.author}</p>
                  <p className="text-blue-700 font-bold">{item.price}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-8 p-4 bg-blue-50 rounded">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-2xl font-bold text-blue-700">
                ${finalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handlePayment}
              className="w-full mt-4 bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
