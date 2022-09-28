import { Card } from "react-bootstrap";
import "./homeSite.scss";

export default function HomeSite() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="img-home w-50"
          src="../../../public/images/home-site.png"
          alt="imagem da home"
        />
        <div className="content-home d-flex justify-content-center flex-column w-25">
          <div className="d-flex justify-content-center flex-column">
            <h3>
              O gerenciador de <br /> eventos mais completo <br /> do mercado.
            </h3>
            <span>Fácil, prático e com tudo que você precisa.</span>
          </div>
        </div>
      </div>
      <div className="cards vh-50">
        <div className="h-50">
          <Card
            id="card"
            className="d-flex flex-row align-items-center justify-content-space-between shadow-sm rounded text-center"
          >
            <Card.Body>
              <Card.Img
                src="../../../public/images/mood.png"
                alt="Mood"
                className="mood pt-5"
              />
              <h3>Prático</h3>
              <span>
                Em poucos cliques, adicione orçamento, tarefas e convidados.
              </span>
            </Card.Body>
            <Card.Body>
              <Card.Img
                src="../../../public/images/mood.png"
                alt="Mood"
                className="mood pt-5"
              />
              <h3>Prático</h3>
              <span>
                Em poucos cliques, adicione orçamento, tarefas e convidados.
              </span>
            </Card.Body>
            <Card.Body>
              <Card.Img
                src="../../../public/images/mood.png"
                alt="Mood"
                className="mood pt-5"
              />
              <h3>Prático</h3>
              <span>
                Em poucos cliques, adicione orçamento, tarefas e convidados.
              </span>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
