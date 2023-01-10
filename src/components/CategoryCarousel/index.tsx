import { ReactNode } from "react";
import { ProductCard } from "../ProductCard";

import { CardsContainer, Container, Title } from "./styles";

interface CategoryCarouselProps {
  category: string;
}

export function CategoryCarousel({ category }: CategoryCarouselProps) {
  return (
    <Container>
      <Title>{category}</Title>
      <CardsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardsContainer>
    </Container>
  );
}
