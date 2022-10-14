import { Event } from "../../utils/types";
import moment from "moment";
import "./styles.ts";
import { InfoEventStyle, StyleInfo } from "./styles";

type EventInfoProps = {
  event: Event | undefined;
};

export default function EventInfo({ event }: EventInfoProps) {
  return (
    <StyleInfo>
      <div>
        <h3>{event?.name}</h3>
      </div>
      <InfoEventStyle>
        <div>
          <p>DATA</p>
          <p>{moment(event?.date).format("DD/MM/YYYY kk:mm:ss")}</p>
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
      </InfoEventStyle>
    </StyleInfo>
  );
}
