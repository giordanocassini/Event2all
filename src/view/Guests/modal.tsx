import { Button, Form, FormGroup, FormLabel, Modal } from "react-bootstrap";
import { useState, FormEvent, useEffect } from "react";
import { cadastroGuest } from "../../services/auth";
import { Switch } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./guests.scss";

export default function ModalGuests() {
  const [name_guest, setNameGuest] = useState<string>("");
  const [contact_guest, setContactGuest] = useState<string>("");
  const [checkGuest, setCheckGuest] = useState<string>("");

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGuest(e.target.value);
  };

  const submitAddGuest = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await cadastroGuest({
        name_guest,
        contact_guest,
        checkGuest,
      });
      alert("Convidado adicionado com sucesso");
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
                value={name_guest}
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
                value={contact_guest}
                onChange={(e) => setContactGuest(e.target.value)}
                required
              />
            </Form.Group>
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Convite enviado?"
                className="px-3 mb-2"
              />
            </FormGroup>
            <Form.Label className="px-2">Confirmado?</Form.Label>
            <FormGroup className="mx-4  d-flex justify-content-evenly ">
              <Form.Check
                className="radio1"
                type="radio"
                name="group1"
                onChange={(e) => handleInputChanges(e)}
                value="sim"
                label="Sim"
                id="Sim"
              />

              <Form.Check
                className="radio2"
                type="radio"
                name="group1"
                onChange={(e) => handleInputChanges(e)}
                id="Não"
                value="nao"
                label="Não"
              />
              <Form.Check
                className="radio3"
                type="radio"
                name="group1"
                onChange={(e) => handleInputChanges(e)}
                value="talvez"
                label="Talvez"
                id="Talvez"
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
