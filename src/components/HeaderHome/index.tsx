import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { StyledNav } from "./styles";
import "./headerHome.scss";

export default function HeaderHome() {
  return (
    <Navbar className="dark-blue">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          <img src="../../../public/images/logotipo2.png"></img>
        </Navbar.Brand>
        <Navbar.Brand className="text-white nav-text" href="#home">
          Home
        </Navbar.Brand>
        <Navbar.Brand className="text-white nav-text" href="#home">
          Quem somos
        </Navbar.Brand>
        <Navbar.Brand className="text-white nav-text" href="#home">
          Benefícios
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button className="btn-light py-1 px-4 me-2 rounded-1 text-dark fw-bold">Fazer login</Button>
          <Button className="btn-success py-1 px-4 rounded-1 text-dark fw-bold">Cadastrar-se</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
