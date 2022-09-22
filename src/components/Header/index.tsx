import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { StyledNav } from './styles';
import "./styles.scss"


export default function Header() {
  return (
    <Navbar id="view-height" className='bg-info'>
      <Container>
        <Navbar.Brand className='text-white' href="#home">📷 Logomarca</Navbar.Brand>
        <Navbar.Brand className='text-white' href="#home">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Button className='py-1 px-4 rounded-1'>Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
