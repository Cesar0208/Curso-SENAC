import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import FaqItem from './FaqItem';

describe('FaqItem Component', () => {
  const testQuestion = 'O escritório atende online?';
  const testAnswer = 'Sim, atendemos clientes em todo o Brasil.';

  it('renders the question on the screen', () => {
    render(<FaqItem pergunta={testQuestion} resposta={testAnswer} />);
    const questionElement = screen.getByText(testQuestion);
    expect(questionElement).toBeInTheDocument();
  });

  it('does NOT render the answer initially', () => {
    render(<FaqItem pergunta={testQuestion} resposta={testAnswer} />);
    const answerElement = screen.queryByText(testAnswer);
    expect(answerElement).not.toBeInTheDocument();
  });

  it('reveals the answer after clicking the question button', async () => {
    const user = userEvent.setup();
    render(<FaqItem pergunta={testQuestion} resposta={testAnswer} />);

    // Click the question button
    const questionButton = screen.getByRole('button', { name: new RegExp(testQuestion, 'i') });
    await user.click(questionButton);

    // Answer should be in the DOM
    const answerElement = screen.getByText(testAnswer);
    expect(answerElement).toBeInTheDocument();
  });

  it('hides the answer when the question button is clicked again', async () => {
    const user = userEvent.setup();
    render(<FaqItem pergunta={testQuestion} resposta={testAnswer} />);

    const questionButton = screen.getByRole('button', { name: new RegExp(testQuestion, 'i') });
    
    // First click to open
    await user.click(questionButton);
    expect(screen.getByText(testAnswer)).toBeInTheDocument();

    // Second click to close
    await user.click(questionButton);
    
    // Answer should no longer be in the DOM
    const answerElement = screen.queryByText(testAnswer);
    expect(answerElement).not.toBeInTheDocument();
  });
});
