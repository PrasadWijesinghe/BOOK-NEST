import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../Context/AppContext';

const Login = () => {


  const navigate = useNavigate();

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + '/api/auth/login',
        { email, password },
        { withCredentials: true }
      );
      if (data.success) {
        setIsLoggedin(true);
        await getUserData();
        navigate('/');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };


  return (
    <div className='flex flex-col h-screen w-full bg-blue-50'>
      <NavBar/>
      {/* Main Content */}
      <div className='flex flex-col md:flex-row flex-1 items-center justify-center md:justify-around p-4'>

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


        <form className='space-y-5' onSubmit={onSubmitHandler}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
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

          <div className='text-right'>
            <a href='#' onClick={()=>navigate('/reset-password')} className='text-white underline text-sm hover:text-blue-100'>Forgot your password?</a>
          </div>

          <button 
            type='submit'
            className='bg-blue-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full'
          >
            Sign In
          </button>
        </form>

        <p className='text-white'>Dont Have Account ? Register <a className='underline hover:text-blue-100' onClick={()=>navigate('/register')} > Here</a></p>

        <p className='text-white text-sm '>
          By clicking Sign In, you agree to our <a href='#' className='underline hover:text-blue-100'>Terms & Conditions</a>.
        </p>
      </div>

      </div>
    </div>
  );
};

export default Login;
