import { useState, FormEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./stylemodal.ts";
import { cadastroEvent } from "../../services/auth";
import { ButtonCreateModal } from "./stylemodal";
ButtonCreateModal;
import "./modal.scss";

interface Props {
  setEvents: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function CreateEvent({ setEvents }: Props) {
  const [name, setEvent] = useState<string>("");
  const [date, setEventDate] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [invite_number, setInviteNumber] = useState<number>();
  const [managers, setManagers] = useState<string>("");
  const [event_budget, setEventBudget] = useState<number>();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitEvent = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await cadastroEvent({
        name,
        date,
        place,
        invite_number: invite_number ? invite_number : 0,
        managers: managers === "" ? [] : managers.split(","),
        event_budget: event_budget ? event_budget : 0,
      });
      console.log(response);
      setEvents((prev) => [...prev, response.data]);

      setEvent("");
      setEventDate("");
      setPlace("");
      setInviteNumber(0);
      setManagers("");
      setEventBudget(0);

      setShow(false);

      alert("Evento criado com sucesso");
    } catch (error) {
      alert("Algo deu errado!");
    }
  };

  return (
    <>
      <ButtonCreateModal onClick={handleShow}>+ Criar evento</ButtonCreateModal>

      <Modal
        id="width-modal"
        className="d-flex align-items-center"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <span className="modal-title">Criar Evento</span>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitEvent} className="asd ">
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Nome do Evento</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Digite o nome do evento..."
                value={name}
                onChange={(e) => setEvent(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Data</Form.Label>
              <Form.Control
                className="inputTexto"
                type="date"
                value={date}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Local</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Rua Exemplo, N°, Bairro, Cidade, CEP"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Número de Convidados</Form.Label>
              <Form.Control
                className="inputTexto"
                type="number"
                placeholder="250 convidados"
                value={invite_number}
                onChange={(e) => setInviteNumber(Number(e.target.value))}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Responsáveis</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder=""
                value={managers}
                onChange={(e) => setManagers(e.target.value)}
                // required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-5">
              <Form.Label>Orçamento Previsto</Form.Label>
              <Form.Control
                className="inputTexto d-flex"
                placeholder="R$ 00,00"
                value={event_budget}
                decimalScale={2}
                prefix={"R$"}
                thousandSeparator=","
                onChange={(e) => setEventBudget(Number(e.target.value))}
                required
              />
            </Form.Group>
            <hr />
            <Button className="w-100" variant="primary" type="submit">
              Criar Evento
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
