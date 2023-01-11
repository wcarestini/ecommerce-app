import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import {
  Button,
  ButtonsContainer,
  InformationContainer,
  Main,
  Price,
  Title,
} from "./styles";

interface ProductProps {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

export default function Product({
  name,
  price,
  description,
  imageUrl,
}: ProductProps) {
  return (
    <>
      <Head>
        <title>E-commerce | {name}</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <img src={imageUrl} alt="" />
        <InformationContainer>
          <Title>{name}</Title>
          <Price>R$ {price}</Price>
          <p>{description}</p>
          <ButtonsContainer>
            <Button>Add carrinho</Button>
            <Button>
              <strong>Comprar</strong>
            </Button>
          </ButtonsContainer>
        </InformationContainer>
      </Main>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  try {
    const { data, status } = await axios.get(
      "http://0.0.0.0:8080/products/" + id
    );

    return {
      props: {
        name: data.name,
        price: data.price,
        description: data.description,
        imageUrl: data.imageUrl,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
