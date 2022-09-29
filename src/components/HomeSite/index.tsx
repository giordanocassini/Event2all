import { Card } from "react-bootstrap";
import HeaderHome from "../HeaderHome";
import Footer from "../Footer";
import "./homeSite.scss";

export default function HomeSite() {
  return (
    <div className="vh-100 vw-100">
      <HeaderHome />
      <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
        <img
          className="img-home me-5"
          src="../../../public/images/home-site.png"
          alt="imagem da home"
        />
        <div className="d-flex flex-wrap justify-content-center flex-column content-home ms-5">
            <h3>
              O gerenciador de <br /> eventos mais completo<br /> do mercado.
            </h3>
            <br />
            <span className="sub-text">Fácil, prático e com tudo que você precisa.</span>
        </div>
      </div>
      
      {/* C A R D S  */}

      <div id="cards" className="d-flex flex-wrap justify-content-center align-items-center">
        {/* <div className="d-flex"> */}
          <Card
            id="card"
            className="shadow-sm rounded text-center"
          >
            <Card.Body>
              <Card.Img
                src="../../../public/images/mood.png"
                alt="mood"
                className="mood"
              />
              <h4 className="text-center">Prático</h4>
              <span>
                Em poucos cliques, adicione orçamento, tarefas e convidados.
              </span>
            </Card.Body>
            </Card>
          <Card
            id="card"
            className="shadow-sm rounded text-center"
          >
            <Card.Body>
              <Card.Img
                src="../../../public/images/money.png"
                alt="money"
                className="mood"
              />
              <h4 className="text-center">Fácil</h4>
              <span>
                Em poucos cliques, adicione orçamento, tarefas e convidados.
              </span>
            </Card.Body>
            </Card>
          <Card
            id="card"
            className="shadow-sm rounded text-center"
          >
            <Card.Body>
              <Card.Img
                src="../../../public/images/thumb.png"
                alt="thumb"
                className="mood"
              />
              <h4 className="text-center">Sem custos</h4>
              <span>
                Em poucos cliques, adicione orçamento, tarefas e convidados.
              </span>
            </Card.Body>
            </Card>

      </div>
      <Footer backgroundColor="#191933" color="#FBFBFB" logotipo="logotipo2.png" position="static"/>
    </div>
  );
}
