import React, { useState, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { cadastroEvent } from "../../services/auth";

export default function CreateEvent() {
  const [event_name, setEvent] = useState<string>("");
  const [event_description, setEventDescription] = useState<string>("");
  const [event_date, setEventDate] = useState<string>("");
  const [place, setPlace] = useState<string>("");

  const submitEvent = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await cadastroEvent({
        event_name,
        event_description,
        event_date,
        place,
      });
      alert("Evento criado com sucesso");
    } catch (error) {
      alert("Algo de certo não está certo!");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Criar evento
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crie seu evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitEvent} className="asd">
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Nome do evento <span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Digite o nome do evento"
                value={event_name}
                onChange={(e) => setEvent(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Descrição do evento <span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Digite o nome do evento"
                value={event_description}
                onChange={(e) => setEventDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Data do evento <span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="date"
                placeholder="Digite o nome do evento"
                value={event_date}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Local do evento <span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Digite o local do evento"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salvar Evento
            </Button>
            <Button onClick={handleClose}>Fechar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
// Alinhar com o pessoal de backend sobre os parametros e pedir pra adicionar/alterar

