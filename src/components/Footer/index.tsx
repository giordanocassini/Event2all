import Navbar from "react-bootstrap/Navbar";
import "./footer.scss";

export default function Footer(props: any) {
  return (
    <Navbar id="asd" style={{backgroundColor: props.backgroundColor, position: props.position}}>
      <div className="footer">
        <Navbar.Brand  className="logoFooter" href="#home">
          <img src={`../../../public/images/${props.logotipo}`}></img>
        </Navbar.Brand>
        <Navbar.Brand href="#facebook">
          <img src="../../../public/images/face.png"></img>
        </Navbar.Brand>
        <Navbar.Brand href="#instagram">
        <img src="../../../public/images/insta.png"></img>
        </Navbar.Brand>
        <Navbar.Brand href="#google">
        <img src="../../../public/images/img.png"></img>
        </Navbar.Brand>
        <Navbar.Brand href="#ios">
        <img src="../../../public/images/ios.png"></img>
        </Navbar.Brand>
      </div>
      <div className="copyright" style={{color: props.color}}>© Todos os direitos reservados. Event2All.</div>
    </Navbar>
  );
}
