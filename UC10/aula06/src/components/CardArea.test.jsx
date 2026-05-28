import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CardArea from './CardArea';

describe('CardArea Component', () => {
  it('renders the correct title and description props', () => {
    const testTitle = 'Direito Civil';
    const testDesc = 'Atuação em contratos e indenizações.';

    render(<CardArea titulo={testTitle} descricao={testDesc} />);

    const titleElement = screen.getByRole('heading', { level: 3, name: testTitle });
    expect(titleElement).toBeInTheDocument();

    const descElement = screen.getByText(testDesc);
    expect(descElement).toBeInTheDocument();
  });

  it('has the container class card-area', () => {
    render(<CardArea titulo="Test Title" descricao="Test Desc" />);
    const titleElement = screen.getByRole('heading', { level: 3, name: 'Test Title' });
    expect(titleElement.parentElement).toHaveClass('card-area');
  });
});
