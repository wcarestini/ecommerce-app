import Head from "next/head";
import styled from "styled-components";
import { Delivery } from "../components/Delivery";

const Main = styled.main``;

function Checkout() {
  return (
    <>
      <Head>
        <title>E-commerce | Checkout</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Delivery />
      </Main>
    </>
  );
}

export default Checkout;
