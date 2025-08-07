import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import NavBar from '../Components/NavBar';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful! Please login.');
        window.location.href = '/login';
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
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
            Join the <span className='text-blue-600'>Book Nest</span> Community
          </h1>
          <p className='mt-4 text-gray-600 text-center md:text-left max-w-md'>
            Create your account and dive into a world of stories, insights, and adventures. Your next favorite book is just a click away.
          </p>
        </div>

        {/* Right Side: Register Form */}
        <div className='flex flex-col space-y-5 bg-blue-400 p-8 rounded-2xl max-w-sm w-full shadow-lg'>
          <h1 className='text-3xl font-bold text-white text-center'>Sign Up</h1>

          {error && (
            <div className='bg-red-500 text-white p-2 rounded text-sm'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-5'>
            <input 
              type='text'
              name='fullName'
              placeholder='Full Name' 
              value={formData.fullName}
              onChange={handleChange}
              required
              className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />

            <input 
              type='text'
              name='username'
              placeholder='Username' 
              value={formData.username}
              onChange={handleChange}
              required
              className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />

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
              type='tel'
              name='phone'
              placeholder='Phone' 
              value={formData.phone}
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

            <input 
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password' 
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />

            <button 
              type='submit'
              disabled={loading}
              className='bg-blue-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full disabled:opacity-50'
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
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
