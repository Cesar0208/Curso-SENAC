const { validateEmail, login } = require('../src/services/auth');

describe('Módulo de Autenticação', () => {
  
  test('login() retorna success: true e token quando credenciais são válidas', () => {
    const email = "admin@email.com";
    const password = "admin123";
    
    const result = login(email, password);
    
    expect(result.success).toBe(true);
    expect(result).toHaveProperty('token');
    expect(result.token).toMatch(/^token-simulado-/);
  });
  
  test('login() retorna success: false e mensagem "Credenciais inválidas" com senha errada', () => {
    const email = "admin@email.com";
    const password = "senha_errada";
    
    const result = login(email, password);
    
    expect(result.success).toBe(false);
    expect(result.message).toBe("Credenciais inválidas");
  });
  
  test('validateEmail("") retorna false para e-mail vazio', () => {
    const email = "";
    
    const result = validateEmail(email);
    
    expect(result).toBe(false);
  });
  
});
