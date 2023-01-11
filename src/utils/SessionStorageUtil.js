export function getCartFromSessionStorage() {
  let cart = JSON.parse(sessionStorage.getItem("cart"));

  if (!cart) {
    cart = [];
  }

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
