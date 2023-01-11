import styled from "styled-components";

export const Container = styled.div`
  height: 280px;
  width: 190px;
  background: white;
  border-radius: 5px;
  padding: 0.5rem;
  padding-bottom: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-shrink: 0;
`;

export const ProductImage = styled.img`
  height: 100px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  cursor: pointer;

  border-top: rgba(0, 0, 0, 25%) solid 1px;
`;

export const Description = styled.p`
  cursor: pointer;
`;

export const Price = styled.strong``;

export const InformationContainer = styled.div`
  align-self: flex-start;
  min-height: 50%;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
`;

export const PriceButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  background: white;
  border: none;
  align-self: end;
`;
