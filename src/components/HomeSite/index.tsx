import { Card, Container } from "react-bootstrap";
import "./homeSite.scss";

export default function HomeSite() {
  return (
    <div className="kkk">
      <Container className="d-flex flex-wrap justify-content-center align-items-center w-100 ">
        <img
          className="img-home me-5"
          src="/images/homepage.png"
          alt="imagem da home"
        />
        <div className="d-flex flex-wrap justify-content-center flex-column content-home ms-5">
          <h3 className="home-text">
            O gerenciador de <br /> eventos mais completo
            <br /> do mercado.
          </h3>
          <br />
          <span className="sub-text home-subtext">
            Fácil, prático e com tudo que você precisa.
          </span>
        </div>
      </Container>

      {/* C A R D S  */}

      <div
        id="cards"
        className="d-flex justify-content-center align-items-center p-4 h-100"
      >
        <Card id="card" className="rounded text-center">
          <Card.Body>
            <Card.Img
              src="../../../public/images/mood.png"
              alt="mood"
              className="mood mt-4 mb-3"
            />
            <h4 className="text-center">Prático</h4>
            <span className="span-responsivity">
              Em poucos cliques, adicione orçamento, tarefas e convidados.
            </span>
          </Card.Body>
        </Card>
        <Card id="card" className="rounded text-center">
          <Card.Body>
            <Card.Img
              src="../../../public/images/thumb.png"
              alt="money"
              className="mood mt-4 mb-3"
            />
            <h4 className="text-center">Fácil</h4>
            <span className="span-responsivity">
              Em poucos cliques, adicione orçamento, tarefas e convidados.
            </span>
          </Card.Body>
        </Card>
        <Card id="card" className="rounded text-center">
          <Card.Body>
            <Card.Img
              src="../../../public/images/money.png"
              alt="thumb"
              className="mood mt-4 mb-3"
            />
            <h4 className="text-center">Sem custos</h4>
            <span className="span-responsivity">
              Em poucos cliques, adicione orçamento, tarefas e convidados.
            </span>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
