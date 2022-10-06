import { useState, FormEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { cadastroBudget } from "../../services/auth";

export default function CreateBudget() {
  const [budget_name, setBudget] = useState<string>("");
  const [budget_provider, setBudgetProvider] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [predicted_budget, setPredictedBudget] = useState<string>("");
  const [contracted_budget, setContractedBudget] = useState<string>("");
  const [paid_budget, setPaidBudget] = useState<string>("");

  const submitEvent = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await cadastroBudget({
        budget_name,
        budget_provider,
        contact,
        predicted_budget,
        contracted_budget,
        paid_budget,
      });
      alert("Despesa criada com sucesso");
    } catch (error) {
      alert("Algo deu errado!");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>+ Adicionar Despesa</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Despesa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitEvent} className="asd ">
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Descrição <span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Descrição da despesa..."
                value={budget_name}
                onChange={(e) => setBudget(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Fornecedor<span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Nome do fornecedor (Opcional)"
                value={budget_provider}
                onChange={(e) => setBudgetProvider(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Contato<span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Contato do fornecedor (Opcional)"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Valor Previsto<span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="$ 3"
                value={predicted_budget}
                onChange={(e) => setPredictedBudget(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Valor Contratado<span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder=""
                value={contracted_budget}
                onChange={(e) => setContractedBudget(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className=" boxform p-1 text-start mb-2">
              <Form.Label>
                Valor Pago<span className="obligatory">*</span>
              </Form.Label>
              <Form.Control
                className="inputTexto"
                type="number"
                placeholder="$ 3"
                value={paid_budget}
                onChange={(e) => setPaidBudget(e.target.value)}
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
