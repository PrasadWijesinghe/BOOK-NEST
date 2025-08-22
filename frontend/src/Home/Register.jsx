import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import NavBar from '../Components/NavBar';
import { useState } from 'react';

const Register = () => {

    const [state, setState] = useState('Sign Up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='flex flex-col h-screen w-full bg-blue-50 p-4'>
      <NavBar/>
      
      {/* Main Content */}
      <div className='flex flex-col md:flex-row flex-1 items-center justify-center md:justify-around'>

        {/* Left Side: Welcome Section */}
        <div className='mb-10 md:mb-0'>
          <h1 className='text-4xl font-extrabold text-blue-800 text-center md:text-left'>
            Join the <span className='text-blue-600'>Book Nest</span> Community
          </h1>
          <p className='mt-4 text-gray-600 text-center md:text-left max-w-md'>
            Create your account and dive into a world of stories, insights, and adventures. Your next favorite book is just a click away.
          </p>
        </div>

        {/* Right Side: Register Form */}
        <div className='flex flex-col space-y-5 bg-blue-400 p-8 rounded-2xl max-w-sm w-full shadow-lg'>
          <h1 className='text-3xl font-bold text-white text-center'>Sign Up</h1>

          <form className='space-y-5'>
          {state === 'Sign Up' && (
            <input onChange={e =>setName(e.target.value)}
            value={name}
              type='text'
              name='fullName'
              placeholder='Full Name' 
              required
              className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />
            )}


            <input 
            onChange={e =>setEmail(e.target.value)}
            value={email}
              type='email'
              name='email'
              placeholder='Email' 
              required
              className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />


            <input 
              type='password'
              name='password'
              placeholder='Password' 
              required
              className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />

            <input 
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password' 
              required
              className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />

            <button 
              type='submit'
              className='bg-blue-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full'
            >
              Sign Up
            </button>
          </form>

          <p className='text-white'>Already Have Account ? Sign In <a className='underline hover:text-blue-100' href='/login'> Here</a></p>

          <p className='text-white text-sm'>
            By clicking Sign Up, you agree to our <a href='#' className='underline hover:text-blue-100'>Terms & Conditions</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
