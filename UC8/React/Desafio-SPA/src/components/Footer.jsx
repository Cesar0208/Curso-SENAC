import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h3>E-Scooter</h3>
          <p>
            A forma mais prática de se deslocar pela cidade com mobilidade e
            baixo impacto ambiental.
          </p>
        </div>

        <div>
          <h4>Links rápidos</h4>
          <ul>
            <li>
              <a href="#hero">Início</a>
            </li>
            <li>
              <a href="#mapa">Mapa</a>
            </li>
            <li>
              <a href="#como-usar">Como usar</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Suporte</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Termos</a>
            </li>
            <li>
              <a href="#">Privacidade</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <p>© {new Date().getFullYear()} E-Scooter. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
