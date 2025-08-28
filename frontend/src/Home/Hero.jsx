import React from 'react'
import { assets, books } from '../assets/assets';
import BookCard from '../Components/BookCard'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'; // <-- import this

const Hero = () => {
  const navigate = useNavigate(); // <-- use this

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100'>
      <NavBar />

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center text-center space-y-8 min-h-[70vh] px-4 py-14 bg-gradient-to-b from-blue-100 to-white shadow-md'>
        <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-3xl bg-gradient-to-r from-blue-700 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg'>
          Discover Your Next <br /> Favorite Book
        </h1>
        <p className='text-gray-700 text-lg sm:text-xl max-w-2xl font-medium'>
          Browse our curated collection of timeless classics and modern bestsellers.
        </p>
        <button
          className='bg-gradient-to-r from-blue-700 to-purple-600 text-white px-10 py-4 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 text-xl font-bold shadow-lg'
          onClick={() => navigate('/shop')} // <-- add this
        >
          Shop Now
        </button>
      </section>

      {/* Featured Section */}
      <section id="featured" className='px-4 sm:px-8 md:px-16 py-12 bg-white'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 text-blue-800 drop-shadow'>
          Featured Books
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
          {books.slice(0, 8).map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="aboutus" className="bg-gradient-to-r from-blue-50 to-purple-100 px-4 sm:px-8 md:px-16 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8 bg-white/80 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            At <span className="font-semibold text-blue-700">BOOK NEST</span>, we believe in the power of stories to inspire, educate, and entertain. Our mission is to bring readers closer to the books they love and help them discover new favorites along the way.
          </p>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            Whether you're a fan of timeless classics, modern bestsellers, or niche genres, our carefully curated collection ensures there's something for everyone. We partner with publishers and authors worldwide to provide quality books at affordable prices.
          </p>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            BOOK NEST isn't just a bookstore—it's a community for readers who want to explore the world, one page at a time.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-blue-100 to-purple-200 px-4 sm:px-8 md:px-16 py-16">
        <div className="max-w-3xl mx-auto text-center bg-white/90 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-8 text-lg sm:text-xl">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as we can.
          </p>

          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-700 to-purple-600 text-white px-10 py-4 rounded-full hover:scale-105 hover:bg-blue-800 transition-all duration-300 shadow-lg text-xl font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer flush with bottom */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
