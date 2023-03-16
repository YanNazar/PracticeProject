import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <div className="headerContainer">
      <div className="firstLine">
        <Logo/>
        <Navigation />
        <a className='hireUs' href="/hireus">Hire Us</a>
      </div>
      <div className="column">
        <h1>Strategic Agency</h1>
        <p>We believe in the power of bold ideas that can solve business challenges.</p>
        <button className="customButton">Learn more</button>
      </div>
     
    </div>
  );
}

export default Header;