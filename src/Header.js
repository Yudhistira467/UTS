import React from 'react';

const Header = () => {
  return (
    <header className="header">
        <div className="logo-container">
            <h1 className='logo'>PlayStation</h1>
        </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Game</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
