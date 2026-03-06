import React from 'react';

export default function MapSection() {
  return (
    <section id="mapa" className="section section--map">
      <div className="container">
        <div className="section__header">
          <h2>Mapa de pontos de aluguel</h2>
          <p>
            Navegue pelo mapa para encontrar patinetes disponíveis e pontos de
            retorno. Nossos pontos são otimizados para facilitar seu trajeto.
          </p>
        </div>

        <div className="map-wrapper">
          <iframe
            title="Mapa de patinetes"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.69453%2C-23.67011%2C-46.58028%2C-23.58439&layer=mapnik"
            style={{ border: 0 }}
            loading="lazy"
          />
          <div className="map-legend">
            <strong>Dica:</strong> clique e arraste o mapa para explorar a cidade.
          </div>
        </div>
      </div>
    </section>
  );
}
