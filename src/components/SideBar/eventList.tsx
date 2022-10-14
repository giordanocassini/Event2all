import { Event } from "../../utils/types";
import CreateEvent from "./modal";

interface Props {
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EventList({
  setEvents,
  setShow,
  show,
  setEdit,
}: Props) {
  return (
    <div id="test-asd" className="d-flex flex-column p-4 mt-3">
      <h5>Você não tem nenhum evento adicionado.</h5>
      <p className="text-white">
        Para adicionar, clique no botão abaixo ou no '+'
      </p>
      <hr />

      <CreateEvent
        setEvents={setEvents}
        setShow={setShow}
        show={show}
        setEdit={setEdit}
      />
    </div>
  );
}
