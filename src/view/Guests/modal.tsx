import { Button, Form, Modal } from "react-bootstrap";
import { useState, FormEvent } from "react";

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

export default function ModalGuests() {
  const [name_guest, setNameGuest] = useState<string>("");
  const [contact_guest, setContactGuest] = useState<string>("");
  // será que esses botões que vem vão ter que dar States? Vai pro back?
const submitAddGuest= async (event:)

  return (
    <>
      <Button onClick={handleShow}> Adicionar Convidados</Button>
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
                value={event_name}
                onChange={(e) => setEvent(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Data</Form.Label>
              <Form.Control
                className="inputTexto"
                type="date"
                value={event_date}
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
                onChange={(e) => setInviteNumber(e.target.value)}
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
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-5">
              <Form.Label>Orçamento Previsto</Form.Label>
              <Form.Control
                className="inputTexto"
                type="number"
                placeholder="R$00,00"
                // mask=""
                value={event_budget}
                onChange={(e) => setEventBudget(e.target.value)}
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
