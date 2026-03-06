import React, { useState } from 'react';

function Header() {
  // Estado para controlar se o menu está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <h2>E-<span>Scooter</span></h2>
        </div>

        {/* Botão Hambúrguer (Visível apenas no mobile) */}
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        
        {/* Menu de Navegação */}
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#hero" onClick={toggleMenu}>
                Início
              </a>
            </li>
            <li>
              <a href="#mapa" onClick={toggleMenu}>
                Mapa
              </a>
            </li>
            <li>
              <a href="#como-usar" onClick={toggleMenu}>
                Como usar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;