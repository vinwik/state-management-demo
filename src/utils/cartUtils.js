export const amendInputValue = (cartItems, payload) => {
  const { id, quantity } = payload;

  return cartItems.map((cartItem) =>
    cartItem.id === id ? { ...cartItem, quantity } : cartItem
  );
};
export const addItemToCart = (cartItems, itemId) => {
  return cartItems.map((cartItem) =>
    cartItem.id === itemId
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
export const removeItemFromCart = (cartItems, itemId) => {
  return cartItems.map((cartItem) =>
    cartItem.id === itemId
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const itemCount = (items) =>
  items.reduce((accumulator, item) => accumulator + item.quantity, 0);

export const priceCount = (items) =>
  items.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );
