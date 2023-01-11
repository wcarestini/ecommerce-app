import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    padding-top: 4rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;

  border-bottom: rgba(0, 0, 0, 25%) solid 1px;
`;

export const InformationContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    padding: 6rem;
  }
`;

export const Price = styled.strong`
  font-size: 1.5rem;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 49.9%;
  padding: 1.5rem 0 1.5rem 0;
  background: rgba(0, 0, 0, 25%);
  border: none;
  color: white;
  font-size: 1.2rem;
  border-radius: 0 5px 5px 0;

  &:first-child {
    background: white;
    color: black;
    border-radius: 5px 0 0 5px;
  }
`;
