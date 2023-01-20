export function getCartFromSessionStorage() {
  let cart = [];
  try {
    cart = JSON.parse(window.sessionStorage.getItem("cart"));
  } catch (e) {}

  return cart;
}

function setCartInSessionStorage(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

export function addCart({ id, name, price, imageUrl }) {
  let cart = getCartFromSessionStorage();

  if (cart.some((c) => c.id === id)) {
    const cartSameId = cart.find((car) => car.id === id);
    cartSameId.quantity = cartSameId.quantity + 1;
  } else {
    cart.push({ id, name, price, imageUrl, quantity: 1 });
  }

  setCartInSessionStorage(cart);
}

export function updateItemCartQuantity(itemId, quantity) {
  let cart = getCartFromSessionStorage();

  const cartItem = cart.find((itemCart) => itemCart.id === itemId);

  if (cartItem && quantity > 0) {
    cartItem.quantity = quantity;
  } else if (cartItem) {
    cart = cart.filter((cartItem) => cartItem.id !== itemId);
  }

  setCartInSessionStorage(cart);
}
