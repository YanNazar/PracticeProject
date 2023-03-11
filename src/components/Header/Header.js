import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <div class="header-container">
      <div class="first-line">
        <logo>Air</logo>
        <Navigation />
        <a className='hireUs' href="/hireus">Hire Us</a>
      </div>
      <div class="column">
        <h1>Strategic Agency</h1>
        <p>We believe in the power of bold ideas that can solve business challenges.</p>
        <button class="custom-button">Learn more</button>
      </div>
     
    </div>
  );
}

export default Header;