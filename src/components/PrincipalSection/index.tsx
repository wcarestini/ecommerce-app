import { ReactNode } from "react";

import { Container, Title, Paragraph } from "./styles";

interface PrincipalSectionProps {
  // children: ReactNode;
}

export function PrincipalSection({}: PrincipalSectionProps) {
  return (
    <Container>
      <Title>SHOPE</Title>
      <Paragraph>Sua loja de alguma coisa</Paragraph>
    </Container>
  );
}
