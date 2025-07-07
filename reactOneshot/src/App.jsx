import axios from 'axios';
import React,{useEffect , useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from  './pages/Home'
import About from  './pages/About'
import Contact from  './pages/Contact'
import Product from  './pages/Product'


const App = () => {
  return(
  <div>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/product' element={<Product />}/>

    </Routes>
  </div>
  )
}

export default App;
