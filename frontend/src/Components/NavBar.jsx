import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center px-10 py-3 text-lg bg-blue-50'>
            <Link to="/">
            <div className='flex items-center space-x-2'>
                <img src={assets.LOGO} alt='Logo' className='h-8 w-auto' />
                <h1 className='font-extrabold'>BOOK NEST</h1>
            </div>
            </Link>

            <div className='flex items-center space-x-8 justify-between'>
                <a href='/' className='hover:text-blue-400 '>Home</a>
                <a href='#' className='hover:text-blue-400 '>About</a>
                <a href='/shop' className='hover:text-blue-400 '>Shop</a>
                <a href='#' className='hover:text-blue-400 '>Contact</a>
            </div>

            <div className='flex justify-between items-center space-x-4'>
                <a href='/register' className='px-2 hover:text-blue-400 ' >Register</a>
                <Link to="/login">
                <button className='bg-blue-700 text-white rounded-full px-6 py-2 hover:bg-blue-400 transition duration-300'>Sign In</button>
                </Link>
            </div>

        </nav>
      
    </div>
  )
}

export default NavBar
