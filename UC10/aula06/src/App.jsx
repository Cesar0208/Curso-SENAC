import { useState } from 'react';
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Areas from "./sections/Areas";
import Sobre from "./sections/Sobre";
import FaqItem from "./components/FaqItem";
import FormContato from "./components/FormContato";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={isDarkMode ? 'app-container dark-theme' : 'app-container light-theme'}
      data-theme={isDarkMode ? 'dark' : 'light'}
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
        color: isDarkMode ? '#f8fafc' : '#0f172a',
        minHeight: '100vh',
      }}
    >
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <Hero />
      <Areas />
      <Sobre />
      
      {/* FAQ Section */}
      <section className="faq" style={{ padding: '60px 0', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '28px', fontWeight: '700' }}>
            Perguntas Frequentes
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <FaqItem
              pergunta="O escritório atende online?"
              resposta="Sim, atendemos clientes em todo o Brasil de forma 100% digital."
            />
            <FaqItem
              pergunta="Quais são as áreas de atuação?"
              resposta="Atuamos principalmente em Direito Civil, Direito Trabalhista e Direito Empresarial."
            />
            <FaqItem
              pergunta="Como funciona o agendamento de consulta?"
              resposta="Você pode agendar uma consulta clicando no botão 'Agendar Consulta' ou preenchendo o formulário de contato abaixo."
            />
          </div>
        </div>
      </section>

      <FormContato />
      <Footer />
    </div>
  );
}

export default App;
