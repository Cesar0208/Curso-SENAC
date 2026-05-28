import { useState } from 'react';

function FaqItem({ pergunta, resposta }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" style={{ borderBottom: '1px solid #e2e8f0', padding: '15px 0' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          font: 'inherit',
          fontSize: '18px',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'var(--text-color, #1e293b)',
          padding: '10px 0',
        }}
        aria-expanded={isOpen}
      >
        <span>{pergunta}</span>
        <span style={{ fontSize: '20px' }}>{isOpen ? '−' : '+'}</span>
      </button>
      
      {isOpen && (
        <p
          style={{
            margin: '10px 0 0 0',
            color: 'var(--text-muted, #475569)',
            fontSize: '15px',
            lineHeight: '1.6',
          }}
        >
          {resposta}
        </p>
      )}
    </div>
  );
}

export default FaqItem;
