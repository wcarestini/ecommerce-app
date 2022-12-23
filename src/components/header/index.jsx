import styled from "styled-components";

export function Header() {
  const SHeader = styled.header`
    height: 5rem;
    padding: 0 4em 0 4em;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const STitle = styled.h1``;

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

  return (
    <SHeader>
      <STitle>Logo</STitle>
      <SAside>
        <SInput type="search" />
        <SMenuHamburguer>
          <SMenuHamburguerLine></SMenuHamburguerLine>
          <SMenuHamburguerLine></SMenuHamburguerLine>
          <SMenuHamburguerLine></SMenuHamburguerLine>
        </SMenuHamburguer>
      </SAside>
    </SHeader>
  );
}
