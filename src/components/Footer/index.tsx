import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./footer.scss";

export default function Footer(props: any) {
  return (
    <>
      <Navbar
        id="footer"
        style={{
          backgroundColor: props.backgroundColor,
          position: props.position,
        }}
      >
        <div className="footer">
          <Navbar.Brand className="logoFooter" href="#home">
            <Link to={"/"}>
              <img
                className="logo-footer"
                src={`/images/${props.logotipo}`}
              ></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Brand href="#facebook">
            <img src="/images/face.png" className="social-network"></img>
          </Navbar.Brand>
          <Navbar.Brand href="#instagram">
            <img src="/images/insta.png" className="social-network"></img>
          </Navbar.Brand>
          <Navbar.Brand href="#google">
            <img src="/images/img.png" className="social-network"></img>
          </Navbar.Brand>
          <Navbar.Brand href="#ios">
            <img src="/images/ios.png" className="social-network"></img>
          </Navbar.Brand>
        </div>
        <div className="copyright" style={{ color: props.color }}>
          © Todos os direitos reservados. Event2All.
        </div>
      </Navbar>
    </>
  );
}
