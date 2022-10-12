import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./headerHome.scss";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  return (
    <Navbar className="d-flex dark-blue p-4">
      <Container id="mediaImg">
        <Navbar.Brand className="text-white" href="#home">
          <img className="logo-header" src="/images/logotipo2.png"></img>
        </Navbar.Brand>
        <Navbar.Brand
          className="text-white nav-text textNav header-resp"
          href="#home"
        >
          Home
        </Navbar.Brand>
        <Navbar.Brand
          className="text-white nav-text textNav header-resp"
          href="#home"
        >
          Quem somos
        </Navbar.Brand>
        <Navbar.Brand
          className="text-white nav-text textNav header-resp"
          href="#home"
        >
          Benefícios
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="media" className="justify-content-end">
          <Link className="button-header" to={"/login"}>
            <Button className="btn-light py-1 px-4 me-2 rounded-1 text-dark fw-bold button-login">
              Fazer login
            </Button>
          </Link>
          <Link className="button-header" to={"/cadastro"}>
            <Button className="btn-success py-1 px-4 rounded-1 text-dark fw-bold button-signup">
              Cadastrar-se
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
