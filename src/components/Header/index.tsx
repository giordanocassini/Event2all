import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import { StyledNav } from "./styles";
import "./header.scss";
import Photo from "../../assets/images/logotipo2.png";

export default function Header() {
  return (
    <Navbar id="view-height" className="bg">
      <Container className="header-login">
        <Navbar.Brand href="#home">
          <img src={Photo}></img>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}
