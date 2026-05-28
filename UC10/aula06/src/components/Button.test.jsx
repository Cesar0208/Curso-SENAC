import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('renders the button with correct text prop', () => {
    render(<Button text="Agendar Consulta" />);
    const buttonElement = screen.getByRole('button', { name: /agendar consulta/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('has the correct className btn-primary', () => {
    render(<Button text="Agendar Consulta" />);
    const buttonElement = screen.getByRole('button', { name: /agendar consulta/i });
    expect(buttonElement).toHaveClass('btn-primary');
  });
});
