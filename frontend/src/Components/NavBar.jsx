import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const NavBar = () => {

    const navigate = useNavigate()
  const { userData, isLoggedin, backendUrl, setUserData, setIsLoggedin } = useContext(AppContext);

  const sendVerificationOtp = async()=>{
    try{
      axios.defaults.withCredentials = true;

      const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp')

      if(data.success){
        navigate('/email-verify')
        toast.success(data.message)
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
      toast.error(error.message)
    }
  }

  const logout = async()=>{
    try{
        axios.defaults.withCredentials = true
        const{data} = await axios.post(backendUrl + '/api/auth/logout')
        data.success && setIsLoggedin(false)
        data.success && setUserData(false)
        navigate('/')
    }
    catch(error){
        toast.error(error.message)
    }
  }

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

        {isLoggedin && userData ? (
          <div className='relative group'>
            <div className='rounded-full bg-black text-white w-14 h-14 flex items-center justify-center font-bold text-2xl transition-all duration-200 cursor-pointer'>
              {userData.name && userData.name[0] ? userData.name[0].toUpperCase() : "U"}
            </div>
            <div className='absolute hidden group-hover:block top-full right-0 mt-2 z-10 bg-white text-black rounded shadow-lg'>
              <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
                {!userData.isAccountVerified && (
                  <li onClick={sendVerificationOtp} className='px-2 py-1 hover:bg-gray-200 cursor-pointer'>Verify Email</li>
                )}
                <li onClick={logout} className='px-2 py-1 hover:bg-gray-200 cursor-pointer pr-10'>Log Out</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className='flex justify-between items-center space-x-4'>
            <a href='/register' className='px-2 hover:text-blue-400'>Register</a>
            <Link to="/login">
              <button className='bg-blue-700 text-white rounded-full px-6 py-2 hover:bg-blue-400 transition duration-300'>Sign In</button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}

export default NavBar
