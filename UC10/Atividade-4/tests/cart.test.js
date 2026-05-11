const { addItem, removeItem, calculateTotal } = require('../src/services/cart');

describe('Módulo de Carrinho', () => {
  
  test('addItem() retorna array com 1 item ao adicionar item novo', () => {
    const cart = [];
    const item = { id: 1, name: "Produto A", price: 50, quantity: 1 };
    
    const result = addItem(cart, item);
    
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(item);
  });
  
  test('removeItem() remove item por ID do carrinho', () => {
    const cart = [
      { id: 1, name: "Produto A", price: 50, quantity: 1 },
      { id: 2, name: "Produto B", price: 30, quantity: 2 }
    ];
    
    const result = removeItem(cart, 1);
    
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });
  
  test('calculateTotal() retorna valor correto com múltiplos itens e quantidades diferentes', () => {
    const cart = [
      { id: 1, name: "Produto A", price: 50, quantity: 2 },
      { id: 2, name: "Produto B", price: 30, quantity: 1 }
    ];
    
    const result = calculateTotal(cart);
    
    expect(result).toBe(130.00);
  });
  
});
