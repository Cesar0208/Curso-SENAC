import React from 'react';

const steps = [
  {
    title: 'Encontre um ponto',
    description:
      'Abra o mapa e veja as patinetes disponíveis mais próximas. Selecione o ponto e vá até ele.',
    icon: '📍',
  },
  {
    title: 'Escaneie o QR Code',
    description:
      'Use seu celular para escanear o QR Code no guidão e desbloquear a patinete.',
    icon: '📱',
  },
  {
    title: 'Viaje com segurança',
    description:
      'Siga as regras de trânsito, use capacete e prefira ciclovias sempre que possível.',
    icon: '🛴',
  },
  {
    title: 'Devolva no local',
    description:
      'Estacione na área indicada e finalize o aluguel no app. Pronto: você já está livre para seguir com seu dia!',
    icon: '✅',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-usar" className="section section--steps">
      <div className="container">
        <div className="section__header">
          <h2>Como usar</h2>
          <p>
            Em quatro passos você está pronto para rodar por aí: rápido, seguro e
            com todo o suporte do aplicativo.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={step.title} className="step">
              <div className="step__icon" aria-hidden="true">
                {step.icon}
              </div>
              <div className="step__body">
                <h3>
                  <span className="step__number">{index + 1}</span> {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
