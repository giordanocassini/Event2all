import "./eventInfo.scss";

interface Props {
  eventName: string;
  dataEvent: Date;
  localEvent: string;
  budget: number;
  guests: number;
}

export default function EventInfo({
  eventName,
  dataEvent,
  localEvent,
  budget,
  guests,
}: Props) {
  return (
    <div className="event">
      {/* vai pegar as infos do backend */}
      <div>
        <h3>Nome do evento</h3>
      </div>
      <div className="info-event">
        <div>
          <p>DATA</p>
          <p>12, maio 2022</p>
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
