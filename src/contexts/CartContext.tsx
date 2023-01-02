import { createContext, ReactNode, useState } from "react";

interface Item {
  id: number;
  name: string;
}

interface Cart {
  id: number;
  items: [Item];
}

interface CartContextData {
  cart: Cart;
  addItem: (item: Item) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState({});

  function addItem(item: Item) {
    if (!cart.items) {
      setCart({
        items: [item],
      });
    } else {
      cart.items.push(item);
      setCart(cart);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
