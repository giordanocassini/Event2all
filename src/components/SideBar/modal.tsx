import { useState, FormEvent, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { cadastroEvent, editEventById } from "../../services/auth";
import { ButtonCreateModal } from "./stylemodal";
import { Event } from "../../utils/types";
import "./stylemodal.ts";
import "./modal.scss";

interface Props {
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  event?: Event;
  show?: boolean;
  edit?: boolean;
}

export default function CreateEvent({
  setEvents,
  setShow,
  setEdit,
  event,
  show,
  edit,
}: Props) {
  const [name, setName] = useState<string>("");
  const [date, setEventDate] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [invite_number, setInviteNumber] = useState<number>();
  const [managers, setManagers] = useState<string>("");
  const [event_budget, setEventBudget] = useState<number>();

  const handleClose = () => {
    setShow(false);
    setEdit(false);
    setName("");
    setEventDate("");
    setPlace("");
    setInviteNumber(0);
    setManagers("");
    setEventBudget(0);
  };
  const handleShow = () => setShow(true);

  const submitEvent = async (e: FormEvent) => {
    e.preventDefault();
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

      handleClose();

      alert("Evento criado com sucesso");
    } catch (error) {
      alert("Algo deu errado");
    }
  };

  const submitEditEvent = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await editEventById(event!.id, {
        name,
        date,
        place,
        invite_number: invite_number ? invite_number : 0,
        event_budget: event_budget ? event_budget : 0,
      });

      alert("Evento atualizado com sucesso!");

      handleClose();
    } catch (error) {
      alert("Algo deu errado");
    }
  };

  useEffect(() => {
    if (edit) {
      setName(event!.name);
      setEventDate(event!.date.slice(0, 10));
      setPlace(event!.place);
      setInviteNumber(event!.invite_number);
      setManagers("");
      setEventBudget(event!.event_budget);
    }
  }, [edit]);

  return (
    <>
      <ButtonCreateModal onClick={handleShow} className="w-100">
        + Criar evento
      </ButtonCreateModal>

      <Modal
        id="width-modal"
        className="d-flex align-items-center"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <span className="modal-title">
            {edit ? "Editar Evento" : "Criar Evento"}
          </span>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={edit ? submitEditEvent : submitEvent}
            className="asd "
          >
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Nome do Evento</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Digite o nome do evento..."
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              {edit ? "Editar Evento" : "Criar Evento"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
