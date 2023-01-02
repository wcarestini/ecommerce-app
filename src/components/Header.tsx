import styled from "styled-components";

import { useContext } from "react";

import Router from "next/router";
import { ProductContext } from "../contexts/ProductContext";
import { Cart } from "./Cart";

export function Header() {
  const { searchProduct } = useContext(ProductContext);

  const SHeader = styled.header`
    height: 5rem;
    padding: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const STitle = styled.h1`
    cursor: pointer;
  `;
  const SAside = styled.aside`
    display: flex;
    gap: 2rem;
  `;
  const SInput = styled.input`
    outline: none;
    border: none;
    border-radius: 10px;

    padding: 0.5rem;

    &:hover {
      box-shadow: 0 0 60px rgba(255, 255, 255, 0.05);
    }
  `;
  const SMenuHamburguer = styled.div`
    width: 3rem;
    height: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const SMenuHamburguerLine = styled.div`
    background-color: black;

    width: 100%;
    height: 22%;
  `;

  const handleSearchContext = (searchTerm) => {
    searchProduct(searchTerm);
  };
  const handleChange = ({ target, key }) => {
    if (key === "Enter") {
      handleSearchContext(target.value);
      Router.push("/product");
    }
  };

  return (
    <SHeader>
      <STitle onClick={() => Router.push("/")}>Logo</STitle>
      <SAside>
        <SInput onKeyDown={handleChange} />
        <Cart />
        {/* <SMenuHamburguer>
          <SMenuHamburguerLine></SMenuHamburguerLine>
          <SMenuHamburguerLine></SMenuHamburguerLine>
          <SMenuHamburguerLine></SMenuHamburguerLine>
        </SMenuHamburguer> */}
      </SAside>
    </SHeader>
  );
}
