function addItem(cart, item) {
  const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
  
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    cart.push({ ...item });
  }
  
  return cart;
}

function removeItem(cart, itemId) {
  return cart.filter(item => item.id !== itemId);
}

function calculateTotal(cart) {
  if (!cart || cart.length === 0) {
    return 0;
  }
  
  const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
  
  return parseFloat(total.toFixed(2));
}

module.exports = {
  addItem,
  removeItem,
  calculateTotal
};
