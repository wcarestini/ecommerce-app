import styled from "styled-components";

export const Container = styled.div`
  height: 280px;
  width: 190px;
  background: white;
  border-radius: 5px;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 75%;
  height: 60%;

  border-bottom: rgba(0, 0, 0, 25%) solid 1px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
`;

export const Description = styled.p``;

export const Price = styled.strong``;

export const InformationContainer = styled.div`
  align-self: flex-start;
  padding: 0.8rem;
`;
