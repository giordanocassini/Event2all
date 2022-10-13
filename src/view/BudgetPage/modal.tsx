import { useState, FormEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { cadastroBudget } from "../../services/auth";

export default function CreateBudget() {
  const [description, setDescription] = useState<string>("");
  const [provider, setProvider] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [predictedBudget, setPredictedBudget] = useState<number>();
  const [contractedBudget, setContractedBudget] = useState<number>();
  const [paidBudget, setPaidBudget] = useState<number>();
  const event_id = useParams().id as string;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitEvent = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await cadastroBudget({
        event_id,
        description,
        provider,
        contact,
        expected_expense: predictedBudget ? predictedBudget : 0,
        actual_expense: contractedBudget ? contractedBudget : 0,
        amount_already_paid: paidBudget ? paidBudget : 0,
      });
      alert("Despesa criada com sucesso");
      setDescription("");
      setProvider("");
      setContact("");
      setPredictedBudget(0);
      setContractedBudget(0);
      setPaidBudget(0);
      //teste
      setShow(false);
    } catch (error) {
      alert("Algo deu errado!");
    }
  };

  return (
    <>
      <Button onClick={handleShow}>+ Adicionar Despesa</Button>
      <Modal
        id="width-modal"
        className="d-flex align-items-center"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <span className="modal-title">Criar Orçamento</span>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitEvent} className="asd ">
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Descrição da despesa..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Fornecedor</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Nome do fornecedor (Opcional)"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Contato</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Contato do fornecedor (Opcional)"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Valor Previsto</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="$ 3"
                value={predictedBudget}
                onChange={(e) => setPredictedBudget(Number(e.target.value))}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Valor Contratado</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder=""
                value={contractedBudget}
                onChange={(e) => setContractedBudget(Number(e.target.value))}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>Valor Pago</Form.Label>
              <Form.Control
                className="inputTexto"
                type="number"
                placeholder="$ 3"
                value={paidBudget}
                onChange={(e) => setPaidBudget(Number(e.target.value))}
                required
              />
            </Form.Group>
            <Button
              className=" m-3 d-flex  aligh-items-end justify-content-end "
              variant="primary"
              type="submit"
            >
              Adicionar Despesa
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
// Alinhar com o pessoal de backend sobre os parametros e pedir pra adicionar/alterar
