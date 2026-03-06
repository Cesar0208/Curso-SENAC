import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1>Aluguel de patinetes elétricos para sua mobilidade urbana</h1>
        <p>
          Encontre a patinete mais próxima, desbloqueie em segundos e vá para 
          onde precisar com praticidade, segurança e sustentabilidade.
        </p>
        <div className="hero__actions">
          <a href="#mapa" className="button button--primary">
            Ver mapa
          </a>
          <a href="#como-usar" className="button button--secondary">
            Como usar
          </a>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__mockup">
          <div className="mockup__badge">Patinete mais próximo: 120m</div>
          <div className="mockup__image">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 440 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(28, 126, 214, 0.9)" />
                  <stop offset="100%" stopColor="rgba(102, 219, 34, 0.75)" />
                </linearGradient>
              </defs>
              <path
                d="M120 460c0 32-26 58-58 58s-58-26-58-58 26-58 58-58 58 26 58 58zM436 460c0 32-26 58-58 58s-58-26-58-58 26-58 58-58 58 26 58 58z"
                fill="url(#grad)"
                opacity="0.85"
              />
              <path
                d="M104 452h210l58-192H133l-29 85h-4l-18 55z"
                fill="url(#grad)"
                opacity="0.75"
              />
              <path
                d="M85 275h245v24H85z"
                fill="rgba(255,255,255,0.55)"
              />
              <path
                d="M180 162h120v24H180z"
                fill="rgba(255,255,255,0.55)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
