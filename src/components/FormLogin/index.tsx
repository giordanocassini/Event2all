import { FormEvent, useState } from "react";
import { Card, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { login } from "../../services/auth";
// import { useDispatch } from "react-redux";
// import { getUser, setUser } from "../../store/modules/users";
// import { Dispatch } from "@reduxjs/toolkit";

export default function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await login({ email, password });

      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("id", response.data.id);
      // dispatch(getUser());

      // navigate("/");
    } catch (error) {
      alert("Opa! Deu algo errado!");
    }
  };
  return (
    <div className="container h-100 pt-5 d-flex alight-itens-center justify-content-center">
      <Form onSubmit={submit}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Fazer login
        </Button>
        <FormGroup className="cadastrarLink">
          <Link to={"/register"}> Cadastre-se</Link>
        </FormGroup>
      </Form>
    </div>
  );
}
