import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";
import { LoginForm } from "../components/LoginForm";

const Main = styled.main`
  min-height: 69vh;

  padding: 2rem 0 0 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  border-bottom: rgba(0, 0, 0, 25%) solid 1px;
`;

export const Button = styled.button`
  width: 50%;
  padding: 1.5rem 0 1.5rem 0;
  border: none;
  background: white;
  color: black;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

function Login() {
  return (
    <>
      <Head>
        <title>E-commerce | Login</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Login</Title>
        <LoginForm />
        <Button onClick={() => Router.push("/register")}>
          Cadastre-se agora mesmo
        </Button>
      </Main>
    </>
  );
}

export default Login;
