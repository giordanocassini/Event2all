import { Form, Card, FormGroup, Button } from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/auth";
import "./formsign.scss";
/* import { cadastro } from "../../services/userServices";
import { useNavigate } from "react-router-dom"; */
export default function FormSignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmarPassword, setConfirmarPassword] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");
  const [wrongPass, setWrongPass] = useState<string>("");

  //const navigate = useNavigate();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await register({
        name,
        email,
        password,
      });

      alert("Usuário cadastrado com sucesso");

      // navigate("/login");
    } catch (error) {
      alert("Opa! Deu algo errado!");
    }
  };

  useEffect(() => {
    if (password !== confirmarPassword) {
      setWrongPass("wrong-password");
    } else {
      setWrongPass("");
    }
  }, [confirmarPassword]);

  return (
    <div>
      <div
        className="formCadastro container h-100 pt-5 d-flex align-itens-center 
        justify-content-center  "
      >
        <Form className="formulario text-center">
          <img src="/assets/img/logo-colorido.png" alt="" />
          <h3> Crie sua conta!</h3>
          <span>Preencha seus dados e programe seu evento já!</span>
          <Form.Group
            className=" boxform d-flex  p-3 "
            controlId="formBasicEmail"
          >
            <Form.Control
              className="inputTexto"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="boxform p-3" controlId="formBasicEmail">
            <Form.Control
              className="inputTexto"
              type="email"
              placeholder="Digite seu  e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className=" boxform p-3" controlId="formBasicPassword">
            <Form.Control
              className="inputTexto"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="p-3 boxform" controlId="formBasicPassword">
            <Form.Control
              className={`inputTexto ${wrongPass}`}
              type="password"
              placeholder="Confirme sua senha"
              value={confirmarPassword}
              onChange={(e) => setConfirmarPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="buttonCadastro" type="submit">
            Fazer cadastro
          </Button>
          <FormGroup className="cadastrarLink">
            <p className="p-4">
              Já tem cadastro? <Link to={"/login"}>Login</Link>
            </p>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
