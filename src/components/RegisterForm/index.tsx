import { ReactNode } from "react";

import { Button, Form, Input, Label } from "./styles";

interface RegisterFormProps {}

export function RegisterForm({}: RegisterFormProps) {
  return (
    <Form>
      <Label>Nome:</Label>
      <Input placeholder="Seu Nome" />

      <Label>CPF:</Label>
      <Input placeholder="000.000.000-00" />

      <Label>Telefone:</Label>
      <Input placeholder="(51) 99999-9999" />

      <Label>E-mail:</Label>
      <Input placeholder="user@email.com" />

      <Label>Senha:</Label>
      <Input type="password" placeholder="**********" />

      <Button>Cadastrar</Button>
    </Form>
  );
}
