import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({sideBar,setSideBar}) => {
  return (
    <div className={sideBar?'side-bar active':'side-bar'}>
      <div id="close-side-bar" className="fas fa-times" onClick={()=>setSideBar(!sideBar)}></div>
      <div className="user">
        <img src="images/user-img.png" alt="" />
        <h3>shaikh anas</h3>
        <Link to='/'>log out</Link>
      </div>
      <nav className="navbar">
        <Link to='/'> <i className="fas fa-angle-right"></i> home </Link>
        <Link to='/about'> <i className="fas fa-angle-right"></i> about </Link>
        <Link to='/products'>
          <i className="fas fa-angle-right"></i> products
        </Link>
        <Link to='/contact'> <i className="fas fa-angle-right"></i> contact </Link>
        <Link to='/login'> <i className="fas fa-angle-right"></i> login </Link>
        <Link to='/register'>
          <i className="fas fa-angle-right"></i> register
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
