import styled from "styled-components";

import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

import Router from "next/router";

export function Header() {
  const searchContext = useContext(SearchContext);
  // const navigate = useNavigate();

  const SHeader = styled.header`
    height: 5rem;
    padding: 0 4em 0 4em;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const STitle = styled.h1`
    cursor: pointer;
  `;
  const SAside = styled.aside`
    display: flex;
    gap: 2em;
  `;
  const SInput = styled.input``;
  const SMenuHamburguer = styled.div`
    width: 3em;
    height: 2em;

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
    searchContext.searchTerm = searchTerm;
  };
  const handleChange = ({ target, key }) => {
    if (key === "Enter") {
      handleSearchContext(target.value);
      // navigate("/product/" + target.value);
      Router.push("/product");
    }
  };

  return (
    <SHeader>
      <STitle onClick={() => navigate("/")}>Logo</STitle>
      <SAside>
        <SInput onKeyDown={handleChange} type="search" />
        <SMenuHamburguer>
          <SMenuHamburguerLine></SMenuHamburguerLine>
          <SMenuHamburguerLine></SMenuHamburguerLine>
          <SMenuHamburguerLine></SMenuHamburguerLine>
        </SMenuHamburguer>
      </SAside>
    </SHeader>
  );
}
