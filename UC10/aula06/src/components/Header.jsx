function Header({ isDarkMode, onToggleTheme }) {
  return (
    <header className="header">
      <div className="container header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="logo">Oliveira & Mendes Advocacia</h1>

        <nav className="nav" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="#">Início</a>
          <a href="#">Áreas de Atuação</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <button
            onClick={onToggleTheme}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid var(--border-color, #cbd5e1)',
              backgroundColor: 'var(--btn-bg, #f1f5f9)',
              color: 'var(--btn-color, #1e293b)',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'all 0.2s',
            }}
          >
            {isDarkMode ? 'Ativar Tema Claro' : 'Ativar Tema Escuro'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
