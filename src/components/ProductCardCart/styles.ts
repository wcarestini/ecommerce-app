import styled from "styled-components";

export const Container = styled.div`
  height: 130px;
  width: 100%;
  background: white;
  border-radius: 5px;
  padding: 0 1.5rem 0 1.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 3.5rem;
  flex-shrink: 0;

  margin-top: 2rem;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const Image = styled.img`
  height: 40%;
  width: 20%;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
`;

export const Price = styled.strong``;

export const Quantity = styled.strong`
  font-size: 1.4rem;
`;

export const InformationContainer = styled.div`
  border-left: rgba(0, 0, 0, 25%) solid 1px;
  padding-left: 1rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
`;

export const QuantityWrapper = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  border: none;
  background: none;
`;
