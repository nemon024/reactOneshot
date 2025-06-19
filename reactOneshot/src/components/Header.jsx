import React from 'react';
import Navbar from './Navbar.jsx'

const Header = () =>{
  return(
    <>
     <nav className ='bg-emerald-600 flex py-5 px-10 items-center justify-between'>
    <h2 className='text-2xl'>naman</h2>
    <Navbar />
  </nav>
    </>
  )
}

export default Header;