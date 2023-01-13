import { ReactNode, useContext } from "react";

import { Aside, Container, Title, Input, Link } from "./styles";
import Router from "next/router";
import { ProductContext } from "../../contexts/ProductContext";
import { Cart } from "../Cart";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Cookies from "js-cookie";
interface HeaderProps {
  // children: ReactNode;
}

export function Header({}: HeaderProps) {
  const { searchProduct } = useContext(ProductContext);
  const accessToken = Cookies.get("accessToken");

  const handleChange = ({ target, key }: any) => {
    if (key === "Enter") {
      searchProduct(target.value);
      Router.push("/search-result/" + target.value);
      target.value = "";
    }
  };

  function redirectToCart() {
    Router.push("/cart");
  }

  function handleLogin() {
    Router.push("/login");
  }

  return (
    <Container>
      <Title onClick={() => Router.push("/")}>SHOPE</Title>
      <Aside>
        <Input onKeyDown={handleChange} />
        <AddShoppingCartOutlinedIcon
          onClick={redirectToCart}
          style={{ color: "#000000", fontSize: "2rem" }}
        />
        {accessToken ? <p>Olá</p> : <Link onClick={handleLogin}>Login</Link>}
      </Aside>
    </Container>
  );
}
