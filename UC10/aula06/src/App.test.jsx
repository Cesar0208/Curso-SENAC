import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component Integration', () => {
  it('renders all sections and components without crashing', () => {
    render(<App />);

    const logoElement = screen.getByRole('heading', { level: 1, name: /oliveira & mendes advocacia/i });
    expect(logoElement).toBeInTheDocument();
    
    const heroHeading = screen.getByRole('heading', { level: 2, name: /defesa jurídica estratégica com ética e excelência/i });
    expect(heroHeading).toBeInTheDocument();

    const heroBtn = screen.getByRole('button', { name: /agendar consulta/i });
    expect(heroBtn).toBeInTheDocument();

    const areasHeading = screen.getByRole('heading', { level: 2, name: /áreas de atuação/i });
    expect(areasHeading).toBeInTheDocument();

    const civilCard = screen.getByRole('heading', { level: 3, name: 'Direito Civil' });
    const trabalhistaCard = screen.getByRole('heading', { level: 3, name: 'Direito Trabalhista' });
    const empresarialCard = screen.getByRole('heading', { level: 3, name: 'Direito Empresarial' });
    
    expect(civilCard).toBeInTheDocument();
    expect(trabalhistaCard).toBeInTheDocument();
    expect(empresarialCard).toBeInTheDocument();

    const sobreHeading = screen.getByRole('heading', { level: 2, name: /sobre o escritório/i });
    expect(sobreHeading).toBeInTheDocument();

    const experienceHeader = screen.getByRole('heading', { level: 3, name: '+10 anos' });
    expect(experienceHeader).toBeInTheDocument();
  });
});
