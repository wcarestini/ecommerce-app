import { ReactNode } from "react";

import {
  Button,
  ButtonsContainer,
  Container,
  RowWrapper,
  Subtotal,
  Title,
} from "./styles";

interface OrderResumeProps {
  cart: any;
}

export function OrderResume({ cart }: OrderResumeProps) {
  const subtotal = cart.reduce(
    (accumulator, cartItem) =>
      accumulator + parseFloat(cartItem.price) * parseInt(cartItem.quantity),
    0.0
  );

  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <RowWrapper>
            <Title>Subtotal:</Title>
            <Subtotal> R$ {subtotal}</Subtotal>
          </RowWrapper>
          <ButtonsContainer>
            <Button>
              <strong>Finalizar compra</strong>
            </Button>
            <Button>Continuar comprando</Button>
          </ButtonsContainer>
        </>
      ) : (
        <h2>Carrinho vazio</h2>
      )}
    </Container>
  );
}
