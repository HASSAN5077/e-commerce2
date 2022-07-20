import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Navbar = () => {
    const [sideBar, setSideBar] = useState(false);
    console.log(sideBar)
  return (
      <>
        <div className='header'>
            <Link className='logo' to='/'><i className="fas fa-store"></i></Link>
            <div className="search-form">
                <input type="search" placeholder="search here.." className="search" />
                <label for="search"><i className="fas fa-search"></i></label>
            </div>
            <div className="icons">
            <div className="icons">
            <div id="menu-btn" className="fas fa-bars" onClick={()=> setSideBar(!sideBar)}></div>
            <div id="search-btn" className="fas fa-search"></div>
            <Link to='/login'><i className="fas fa-user"></i></Link>
            <Link to='/'><i className="fas fa-heart"></i></Link>
            <Link to='/'><i className="fas fa-shopping-cart"></i></Link>
        </div>
            </div>
        </div>
        <Sidebar sideBar={sideBar} setSideBar={setSideBar}/>
      </>
  
  )
}

export default Navbar