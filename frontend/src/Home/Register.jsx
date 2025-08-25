import React, { useContext, useState } from 'react';
import NavBar from '../Components/NavBar';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContext);

  const [state] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await axios.post(
        backendUrl + '/api/auth/register',
        { name, email, password },
        { withCredentials: true }
      );
      if (data.success) {
        setIsLoggedin(true);
        await getUserData();
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
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

          <form className='space-y-5' onSubmit={onSubmitHandler}>
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
              onChange={e => setEmail(e.target.value)}
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
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />

            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
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
