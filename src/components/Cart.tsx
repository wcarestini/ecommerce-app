import styled from "styled-components";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
  const { cart } = useContext(CartContext);

  const SCartWrapper = styled.div`
    cursor: pointer;
  `;
  return (
    <SCartWrapper onClick={() => console.log(cart)}>
      <ShoppingCartOutlinedIcon style={{ fontSize: "2.5rem" }} />
    </SCartWrapper>
  );
}
