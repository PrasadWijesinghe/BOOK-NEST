import React from 'react'
import Hero from './Home/Hero.jsx' 
import Login from './Home/Login'
import Register from './Home/Register.jsx'
import {Route, Routes} from 'react-router-dom'
import Book from './Home/Book.jsx'
import Shop from './Home/Shop.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Hero/>} />
         <Route path='/login' element = {<Login/>} />
         <Route path='/register' element = {<Register/>} />
         <Route path='/shop' element = {<Shop/>} />
         <Route path='/book/:bookId' element = {<Book/>}/>
      </Routes>
    </div>
  )
}

export default App
