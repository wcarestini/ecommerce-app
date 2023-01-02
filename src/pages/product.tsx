import Head from "next/head";
import { useContext, useEffect } from "react";

import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

export default function Product() {
  const { product } = useContext(ProductContext);
  const { cart, addItem } = useContext(CartContext);

  const SWrapper = styled.main`
    padding: 0 4rem 0 4rem;
    min-height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const SImage = styled.img``;
  const STitle = styled.h1``;
  const SDescription = styled.p``;
  const SPrice = styled.p``;
  const SButton = styled.button``;

  function handleAddCart() {
    addItem({ id: 0, name: product.name });
  }

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  return (
    <>
      <Head>
        <title>E-commerce | Product</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {product ? (
        <SWrapper>
          <SImage src={product.imageUrl}></SImage>
          <STitle>{product.name}</STitle>
          <SDescription>{product.description}</SDescription>
          <SPrice>R$ {product.price}</SPrice>
          <SButton onClick={() => console.log(cart)}>Comprar</SButton>
          <SButton onClick={handleAddCart}>Add to carrinho</SButton>
        </SWrapper>
      ) : (
        <h1>Não criei uma página pra essa situção ai, sori</h1>
      )}
    </>
  );
}
