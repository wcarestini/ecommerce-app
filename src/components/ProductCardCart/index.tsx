import { ReactNode } from "react";
import { getCartFromSessionStorage } from "../../utils/SessionStorageUtil";
import {
  Button,
  Container,
  Image,
  InformationContainer,
  Price,
  Quantity,
  QuantityWrapper,
  Title,
} from "./styles";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

interface ProductCardCartProps {
  imageUrl: string;
  name: string;
  price: string;
  quantity: number;
}

export function ProductCardCart({
  imageUrl,
  name,
  price,
  quantity,
}: ProductCardCartProps) {
  const nameSplited = name.split(" ");
  name = nameSplited[0] + " " + nameSplited[1];

  return (
    <Container>
      <Image src={imageUrl} alt="" />
      <InformationContainer>
        <Title>{name}</Title>
        <Price>R$ {price}</Price>
        <QuantityWrapper>
          <Button>
            <IndeterminateCheckBoxOutlinedIcon style={{ fontSize: "2rem" }} />
          </Button>
          <Quantity>{quantity}</Quantity>
          <Button>
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
