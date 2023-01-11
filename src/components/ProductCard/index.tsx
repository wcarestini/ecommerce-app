import { ReactNode } from "react";

import {
  AddButton,
  Container,
  Description,
  InformationContainer,
  Price,
  PriceButtonWrapper,
  ProductImage,
  Title,
} from "./styles";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({
  id,
  title,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  function handleClick() {
    console.log(id);
  }
  return (
    <Container>
      <ProductImage src={imageUrl} />
      <InformationContainer>
        <Title>{title.substring(0, 15)}</Title>
        <Description>{description.substring(0, 45)}...</Description>
        <PriceButtonWrapper>
          <Price>R$ {price}</Price>
          <AddButton onClick={handleClick} />
        </PriceButtonWrapper>
      </InformationContainer>
    </Container>
  );
}
