import { Button, Form, Modal } from "react-bootstrap";
import { useState, FormEvent } from "react";
import { cadastroGuest } from "../../services/auth";

export default function ModalGuests() {
  const [name_guest, setNameGuest] = useState<string>("");
  const [contact_guest, setContactGuest] = useState<string>("");
  // será que esses botões que vem vão ter que dar States? Vai pro back?
  const submitAddGuest = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await cadastroGuest({
        name_guest,
        contact_guest,
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

            <hr />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
