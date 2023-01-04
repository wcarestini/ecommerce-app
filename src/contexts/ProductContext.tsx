import React, {
  createContext,
  ReactNode,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductContextData {
  product: Product;
  products: Product[];
  searchProduct: (term: string) => void;
}

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductContextProvider({ children }: ProductProviderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  let productFind = null;

  function searchProduct(term: string) {
    setSearchTerm(term);
  }

  useEffect(() => {
    productFind = products.find((product) => product.name === searchTerm);
    setProduct(productFind);
  }, [searchTerm]);

  return (
    <ProductContext.Provider value={{ product, products, searchProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
