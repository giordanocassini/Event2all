import SideBar from "../../components/SideBar/SideBar";
import { Card, Table, InputGroup, Form } from "react-bootstrap";
import { MdPaid } from "react-icons/md";
import CreateBudget from "./modal";
import { Pagination } from "@mui/material";
import BreadCrumbs from "../../components/BreadCrumbs";
import "./BudgetPage.scss";
import { useCallback, useEffect, useState } from "react";
import { delQuotationByEventId, getQuotationByEventId } from "../../services/auth";
import { useParams, useLocation } from "react-router-dom";
import React from "react";
import { BreadcrumbItem } from "../../utils/types";
import Dropdown from "react-bootstrap/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";

export interface IQuotation {
  id: number;
  contact: string;
  description: string;
  provider: string;
  expected_expense: number;
  actual_expense: number;
  amount_already_paid: number;
  createDateColumn: Date;
  updateDateColumn: Date;
}

function useQuery(search: string) {
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function BudgetPage() {
  const { search } = useLocation();

  const eventId = useParams().id;
  const [quotations, setQuotations] = useState<IQuotation[]>([]);
  const [previsto, setPrevisto] = useState<number>(0);
  const [atual, setAtual] = useState<number>(0);
  const [diferenca, setDiferenca] = useState<number>(0);

  const fetchQuotation = useCallback(async () => {
    const response = await getQuotationByEventId(eventId!).then((res) => {
      return res.data.reverse();
    });

    response.forEach((quotation: IQuotation) => {
      setPrevisto((prev) => prev + quotation.expected_expense);
      setAtual((prev) => prev + quotation.actual_expense);
      setDiferenca(previsto - atual);
    });

    setQuotations(response);
  }, [setQuotations, eventId]);

  const handleDeleteQuotation = useCallback(async (id:number) => {
    const response = await delQuotationByEventId(id!).then((res) => res);
      if (response.status === 204) {
        const newQuotations = quotations.filter(quotation => quotation.id !== id) 
        setQuotations(newQuotations)
      }
  }, [quotations, setQuotations]);

  useEffect(() => {
    fetchQuotation();
  }, [fetchQuotation]);


  const breadCrumbsItem: BreadcrumbItem[] = [
    { name: "Dashboard", link: "/dashboard" },
    { name: useQuery(search).get("event") ?? "", link: `/evento/${eventId}` },
    { name: "Orçamento" },
  ];

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="d-flex flex-column">
          <div>
            <BreadCrumbs items={breadCrumbsItem} />
          </div>
          <div className="m-5 d-flex justify-content-center flex-row w-100">
            <div>
              <Card id="card-budget" className="rounded text-center m-4">
                <Card.Body className="mt-2">
                  <Card.Title className="text-black">
                    Previsto: R$ {previsto}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card id="card-budget2" className="rounded text-center m-4">
                <Card.Body className="mt-2">
                  <Card.Title className="text-black">
                    Atual: R$ {atual}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card id="card-budget3" className="rounded text-center m-4">
                <Card.Body className="mt-2">
                  <Card.Title className="text-black">
                    Restante: R$ {diferenca}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between m-4">
            <span className="">
              <MdPaid className="mb-1" /> Orçamento
            </span>

            <CreateBudget setQuotations={setQuotations} />
          </div>
          <div className="d-flex w-100 m-4">
            <Table hover>
              <thead className="thead-bg">
                <tr>
                  <th>DESCRIÇÃO</th>
                  <th>FORNECEDOR</th>
                  <th>CONTATO</th>
                  <th>PREVISTO</th>
                  <th>CONTRATO</th>
                  <th>PAGO</th>
                  <th>DIFERENÇA</th>
                  <th>STATUS </th>
                </tr>
              </thead>
              <td colspan="8">
                <InputGroup className="mt-2 px-1 mb-1">
                  <Form.Control
                    placeholder="Buscar..."
                    aria-label="Buscar"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </td>
              <tbody className="tbody-bg">
                {quotations.map((quotation) => (
                  <tr key={quotation.id}>
                    <td className="text-primary">{quotation.description}</td>
                    <td>{quotation.provider}</td>
                    <td>{quotation.contact}</td>
                    <td>R$ {quotation.expected_expense}</td>
                    <td>R$ {quotation.actual_expense}</td>
                    <td>R$ {quotation.amount_already_paid}</td>
                    <td>
                      R${" "}
                      {quotation.expected_expense -
                        quotation.amount_already_paid}
                    </td>
                    <td>
                      {" "}
                      <Form.Check
                        className="ms-2"
                        type="switch"
                        id="custom-switch"
                        label="Pago/Em Aberto"
                      />
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="sucess"
                          id="dropdown-basic"
                          className="dropdown-img"
                        >
                          <BsThreeDotsVertical />
                        </Dropdown.Toggle
                        
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Editar</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeleteQuotation(quotation.id)}>Deletar</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <Pagination
            className="d-flex w-100 align-items-center justify-content-center"
            count={10}
            color="primary"
          />
        </div>
      </div>
    </>
  );
}
