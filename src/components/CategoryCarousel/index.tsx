import { ReactNode } from "react";
import { ProductCard } from "../ProductCard";

import {
  CardsContainer,
  CardsContainerWrapper,
  Container,
  Title,
} from "./styles";

interface CategoryCarouselProps {
  category: string;
  children: ReactNode;
}

export function CategoryCarousel({
  category,
  children,
}: CategoryCarouselProps) {
  return (
    <Container>
      <Title>{category}</Title>
      <CardsContainerWrapper>
        <CardsContainer>{children}</CardsContainer>
      </CardsContainerWrapper>
    </Container>
  );
}
