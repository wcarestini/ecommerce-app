import { ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import {
  getCartFromSessionStorage,
  minusQuantityItem,
  updateItemCartQuantity,
} from "../../utils/SessionStorageUtil";
import {
  Button,
  Container,
  Image,
  InformationContainer,
  Price,
  Quantity,
  QuantityWrapper,
  Title,
  Wrapper,
} from "./styles";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

interface ProductCardCartProps {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  quantity: number;
}

export function ProductCardCart({
  id,
  imageUrl,
  name,
  price,
  quantity,
}: ProductCardCartProps) {
  const nameSplited = name.split(" ");
  name = nameSplited[0] + " " + nameSplited[1];

  const [quantityState, setQuatityState] = useState(quantity);

  function handleMinusItemQuantity() {
    if (quantityState > 0) {
      setQuatityState(quantityState - 1);
    }
  }

  function handlePlusItemQuantity() {
    setQuatityState(quantityState + 1);
  }

  function handleClickProductDetail() {
    Router.push("/product/" + id);
  }

  useEffect(() => {
    updateItemCartQuantity(id, quantityState);
  }, [quantityState]);

  return (
    <Container>
      <Image onClick={handleClickProductDetail} src={imageUrl} alt="" />
      <InformationContainer>
        <Wrapper onClick={handleClickProductDetail}>
          <Title>{name}</Title>
          <Price>R$ {price}</Price>
        </Wrapper>
        <QuantityWrapper>
          <Button onClick={handleMinusItemQuantity}>
            <IndeterminateCheckBoxOutlinedIcon style={{ fontSize: "2rem" }} />
          </Button>
          <Quantity>{quantityState}</Quantity>
          <Button onClick={handlePlusItemQuantity}>
            <LocalHospitalOutlinedIcon
              style={{
                fontSize: "2rem",
              }}
            />
          </Button>
        </QuantityWrapper>
      </InformationContainer>
    </Container>
  );
}
