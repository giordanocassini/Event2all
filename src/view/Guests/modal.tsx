import { Button, Form, FormGroup, FormLabel, Modal } from "react-bootstrap";
import { useState, FormEvent, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { cadastroGuest } from "../../services/auth";
import "./guests.scss";

export default function ModalGuests() {
  const [name, setNameGuest] = useState<string>("");
  const [contact, setContactGuest] = useState<string>("");
  const [invite, setInviteGuest] = useState<any>(false);
  const [isConfirmed, setIsConfirmed] = useState<any>(false);
  const [event_id, setEvent_Id] = useState<any>();

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInviteGuest(e.target.value);
    setIsConfirmed(e.target.value);
  };

  const eventId = useParams().id;

  const submitAddGuest = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await cadastroGuest({
        name,
        contact,
        invite,
        isConfirmed,
        event_id,
      });
      handleClose();
    } catch (error) {
      alert("Algo deu errado!");
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <span className="modal-title">Adicionar Convidado</span>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitAddGuest} className="asd ">
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Nome </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Nome do convidado"
                value={name}
                onChange={(e) => setNameGuest(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Contato</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Inserir contato (Opcional)"
                value={contact}
                onChange={(e) => setContactGuest(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Digite {eventId} abaixo para confirmar</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Digite o número acima"
                value={event_id}
                onChange={(e) => setEvent_Id(e.target.value)}
                required
              />
            </Form.Group>
            <FormGroup>
              <span className="m-2">Convite enviado?</span>
              <Form.Check className="ms-2" type="switch" id="custom-switch" />
            </FormGroup>
            <span className="m-2">Confirmado?</span>
            <FormGroup className="mt-2 d-flex">
              <Form.Check
                className="radio1 m-2"
                type="radio"
                name="group1"
                onChange={(e) => handleInputChanges(e)}
                value="sim"
                label="Sim"
                id="Sim"
              />

              <Form.Check
                className="radio2 m-2"
                type="radio"
                name="group1"
                onChange={(e) => handleInputChanges(e)}
                id="Não"
                value="nao"
                label="Não"
              />

              <Form.Check
                className="radio3 m-2"
                type="radio"
                name="group1"
                onChange={(e) => handleInputChanges(e)}
                id="Talvez"
                value="talvez"
                label="Talvez"
              />
            </FormGroup>

            <hr />
            <Button className="w-100" variant="primary" type="submit">
              Adicionar Convidado
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
