import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store user token/data in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login successful!');
        window.location.href = '/'; // Redirect to home
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

        {error && (
          <div className='bg-red-500 text-white p-2 rounded text-sm'>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-5'>
          <input 
            type='email'
            name='email'
            placeholder='Email' 
            value={formData.email}
            onChange={handleChange}
            required
            className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
          />

          <input 
            type='password'
            name='password'
            placeholder='Password' 
            value={formData.password}
            onChange={handleChange}
            required
            className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
          />

          <div className='text-right'>
            <a href='#' className='text-white underline text-sm hover:text-blue-100'>Forgot your password?</a>
          </div>

          <button 
            type='submit'
            disabled={loading}
            className='bg-blue-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full disabled:opacity-50'
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className='text-white'>Dont Have Account ? Register <a className='underline hover:text-blue-100' href='/register'> Here</a></p>

        <p className='text-white text-sm '>
          By clicking Sign In, you agree to our <a href='#' className='underline hover:text-blue-100'>Terms & Conditions</a>.
        </p>
      </div>

      </div>
    </div>
  );
};

export default Login;
