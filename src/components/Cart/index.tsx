import { ReactNode } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Container } from "./styles";

interface CartProps {
  // children: ReactNode;
}

export function Cart({}: CartProps) {
  return (
    <Container>
      <AddShoppingCartOutlinedIcon
        style={{ color: "#000000", fontSize: "2rem" }}
      />
    </Container>
  );
}
