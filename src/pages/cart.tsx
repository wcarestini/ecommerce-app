import Head from "next/head";
import styled from "styled-components";
import { OrderResume } from "../components/OrderResume";
import { ProductCardCart } from "../components/ProductCardCart";
import { getCartFromSessionStorage } from "../utils/SessionStorageUtil";

const Main = styled.main`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  border-bottom: rgba(0, 0, 0, 25%) solid 1px;
`;

export default function Cart() {
  const cart = getCartFromSessionStorage();

  return (
    <>
      <Head>
        <title>E-commerce | Carrinho</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Carrinho</Title>
        {cart.map(({ id, imageUrl, name, price, quantity }) => {
          return (
            <ProductCardCart
              id={id}
              imageUrl={imageUrl}
              name={name}
              price={price}
              quantity={quantity}
            />
          );
        })}
        <OrderResume cart={cart} />
      </Main>
    </>
  );
}
