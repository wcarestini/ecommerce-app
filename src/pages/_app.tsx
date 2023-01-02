import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { ProductContextProvider } from "../contexts/ProductContext";
import { CartContextProvider } from "../contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Header />
        <Component {...pageProps} />
      </ProductContextProvider>
    </CartContextProvider>
  );
}
