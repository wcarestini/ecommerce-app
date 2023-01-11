import { ReactNode } from "react";
import Router from "next/router";
import { addCart } from "../../utils/SessionStorageUtil";
import {
  AddButton,
  Container,
  Description,
  InformationContainer,
  Price,
  PriceButtonWrapper,
  ProductImage,
  Title,
} from "./styles";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({
  id,
  title,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  function handleClickAddCart() {
    addCart({ id, name: title, price, imageUrl });
  }

  function handleClickProductDetail() {
    console.log("click product detail " + id);
    Router.push("/product/" + id);
  }
  return (
    <Container>
      <ProductImage onClick={handleClickProductDetail} src={imageUrl} />
      <InformationContainer>
        <Title onClick={handleClickProductDetail}>
          {title.substring(0, 15)}
        </Title>
        <Description onClick={handleClickProductDetail}>
          {description.substring(0, 45)}...
        </Description>
        <PriceButtonWrapper>
          <Price>R$ {price}</Price>
          <AddButton onClick={handleClickAddCart}>
            <LocalHospitalOutlinedIcon
              style={{
                fontSize: "2rem",
              }}
            />
          </AddButton>
        </PriceButtonWrapper>
      </InformationContainer>
    </Container>
  );
}
