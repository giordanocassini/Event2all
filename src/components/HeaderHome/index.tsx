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

        <Navbar.Toggle />
        <Navbar.Collapse id="media" className="justify-content-end">
          <Link className="button-header" to={"/login"}>
            <Button className="btn-light rounded-1 text-dark fw-bold button-login">
              Fazer login
            </Button>
          </Link>
          <Link className="button-header" to={"/cadastro"}>
            <Button className="btn-success rounded-1 fw-bold button-signup">
              Cadastrar-se
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
