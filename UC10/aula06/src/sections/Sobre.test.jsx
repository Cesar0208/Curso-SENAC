import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Sobre from './Sobre';

describe('Sobre Section', () => {
  it('renders the section header correctly', () => {
    render(<Sobre />);
    const headingElement = screen.getByRole('heading', { level: 2, name: /sobre o escritório/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the about text descriptions', () => {
    render(<Sobre />);
    const paragraph1 = screen.getByText(/oliveira & mendes advocacia atua com excelência/i);
    const paragraph2 = screen.getByText(/nossa atuação é pautada na ética/i);
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  it('renders the two experience highlight boxes correctly', () => {
    render(<Sobre />);
    
    const yearsHeader = screen.getByRole('heading', { level: 3, name: '+10 anos' });
    const yearsText = screen.getByText('de experiência jurídica');
    expect(yearsHeader).toBeInTheDocument();
    expect(yearsText).toBeInTheDocument();

    const serviceHeader = screen.getByRole('heading', { level: 3, name: 'Atendimento' });
    const serviceText = screen.getByText('Personalizado e estratégico');
    expect(serviceHeader).toBeInTheDocument();
    expect(serviceText).toBeInTheDocument();
  });
});
