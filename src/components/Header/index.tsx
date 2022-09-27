import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import { StyledNav } from "./styles";
import "./header.scss";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar id="view-height" className="backgroundHeader">
      <Container className="headerLogin">
        <Link to={"/"}>
          <img src="../../../public/images/logotipo2.png" alt="logo do event" />
        </Link>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}
