import { Card, Table, InputGroup, Form, Button } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { MdPaid } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import BreadCrumbs from "../../components/BreadCrumbs";
import Dropdown from "react-bootstrap/Dropdown";
import ModalBudget from "./modal";
import SideBar from "../../components/SideBar/SideBar";
import "./BudgetPage.scss";
import {
  delQuotationByEventId,
  getEvent,
  getQuotationById,
  getQuotationsByEventId,
} from "../../services/auth";
import React from "react";
import { BreadcrumbItem } from "../../utils/types";
import { LoadingStatus, PayStatus } from "./style";

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
  const [show, setShow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [quotations, setQuotations] = useState<IQuotation[]>([]);
  const [quotation, setQuotation] = useState<IQuotation>();
  const [previsto, setPrevisto] = useState<number>(0);
  const [atual, setAtual] = useState<number>(0);
  const eventId = useParams().id;

  const editQuotation = async (id: number) => {
    const response = await getQuotationById(id).then((res) => res.data);
    setQuotation(response);
    setEdit(true);
    setShow(true);
  };

  const fetchQuotation = useCallback(async () => {
    const responseEvent = await getEvent(eventId).then((res) => res.data);

    setPrevisto(responseEvent.event_budget);

    const response = await getQuotationsByEventId(eventId!).then((res) => {
      return res.data.reverse();
    });

    setQuotations(response);
  }, [setQuotations, eventId, edit]);

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
    let valorContratado: number = 0;
    quotations.forEach((quotation) => {
      valorContratado += quotation.actual_expense;
    });
    setAtual(valorContratado);
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
        <div className="d-flex flex-column w-100 guestDashboard">
          <div>
            <BreadCrumbs items={breadCrumbsItem} />
          </div>
          <div className="m-5 d-flex justify-content-center flex-row w-100">
            <div>
              <Card id="card-budget" className="rounded text-center m-4">
                <Card.Body className="mt-2">
                  <Card.Title className="text-black">
                    Orçamento Geral: R$ {previsto}
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
                    Saldo: R$ {previsto - atual}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between m-4">
            <span>
              <MdPaid className="mb-1" /> 
              Orçamento
            </span>

            <ModalBudget
              setQuotations={setQuotations}
              setShow={setShow}
              show={show}
              edit={edit}
              setEdit={setEdit}
              quotation={quotation!}
            />
          </div>
          <div className="m-4">
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
                    <td className="d-flex justify-content-between align-items-center ">
                      {quotation.actual_expense ===
                      quotation.amount_already_paid ? (
                        <PayStatus className="d-flex align-items-center justify-content-between">
                          <BsCheck2Circle />
                          Pago
                        </PayStatus>
                      ) : (
                        <LoadingStatus className="d-flex align-items-center justify-content-between">
                          <GiSandsOfTime />
                          Em aberto
                        </LoadingStatus>
                      )}
                      <span className="me-2">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="sucess"
                            id="dropdown-basic"
                            className="dropdown-img"
                          >
                            <BsThreeDotsVertical />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => editQuotation(quotation.id)}
                            >
                              Editar
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                handleDeleteQuotation(quotation.id)
                              }
                            >
                              Deletar
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
