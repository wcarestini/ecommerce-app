import { ReactNode } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Aside, Container, IconsContainer, Paragraph, Title } from "./styles";

interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <Container>
      <Title>SHOPE</Title>
      <Aside>
        <Paragraph>ACOMPANHE NAS REDES SOCIAIS</Paragraph>
        <IconsContainer>
          <WhatsAppIcon style={{ color: "#000000", fontSize: "2rem" }} />
          <InstagramIcon style={{ color: "#000000", fontSize: "2rem" }} />
          <FacebookIcon style={{ color: "#000000", fontSize: "2rem" }} />
        </IconsContainer>
      </Aside>
    </Container>
  );
}
