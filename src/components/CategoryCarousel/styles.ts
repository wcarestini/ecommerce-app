import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0 2rem 0;

  margin: 4.5rem 0rem 4.5rem 0rem;
`;

export const Title = styled.h1`
  width: 50%;

  text-transform: uppercase;
  border-bottom: rgba(0, 0, 0, 25%) solid 1px;

  margin-bottom: 1rem;
  margin-left: 2rem;

  @media (min-width: 1024px) {
    margin-left: 6rem;
  }
`;

export const CardsContainerWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  column-gap: 2rem;
`;
