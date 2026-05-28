function Footer() {
  return (
    <footer
      className="footer"
      style={{
        padding: '30px 0',
        backgroundColor: '#0f172a',
        color: '#94a3b8',
        textAlign: 'center',
        borderTop: '1px solid #1e293b',
      }}
    >
      <div className="container">
        <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px' }}>
          &copy; {new Date().getFullYear()} Oliveira & Mendes Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
