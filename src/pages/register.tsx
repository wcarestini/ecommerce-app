import Head from "next/head";
import styled from "styled-components";
import { RegisterForm } from "../components/RegisterForm";

const Main = styled.main`
  min-height: 69vh;

  padding: 2rem 0 2rem 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  border-bottom: rgba(0, 0, 0, 25%) solid 1px;
`;

export default function Register() {
  return (
    <>
      <Head>
        <title>E-commerce | Cadastro</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Cadastro</Title>
        <RegisterForm />
      </Main>
    </>
  );
}
