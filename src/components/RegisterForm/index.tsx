import axios from "axios";
import Router from "next/router";
import { ReactNode, useState } from "react";

import { Button, Form, Input, Label } from "./styles";

interface RegisterFormProps {}

export function RegisterForm({}: RegisterFormProps) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    axios
      .post("http://0.0.0.0:8080/auth", {
        name,
        cpf,
        telephone,
        email,
        password,
      })
      .then((response) => {
        if (response.status === 201) {
          Router.push("/login");
        }
      })
      .catch(() => setErrorMessage("Erro ao cadastrar, tente novamente!"));
    console.log({
      name,
      cpf,
      telephone,
      email,
      password,
    });
  }

  return (
    <Form>
      <Label>Nome:</Label>
      <Input
        required
        onChange={({ target }) => setName(target.value)}
        placeholder="Seu Nome"
      />

      <Label>CPF:</Label>
      <Input
        required
        onChange={({ target }) => setCpf(target.value)}
        placeholder="000.000.000-00"
      />

      <Label>Telefone:</Label>
      <Input
        required
        onChange={({ target }) => setTelephone(target.value)}
        placeholder="(51) 99999-9999"
      />

      <Label>E-mail:</Label>
      <Input
        required
        onChange={({ target }) => setEmail(target.value)}
        placeholder="user@email.com"
      />

      <Label>Senha:</Label>
      <Input
        required
        onChange={({ target }) => setPassword(target.value)}
        type="password"
        placeholder="**********"
      />

      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
