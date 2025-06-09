import React from "react";

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <span>.</span>Glow
      </a>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>
      <nav className="navbar">
        <a href="#home">Головна</a>
        <a href="#about">Про нас</a>
        <a href="#products">Послуги</a>
        <a href="#contact">Контакти</a>
      </nav>
      <div className="icons">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-user"></a>
      </div>
    </header>
  );
};

export default Header;
