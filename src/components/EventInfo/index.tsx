import "./eventInfo.scss";

export default function EventInfo() {
  return (
    <div className="event">
      {/* vai pegar as infos do backend */}
      <div>
        <h3>Nome do evento</h3>
      </div>
      <div className="info-event">
        <div>
          <p>DATA</p>
          <p>12, mai,p 2022</p>
        </div>
        <div>
          <p>LOCAL</p>
          <p>Rua 123, Nº 123, São Paulo</p>
        </div>
        <div>
          <p>ORÇAMENTO</p>
          <p>R$ 24.000,00</p>
        </div>
        <div>
          <p>CONVIDADOS</p>
          <p>250</p>
        </div>
      </div>
    </div>
  );
}
