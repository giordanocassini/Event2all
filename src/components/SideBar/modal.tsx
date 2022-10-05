import React, { useState, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { cadastroEvent } from "../../services/auth";

export default function CreateEvent() {
  const [event_name, setEvent] = useState<string>("");
  const [event_date, setEventDate] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [invite_number, setInviteNumber] = useState<string>("");
  const [managers, setManagers] = useState<string>("");
  const [event_budget, setEventBudget] = useState<string>("");

  const submitEvent = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await cadastroEvent({
        event_name,
        event_date,
        place,
        invite_number,
        managers,
        event_budget,
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
      <Button onClick={handleShow}>
        + Criar evento
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitEvent} className="asd ">
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Nome do Evento <span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Digite o nome do evento..."
                value={event_name}
                onChange={(e) => setEvent(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Data<span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="date"
                value={event_date}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Local<span className="obligatory">*</span>
              </Form.Label>
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
              <Form.Label>
                Número de Convidados<span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="250 convidados"
                value={invite_number}
                onChange={(e) => setInviteNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Responsáveis<span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder=""
                value={managers}
                onChange={(e) => setManagers(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Orçamento Previsto<span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="number"
                placeholder="R$00,00"
                value={event_budget}
                onChange={(e) => setEventBudget(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              className=" m-3 d-flex  aligh-items-end justify-content-end "
              variant="primary"
              type="submit"
            >
              Criar Evento
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
// Alinhar com o pessoal de backend sobre os parametros e pedir pra adicionar/alterar
