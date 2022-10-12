import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="backgroundHeader py-4 w-100">
      <Container className="d-flex align-items-center justify-content-center">
        <Link to={"/"}>
          <img src="/images/logotipo2.png" alt="logo do event" />
        </Link>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}
