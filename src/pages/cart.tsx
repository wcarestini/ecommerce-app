import styled from "styled-components";
import { ProductCardCart } from "../components/ProductCardCart";
import { getCartFromSessionStorage } from "../utils/SessionStorageUtil";

const Main = styled.main`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  border-bottom: rgba(0, 0, 0, 25%) solid 1px;
`;

export default function Cart() {
  const cart = getCartFromSessionStorage();

  return (
    <Main>
      <Title>Carrinho</Title>
      {cart.map(({ imageUrl, name, price, quantity }) => {
        return (
          <ProductCardCart
            imageUrl={imageUrl}
            name={name}
            price={price}
            quantity={quantity}
          />
        );
      })}
    </Main>
  );
}
