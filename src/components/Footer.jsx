import React from "react";
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <section class="footer">
      <Link to='/' class="logo">
        <i class="fas fa-store"></i>Shopie
      </Link>
      <div class="menus">
        <Link to='/' >Home</Link>
        <Link to='/'>about</Link>
        <Link to='/'>products</Link>
        <Link to='/'>contact</Link>
        <Link to='/'>login</Link>
        <Link to='/'>register</Link>
        <Link to='/'>cart</Link>
      </div>
      <div class="social-links">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
      </div>
    </section>
  );
};

export default Footer;
