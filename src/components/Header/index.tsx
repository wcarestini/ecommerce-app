import { ReactNode, useContext } from "react";

import { Aside, Container, Title, Input, Link } from "./styles";
import Router from "next/router";
import { ProductContext } from "../../contexts/ProductContext";
import { Cart } from "../Cart";

interface HeaderProps {
  // children: ReactNode;
}

export function Header({}: HeaderProps) {
  const { searchProduct } = useContext(ProductContext);

  const handleChange = ({ target, key }: any) => {
    if (key === "Enter") {
      searchProduct(target.value);
      Router.push("/product");
    }
  };
  return (
    <Container>
      <Title onClick={() => Router.push("/")}>SHOPE</Title>
      <Aside>
        <Input onKeyDown={handleChange} />
        <Cart />
        <Link onClick={() => console.log("usuario tentou logar")}>Login</Link>
      </Aside>
    </Container>
  );
}
