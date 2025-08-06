import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const Login = () => {
  return (
    <div className='flex flex-col h-screen w-full bg-blue-50 p-4'>

      <NavBar/>
    

      {/* Main Content */}
      <div className='flex flex-col md:flex-row flex-1 items-center justify-center md:justify-around'>

        {/* Left Side: Welcome Section */}
        <div className='mb-10 md:mb-0'>

          <h1 className='text-4xl font-extrabold text-blue-800 text-center md:text-left'>
          Welcome Back to <span className='text-blue-600'>Book Nest</span>
        </h1>
        <p className='mt-4 text-gray-600 text-center md:text-left max-w-md'>
          Discover your next favorite read. Log in to continue exploring our curated library of timeless classics and modern bestsellers.
        </p>
      </div>

      {/* Right Side: Login Form */}
      <div className='flex flex-col space-y-5 bg-blue-400 p-8 rounded-2xl max-w-sm w-full shadow-lg'>

        <h1 className='text-3xl font-bold text-white text-center'>Sign In</h1>

        <input 
          type='email' 
          placeholder='Email' 
          className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600'
        />

        <input 
          type='password' 
          placeholder='Password' 
          className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600'
        />

        <div className='text-right'>
          <a href='#' className='text-white underline text-sm hover:text-blue-100'>Forgot your password?</a>
        </div>

        <button className='bg-blue-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
          Sign In
        </button>
        <p className=' text-white'>Dont Have Account ? Register <a className=' underline hover:text-blue-100' href='/register'> Here</a></p>

        <p className='text-white text-sm '>
          By clicking Sign In, you agree to our <a href='#' className='underline hover:text-blue-100'>Terms & Conditions</a>.
        </p>
      </div>

      </div>
    </div>
  );
};

export default Login;
