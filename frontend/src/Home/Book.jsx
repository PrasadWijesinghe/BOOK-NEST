import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { Link, useParams } from 'react-router-dom';
import { books } from '../assets/assets'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import CartIcon from '../Components/CartIcon';

const Book = () => {
    const { bookId } = useParams();
    const { addToCart, cart } = useContext(AppContext);
    const [quantity, setQuantity] = useState(1);
    const [count, setCount] = useState(0);

    const book = books.find(book => book.id === bookId);

    useEffect(() => {
        // Sum all quantities in cart
        setCount(Object.values(cart).reduce((a, b) => a + b, 0));
    }, [cart]);

    if (!book) {
        return (
            <div>
                <NavBar />
                <div className='flex justify-center items-center h-screen'>
                    <p className='text-xl text-gray-600'>Book not found!</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <NavBar />
            <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col md:flex-row gap-8'>
                    {/* Book Cover */}
                    <div className='md:w-1/3'>
                        <img 
                            src={book.cover[0]} 
                            alt={book.title}
                            className='w-full max-w-md mx-auto rounded-lg shadow-lg'
                        />
                    </div>
                    {/* Book Details */}
                    <div className='md:w-2/3 space-y-6'>
                        <h1 className='text-4xl font-bold text-gray-800'>{book.title}</h1>
                        <h2 className='text-2xl text-gray-600'>by {book.author}</h2>
                        <p className='text-3xl text-blue-600 font-bold'>{book.price}</p>
                        <div className='flex items-center space-x-4'>
                            <label htmlFor="quantity" className="font-semibold">Quantity:</label>
                            <input
                                id="quantity"
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={e => setQuantity(Number(e.target.value))}
                                className="w-16 px-2 py-1 border rounded"
                            />
                        </div>
                        <div className='space-y-4'>
                            <button
                                className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300'
                                onClick={() => addToCart(book.id, quantity)}
                            >
                                Add to Cart
                            </button>
                            <button className='ml-4 bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition duration-300'>
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <CartIcon />
        </div>
    )
}

export default Book
