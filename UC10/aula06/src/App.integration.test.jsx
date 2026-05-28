import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Landing Page End-to-End Integration Flow', () => {
  it('validates the complete page structure, user form submission, and dark mode toggle', async () => {
    const user = userEvent.setup();
    render(<App />);

    // ==========================================
    // 1. PAGE STRUCTURE VALIDATION
    // ==========================================
    
    // Header Logo & Menu
    expect(screen.getByRole('heading', { level: 1, name: /oliveira & mendes advocacia/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Início' })).toBeInTheDocument();
    
    // Hero Main Title
    expect(screen.getByRole('heading', { level: 2, name: /defesa jurídica estratégica com ética e excelência/i })).toBeInTheDocument();
    
    // Practice Areas Section
    expect(screen.getByRole('heading', { level: 2, name: /áreas de atuação/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Direito Civil' })).toBeInTheDocument();
    
    // About Section
    expect(screen.getByRole('heading', { level: 2, name: /sobre o escritório/i })).toBeInTheDocument();
    
    // Contact Form
    expect(screen.getByRole('heading', { level: 2, name: /fale conosco/i })).toBeInTheDocument();
    
    // Footer
    expect(screen.getByText(/oliveira & mendes advocacia. todos os direitos reservados/i)).toBeInTheDocument();

    // ==========================================
    // 2. CONTACT FORM SUBMISSION FLOW (Desafio 2 & 3)
    // ==========================================
    const nomeInput = screen.getByLabelText(/nome/i);
    const emailInput = screen.getByLabelText(/email/i);
    const mensagemInput = screen.getByLabelText(/mensagem/i);
    const submitBtn = screen.getByRole('button', { name: /enviar/i });

    // Digitar dados
    await user.type(nomeInput, 'Kauã Thierry');
    await user.type(emailInput, 'kaua@thierry.com');
    await user.type(mensagemInput, 'Olá, gostaria de agendar uma consulta presencial.');

    // Enviar formulário
    await user.click(submitBtn);

    // Verificar banner de sucesso
    expect(screen.getByText('Mensagem enviada com sucesso')).toBeInTheDocument();

    // Verificar limpeza do formulário (Desafio Extra & 3 Parte 3)
    expect(nomeInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(mensagemInput).toHaveValue('');

    // ==========================================
    // 3. DARK MODE TOGGLE FLOW (Desafio Bônus)
    // ==========================================
    
    // Inicia no Tema Claro:
    const themeBtn = screen.getByRole('button', { name: /ativar tema escuro/i });
    expect(themeBtn).toBeInTheDocument();
    
    // A classe do contêiner e o atributo data-theme devem ser claros:
    const appWrapper = themeBtn.closest('.app-container');
    expect(appWrapper).toHaveClass('light-theme');
    expect(appWrapper).toHaveAttribute('data-theme', 'light');

    // Clicar para alternar para Tema Escuro
    await user.click(themeBtn);

    // Deve mudar o texto do botão, a classe CSS e o atributo data-theme:
    expect(screen.getByRole('button', { name: /ativar tema claro/i })).toBeInTheDocument();
    expect(appWrapper).toHaveClass('dark-theme');
    expect(appWrapper).toHaveAttribute('data-theme', 'dark');

    // Clicar novamente para voltar ao Tema Claro
    await user.click(screen.getByRole('button', { name: /ativar tema claro/i }));

    // Deve voltar aos estados claros iniciais:
    expect(screen.getByRole('button', { name: /ativar tema escuro/i })).toBeInTheDocument();
    expect(appWrapper).toHaveClass('light-theme');
    expect(appWrapper).toHaveAttribute('data-theme', 'light');
  });
});
