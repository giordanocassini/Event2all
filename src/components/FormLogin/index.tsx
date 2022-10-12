import { FormEvent, useState, useEffect } from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import { useDispatch } from "react-redux";
import { getUser, setUser } from "../../store/modules/users";
import { Dispatch } from "@reduxjs/toolkit";
import "./formLogin.scss";
import { PLogin } from "./style";

export default function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await login({ email, password });

      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(getUser());

      console.log("logado com:", response.data.user);
      console.log("token", response.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert("Erro no login!")
    }
  };

  return (
    <div className="vh-100">
      <div className="form-login h-100 d-flex align-items-center justify-content-center">
        <h3>Login</h3>
        <PLogin>Preencha seus dados e programe seu evento já!</PLogin>
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="button-login" variant="primary" type="submit">
            Fazer login
          </Button>
          <FormGroup>
            <span className="d-flex aligh-items-center justify-content-center pt-4">
              Não tem login?
              <Link className="px-2" to={"/cadastro"}>
                Cadastre-se
              </Link>
            </span>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
