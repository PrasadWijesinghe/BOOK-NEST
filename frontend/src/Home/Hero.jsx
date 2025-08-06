import React from 'react'
import { assets,books } from '../assets/assets';
import BookCard from '../Components/BookCard'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer'

const Hero = () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-white '>
        <NavBar/>
        <section className='flex flex-col items-center justify-center text-center space-y-5  min-h-[80vh] px-6 py-10'>

            <h1 className='font-extrabold text-3xl md:text-5xl'>Discover Your Next <br/> Favorite Book</h1>
            <p className='text-gray-600 text-lg'>Browse our curated collection of timeless classics <br/>and modern bestsellers</p>
            <button className='bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition duration-300'>Shop Now</button>
        </section>

        <section className='px-10 py-10 bg-blue-100'>
            <h1 className='text-3xl font-bold text-center mb-8'>Featured Books</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center'>
                {books.slice(0,8).map((book, index) => (
                <BookCard key={index} {...book} />
                ))}
            </div>
        </section>

        <section className="bg-blue-50 px-10 py-16 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                At <span className="font-semibold text-blue-700">BOOK NEST</span>, we believe in the power of stories to inspire, educate, and entertain. Our mission is to bring readers closer to the books they love and help them discover new favorites along the way.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're a fan of timeless classics, modern bestsellers, or niche genres, our carefully curated collection ensures there's something for everyone. We partner with publishers and authors worldwide to provide quality books at affordable prices.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                BOOK NEST isn't just a bookstore—it's a community for readers who want to explore the world, one page at a time.
                </p>
            </div>
        </section>

        <section className="bg-blue-100 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-10">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as we can.
            </p>

            <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
                Send Message
            </button>
            </form>
        </div>
        </section>

        <Footer/>

        




      
    </div>
  )
}

export default Hero
