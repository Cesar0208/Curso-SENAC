import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import FormContato from './FormContato';

describe('FormContato Component', () => {
  it('Cenário 1 — displays validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    render(<FormContato />);

    // Click the submit button
    const submitBtn = screen.getByRole('button', { name: /enviar/i });
    await user.click(submitBtn);

    // Verify error messages appear
    expect(screen.getByText('Nome é obrigatório')).toBeInTheDocument();
    expect(screen.getByText('Email inválido')).toBeInTheDocument();
    expect(screen.getByText('Mensagem muito curta')).toBeInTheDocument();
  });

  it('Cenário 2 — displays email validation error when email is invalid (no @)', async () => {
    const user = userEvent.setup();
    render(<FormContato />);

    // Fill valid name, invalid email, valid message
    await user.type(screen.getByLabelText(/nome/i), 'Kauã Thierry');
    await user.type(screen.getByLabelText(/email/i), 'kauathierry.com'); // invalid email
    await user.type(screen.getByLabelText(/mensagem/i), 'Esta é uma mensagem válida de contato.');

    // Submit
    const submitBtn = screen.getByRole('button', { name: /enviar/i });
    await user.click(submitBtn);

    // Verify email error is present, but others are not
    expect(screen.getByText('Email inválido')).toBeInTheDocument();
    expect(screen.queryByText('Nome é obrigatório')).not.toBeInTheDocument();
    expect(screen.queryByText('Mensagem muito curta')).not.toBeInTheDocument();
  });

  it('Cenário 3 — displays message length validation error when message is short (< 10 chars)', async () => {
    const user = userEvent.setup();
    render(<FormContato />);

    // Fill valid name, valid email, short message
    await user.type(screen.getByLabelText(/nome/i), 'Kauã Thierry');
    await user.type(screen.getByLabelText(/email/i), 'kaua@thierry.com');
    await user.type(screen.getByLabelText(/mensagem/i), 'Curta'); // 5 chars

    // Submit
    const submitBtn = screen.getByRole('button', { name: /enviar/i });
    await user.click(submitBtn);

    // Verify message error is present
    expect(screen.getByText('Mensagem muito curta')).toBeInTheDocument();
    expect(screen.queryByText('Nome é obrigatório')).not.toBeInTheDocument();
    expect(screen.queryByText('Email inválido')).not.toBeInTheDocument();
  });

  it('Cenário 4 & Extra — shows success message and clears form inputs on successful submission', async () => {
    const user = userEvent.setup();
    render(<FormContato />);

    const nomeInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const mensagemInput = screen.getByLabelText(/mensagem/i);

    // Fill all fields validly
    await user.type(nomeInput, 'Kauã Thierry');
    await user.type(emailInput, 'kaua@thierry.com');
    await user.type(mensagemInput, 'Esta é uma mensagem com mais de dez caracteres.');

    // Verify values are entered
    expect(nomeInput).toHaveValue('Kauã Thierry');
    expect(emailInput).toHaveValue('kaua@thierry.com');
    expect(mensagemInput).toHaveValue('Esta é uma mensagem com mais de dez caracteres.');

    // Submit
    const submitBtn = screen.getByRole('button', { name: /enviar/i });
    await user.click(submitBtn);

    // Verify success banner is shown
    expect(screen.getByText('Mensagem enviada com sucesso')).toBeInTheDocument();

    // Verify errors are not shown
    expect(screen.queryByText('Nome é obrigatório')).not.toBeInTheDocument();
    expect(screen.queryByText('Email inválido')).not.toBeInTheDocument();
    expect(screen.queryByText('Mensagem muito curta')).not.toBeInTheDocument();

    // Verify fields are cleared (Desafio Extra)
    expect(nomeInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(mensagemInput).toHaveValue('');
  });
});
