import axios from "axios";
import Cookies from "js-cookie";
import { ReactNode, useState } from "react";
import Router from "next/router";

import { Button, Form, Input, Label } from "./styles";

interface LoginFormProps {}

export function LoginForm({}: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin() {
    // console.log("username:", username);
    // console.log("password:", password);
    axios
      .post("http://0.0.0.0:8080/auth/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.status === 201) {
          Cookies.set("accessToken", response.data.access_token);
          Router.push("/");
        }
      })
      .catch(() => setErrorMessage("Erro ao fazer login, tente novamente!"));
  }

  function handleUser({ target }) {
    setUsername(target.value);
  }

  function handlePassword({ target }) {
    setPassword(target.value);
  }

  return (
    <Form>
      <Label>Usuário:</Label>
      <Input onChange={handleUser} placeholder="user@email.com" />
      <Label>Senha:</Label>
      <Input
        onChange={handlePassword}
        type="password"
        placeholder="**********"
      />
      <Button onClick={handleLogin}>Logar</Button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </Form>
  );
}
