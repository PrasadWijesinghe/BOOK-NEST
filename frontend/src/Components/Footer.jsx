import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div>

        <footer className='bg-blue-900 text-white px-10 py-12 mt-16'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>

                    {/* Logo and Description */}
                    <div className='space-y-4'>
                    <div className='flex items-center space-x-2'>
                        <img src={assets.LOGO} alt='Logo' className='h-10 w-auto' />
                        <h1 className='text-xl font-extrabold'>BOOK NEST</h1>
                    </div>
                    <p className='text-sm text-gray-300'>
                        Welcome to our book haven, where stories come alive and knowledge knows no bounds.
                        Explore our curated collection of timeless classics, modern bestsellers, and hidden literary gems.
                        Connect with us on social media for updates, recommendations, and offers.
                    </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                    <h2 className='text-lg font-semibold mb-4'>Quick Links</h2>
                    <ul className='space-y-2 text-sm text-gray-300'>
                        <li><a href="#" className='hover:text-white transition'>Home</a></li>
                        <li><a href="#" className='hover:text-white transition'>About Us</a></li>
                        <li><a href="#" className='hover:text-white transition'>Shop</a></li>
                        <li><a href="#" className='hover:text-white transition'>Contact</a></li>
                    </ul>
                    </div>

                    {/* Social & Contact Info */}
                    <div>
                    <h2 className='text-lg font-semibold mb-4'>Get in Touch</h2>
                    <ul className='text-sm space-y-2 text-gray-300'>
                        <li>Email: support@booknest.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Location: 123 Book Lane, Reading City</li>
                    </ul>
                    <div className='flex space-x-4 mt-4'>
                        {/* Replace with actual icons or SVGs */}
                        <a href="#" className='hover:text-white transition'>Facebook</a>
                        <a href="#" className='hover:text-white transition'>Twitter</a>
                        <a href="#" className='hover:text-white transition'>Instagram</a>
                    </div>
                    </div>

                </div>

                {/* Bottom copyright */}
                <div className='mt-10 border-t border-blue-800 pt-4 text-center text-sm text-gray-400'>
                    &copy; {new Date().getFullYear()} Book Nest. All rights reserved.
                </div>
            </footer>
      
    </div>
  )
}

export default Footer
