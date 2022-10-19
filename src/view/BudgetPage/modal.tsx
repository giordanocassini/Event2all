import { useState, FormEvent, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IQuotation } from ".";
import {
  cadastroBudget,
  editQuotationById,
  getQuotationsByEventId,
} from "../../services/auth";

interface Props {
  show: boolean;
  edit: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setQuotations: React.Dispatch<React.SetStateAction<IQuotation[]>>;
  quotation: IQuotation;
}

export default function ModalBudget({
  setQuotations,
  setShow,
  show,
  setEdit,
  edit,
  quotation,
}: Props) {
  const [description, setDescription] = useState<string>("");
  const [provider, setProvider] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [predictedBudget, setPredictedBudget] = useState<number>();
  const [contractedBudget, setContractedBudget] = useState<number>();
  const [paidBudget, setPaidBudget] = useState<number>();
  const event_id = useParams().id as string;

  const payload = {
    description,
    provider,
    contact,
    expected_expense: predictedBudget ? predictedBudget : 0,
    actual_expense: contractedBudget ? contractedBudget : 0,
    amount_already_paid: paidBudget ? paidBudget : 0,
  };

  const handleClose = () => {
    setDescription("");
    setProvider("");
    setContact("");
    setPredictedBudget(0);
    setContractedBudget(0);
    setPaidBudget(0);
    setShow(false);
    setEdit(false);
  };
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

      const response = await getQuotationsByEventId(event_id!).then((res) => {
        return res.data.reverse();
      });
      setQuotations(response);

      handleClose();
    } catch (error) {
      alert("Algo deu errado!");
    }
  };

  const submitEditEvent = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await editQuotationById(quotation.id, {
        description,
        provider,
        contact,
        expected_expense: predictedBudget ? predictedBudget : 0,
        actual_expense: contractedBudget ? contractedBudget : 0,
        amount_already_paid: paidBudget ? paidBudget : 0,
      });

      handleClose();
    } catch (error) {}
  };

  useEffect(() => {
    if (edit) {
      setDescription(quotation.description);
      setProvider(quotation.provider);
      setContact(quotation.contact);
      setPredictedBudget(quotation.expected_expense);
      setContractedBudget(quotation.actual_expense);
      setPaidBudget(quotation.amount_already_paid);
    }
  }, [edit]);

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
          <span className="modal-title">
            {edit ? "Editar Orçamento" : "Criar Orçamento"}
          </span>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={edit ? submitEditEvent : submitEvent}
            className="asd "
          >
            <Form.Group className="boxform p-1 text-start mb-2">
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
            <Form.Group className="boxform p-1 text-start mb-2">
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
            <Form.Group className="boxform p-1 text-start mb-2">
              <Form.Label>Contato</Form.Label>
              <Form.Control
                className="inputTexto"
                type="text"
                placeholder="Contato do fornecedor (Opcional)"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="boxform p-1 text-start mb-2">
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
            <Form.Group className="boxform p-1 text-start mb-2">
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
            <Form.Group className="boxform p-1 text-start mb-2">
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
              className="m-3 d-flex  aligh-items-end justify-content-end"
              variant="primary"
              type="submit"
            >
              {edit ? "Atualizar Orçamento" : "Adicionar Despesa"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
