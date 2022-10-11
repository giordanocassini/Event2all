import { Form, Card, FormGroup, Button } from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/auth";
import Header from "../Header";
import Footer from "../Footer";
//import { cadastro } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import "./formSignUp.scss";

export default function FormSignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmarPassword, setConfirmarPassword] = useState<string>("");
  const [birth_date, setBirthday] = useState<string>("");
  const [wrongPass, setWrongPass] = useState<string>("");

  const navigate = useNavigate();

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmarPassword) {
      alert("Senha não confere!");
    } else {
      try {
        await register({
          name,
          email,
          birth_date,
          password,
        });
      } catch (error) {
        alert("Opa! Deu algo errado!");
      }
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
    <div className="vh-100 d-flex justify-content-center align-items-center px-2">
      <div className="h-100 d-flex flex-column align-items-center justify-content-center parent-signup">
        {/* <Header /> */}
        <h3>Crie sua conta!</h3>
        <span>Preencha seus dados e programe seu evento já!</span>
        <Form onSubmit={submit} className="text-center">
          <Form.Group
            className=" boxform p-1 text-start mb-2"
            controlId="formBasicEmail"
          >
            <Form.Label>
              Nome <span className="obligatory">*</span>
            </Form.Label>
            <Form.Control
              className="inputTexto"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group
            className="boxform p-1 text-start mb-2"
            controlId="formBasicEmail"
          >
            <Form.Label>
              E-mail <span className="obligatory">*</span>
            </Form.Label>
            <Form.Control
              className="inputTexto"
              type="email"
              placeholder="Digite seu  e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group
            className="boxform p-1 text-start mb-2"
            controlId="formBasicBirthday"
          >
            <Form.Label>
              Data de nascimento <span className="obligatory">*</span>
            </Form.Label>
            <Form.Control
              className="inputTexto"
              type="date"
              // placeholder="DD/MM/AAAA"
              onfocus="(this.type='date')"
              value={birth_date}
              onChange={(e) => setBirthday(e.target.value)}
              //required
            />
          </Form.Group>

          <Form.Group
            className=" boxform p-1 text-start mb-2"
            controlId="formBasicPassword"
          >
            <Form.Label>
              Senha <span className="obligatory">*</span>
            </Form.Label>
            <Form.Control
              className="inputTexto"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group
            className="p-1 boxform text-start mb-2"
            controlId="formBasicPassword"
          >
            <Form.Label>
              Confirmar senha <span className="obligatory">*</span>
            </Form.Label>
            <Form.Control
              className={`inputTexto ${wrongPass}`}
              type="password"
              placeholder="Confirme sua senha"
              value={confirmarPassword}
              onChange={(e) => setConfirmarPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button className="buttonCadastro mt-4" type="submit">
            Cadastrar-se
          </Button>
          <FormGroup className="cadastrarLink">
            <p className="pt-4 mb-1">
              Já tem cadastro? <Link to={"/login"}>Login</Link>
            </p>
          </FormGroup>
        </Form>
        {/* <Footer backgroundColor="#E5E5E5" color="#000000" logotipo="logotipo.png" /> */}
      </div>
    </div>
  );
}
