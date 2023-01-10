import { ReactNode } from "react";

import {
  Container,
  Description,
  InformationContainer,
  Price,
  ProductImage,
  Title,
} from "./styles";

interface ProductCardProps {}

export function ProductCard({}: ProductCardProps) {
  return (
    <Container>
      <ProductImage src="https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/RHV354-01.png" />
      <InformationContainer>
        <Title>Iphone</Title>
        <Description>Iphone tri</Description>
        <Price>R$ 2.000,00</Price>
      </InformationContainer>
    </Container>
  );
}
