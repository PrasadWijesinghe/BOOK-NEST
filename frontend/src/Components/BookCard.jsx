// src/Components/BookCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ id, title, author, price, cover }) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div 
      className='bg-white shadow-lg rounded-lg overflow-hidden w-64 hover:scale-105 transition-transform duration-300 cursor-pointer'
      onClick={handleBookClick}
    >
      <img
        src={cover[0]}
        alt={title}
        className='h-80 w-full object-cover'
      />
      <div className='p-4 space-y-1'>
        <h2 className='font-bold text-lg text-gray-800'>{title}</h2>
        <p className='text-sm text-gray-500'>{author}</p>
        <p className='text-blue-700 font-bold text-base'>{price}</p>
        
      </div>
    </div>
  );
};

export default BookCard;
