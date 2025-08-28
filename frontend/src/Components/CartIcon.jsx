import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cart } = useContext(AppContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Object.values(cart || {}).reduce((a, b) => a + b, 0));
  }, [cart]);

  return (
    <Link to="/cart">
      <div className="fixed top-24 right-6 z-50 flex flex-col items-center">
        <div className="relative bg-white rounded-full shadow-lg p-3">
          <span role="img" aria-label="cart" className="text-2xl">🛒</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full px-2 text-xs">
              {count}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CartIcon;