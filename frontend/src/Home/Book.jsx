import React from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../assets/assets'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const Book = () => {

    const {bookId} = useParams();
    console.log(bookId)

 
    const book = books.find(book => book.id === bookId);


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
                        
                        <div className='space-y-4'>
                            <button className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300'>
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
        </div>
    )
}

export default Book
