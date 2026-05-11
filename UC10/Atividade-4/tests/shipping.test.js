const { calculateShipping, isFreeShipping } = require('../src/services/shipping');

describe('Módulo de Cálculo de Frete', () => {
  
  test('calculateShipping("01310100", 2) retorna custo correto para região SP', () => {
    const cep = "01310100";
    const weight = 2;
    
    const result = calculateShipping(cep, weight);
    
    expect(result.region).toBe("SP");
    expect(result.cost).toBe(13.00);
  });
  
  test('isFreeShipping(250) retorna true', () => {
    const orderTotal = 250;
    
    const result = isFreeShipping(orderTotal);
    
    expect(result).toBe(true);
  });
  
  test('calculateShipping("ABC", 1) lança Error com mensagem "CEP inválido"', () => {
    const cep = "ABC";
    const weight = 1;
    
    expect(() => calculateShipping(cep, weight)).toThrow("CEP inválido");
  });
  
});
