import SideBar from "../../components/SideBar/SideBar";
import { Card, Table, InputGroup, Form, Button } from "react-bootstrap";
import { MdPaid } from "react-icons/md";
import CreateBudget from "./modal";
import { Pagination } from "@mui/material";
import BreadCrumbs from "../../components/BreadCrumbs";
import "./BudgetPage.scss";
import { useCallback, useEffect, useState } from "react";
import {
  delQuotationByEventId,
  getQuotationByEventId,
} from "../../services/auth";
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

    setQuotations(response);
  }, [setQuotations, eventId]);

  const handleDeleteQuotation = useCallback(
    async (id: number) => {
      const response = await delQuotationByEventId(id!).then((res) => res);
      if (response.status === 204) {
        const newQuotations = quotations.filter(
          (quotation) => quotation.id !== id
        );
        setQuotations(newQuotations);
      }
    },
    [quotations, setQuotations]
  );

  useEffect(() => {
    fetchQuotation();
  }, [fetchQuotation]);

  useEffect(() => {
    let valorPrevisto: number = 0;
    let valorContratado: number = 0;
    let valorDiferenca: number = 0;
    quotations.forEach((quotation) => {
      valorPrevisto += quotation.expected_expense;
      valorContratado += quotation.actual_expense;
    });
    valorDiferenca = valorPrevisto - valorContratado;

    setPrevisto(valorPrevisto);
    setAtual(valorContratado);
    setDiferenca(valorDiferenca);
  }, [quotations]);

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
                    Contratado: R$ {atual}
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
                      {quotation.actual_expense ===
                      quotation.amount_already_paid ? (
                        <Button className="btn btn-success">Pago</Button>
                      ) : (
                        <Button className="btn btn-danger">Em aberto</Button>
                      )}
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="sucess"
                          id="dropdown-basic"
                          className="dropdown-img"
                        >
                          <BsThreeDotsVertical />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Editar
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleDeleteQuotation(quotation.id)}
                          >
                            Deletar
                          </Dropdown.Item>
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
