import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Section', () => {
  it('renders the strategic main heading', () => {
    render(<Hero />);
    const headingElement = screen.getByRole('heading', { level: 2, name: /defesa jurídica estratégica com ética e excelência/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the supporting description text', () => {
    render(<Hero />);
    const descText = screen.getByText(/atuamos com compromisso, responsabilidade/i);
    expect(descText).toBeInTheDocument();
  });

  it('renders the Button with Agendar Consulta text', () => {
    render(<Hero />);
    const actionBtn = screen.getByRole('button', { name: /agendar consulta/i });
    expect(actionBtn).toBeInTheDocument();
  });
});
