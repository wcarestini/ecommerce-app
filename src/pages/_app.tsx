import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProductContextProvider } from "../contexts/ProductContext";
import { CartContextProvider } from "../contexts/CartContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ProductContextProvider>
    </CartContextProvider>
  );
}
