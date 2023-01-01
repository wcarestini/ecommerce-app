import Head from "next/head";
import { useContext } from "react";
import { Context } from "../contexts/Context";
import { SearchContext } from "../contexts/SearchContext";

import styled from "styled-components";

export default function Product() {
  const { searchTerm } = useContext(SearchContext);
  const product = useContext(Context).products.find(
    (product) => product.name === searchTerm
  );

  const SWrapper = styled.main`
    padding: 0 4em 0 4em;
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

  return (
    <>
      <Head>
        <title>E-commerce | Product</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWrapper>
        <SImage src={product.imageUrl}></SImage>
        <STitle>{product.name}</STitle>
        <SDescription>{product.description}</SDescription>
        <SPrice>R$ {product.price}</SPrice>
        <SButton>Comprar</SButton>
      </SWrapper>
    </>
  );
}
