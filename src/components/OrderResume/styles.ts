import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 25%);
  border: none;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;

  &:first-child {
    background: white;
    color: black;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1``;

export const RowWrapper = styled.div`
  font-size: 0.8rem;

  display: flex;
  align-items: center;
  column-gap: 5rem;

  border-bottom: rgba(0, 0, 0, 25%) solid 1px;
`;

export const Subtotal = styled.p`
  color: rgba(0, 0, 0, 50%);
  font-size: 1.2rem;
`;
