import { Event } from "../../utils/types";
import "./eventInfo.scss";

type EventInfoProps = {
  event: Event | undefined;
};

export default function EventInfo({ event }: EventInfoProps) {
  return (
    <div className="event">
      {/* vai pegar as infos do backend */}
      <div>
        <h3>{event?.name}</h3>
      </div>
      <div className="info-event">
        <div>
          <p>DATA</p>
          <p>{event?.date}</p>
        </div>
        <div>
          <p>LOCAL</p>
          <p>{event?.place}</p>
        </div>
        <div>
          <p>ORÇAMENTO</p>
          <p>{event?.event_budget}</p>
        </div>
        <div>
          <p>CONVIDADOS</p>
          <p>{event?.invite_number}</p>
        </div>
      </div>
    </div>
  );
}
