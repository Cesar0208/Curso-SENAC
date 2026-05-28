import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Areas from './Areas';

describe('Areas Section', () => {
  it('renders the section title correctly', () => {
    render(<Areas />);
    const sectionTitle = screen.getByRole('heading', { level: 2, name: /áreas de atuação/i });
    expect(sectionTitle).toBeInTheDocument();
    expect(sectionTitle).toHaveClass('section-title');
  });

  it('renders the three CardArea components with correct titles and descriptions', () => {
    render(<Areas />);

    const civilTitle = screen.getByRole('heading', { level: 3, name: 'Direito Civil' });
    expect(civilTitle).toBeInTheDocument();
    expect(screen.getByText(/contratos, indenizações, responsabilidade civil/i)).toBeInTheDocument();

    const trabalhistaTitle = screen.getByRole('heading', { level: 3, name: 'Direito Trabalhista' });
    expect(trabalhistaTitle).toBeInTheDocument();
    expect(screen.getByText(/defesa de direitos trabalhistas e assessoria jurídica/i)).toBeInTheDocument();

    const empresarialTitle = screen.getByRole('heading', { level: 3, name: 'Direito Empresarial' });
    expect(empresarialTitle).toBeInTheDocument();
    expect(screen.getByText(/consultoria estratégica para empresas, elaboração de contratos/i)).toBeInTheDocument();
  });
});
