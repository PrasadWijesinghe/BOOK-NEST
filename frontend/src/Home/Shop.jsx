import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { books } from '../assets/assets'
import BookCard from '../Components/BookCard'

const Shop = () => {
  return (
    <div>
      <NavBar/>

      <div>
        <section className='px-10 py-10'>
          
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-items-center'>
                {books.map((book, index) => (
                <BookCard key={index} {...book} />
                ))}
            </div>
        </section>

      </div>



      <Footer/>
    </div>
  )
}

export default Shop
