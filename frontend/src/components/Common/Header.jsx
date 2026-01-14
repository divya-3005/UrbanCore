import React from 'react'
import Topbar from '../Layout/Topbar.jsx'
import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <>
    <header>
        {/* Topbar */}
        <Topbar/>
        {/* Navbar */}
        <Navbar/>
        {/* Cart Drawer */}

    </header>
    
    </>
  )
}

export default Header