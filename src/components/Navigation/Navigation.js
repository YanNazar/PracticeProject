import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul className='navigation'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
