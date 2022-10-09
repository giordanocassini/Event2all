import React, { useState, FormEvent } from "react";
import { NumericFormat } from 'react-number-format';
import { Button, Form, Modal } from "react-bootstrap";
import "./modal.scss"

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
      alert("Algo deu errado!");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>+ Criar evento</Button>

      <Modal id="width-modal" className="d-flex align-items-center" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         <span className="modal-title">Criar Evento</span> 
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitEvent} className="asd ">
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Nome do Evento 
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
                Data
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
                Local
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
                Número de Convidados
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="number"
                placeholder="250 convidados"
                value={invite_number}
                onChange={(e) => setInviteNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Responsáveis
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
            <Form.Group className=" boxform p-1 text-start mb-5">
              <Form.Label>
                Orçamento Previsto
              </Form.Label>
              <Form.Control
              // <NumericFormat
                className="inputTexto d-flex"
                // type="number"
                placeholder="R$ 00,00"
                value={event_budget}
                decimalScale={2} 
                prefix={'R$'}
                thousandSeparator=","
                onChange={(e) => setEventBudget(e.target.value)}
                required
                />
                {/* /> */}
            </Form.Group>
            <hr />
            <Button
              className="w-100"
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
