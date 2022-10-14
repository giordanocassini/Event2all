import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import SideBar from "../../components/SideBar/SideBar";
import { Card, Table, InputGroup, Form, Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { useEffect, useState, useCallback } from "react";
import { getEvent, getGuest, delGuest, editGuest } from "../../services/auth";
import { LoadingStatus, PayStatus, FailStatus } from "../BudgetPage/style";
import { FcCheckmark } from "react-icons/fc";
import { CgClose } from "react-icons/cg";
import "./guests.scss";
import ModalGuests from "./modal";

export interface IGuests {
  id: number;
  contact: string;
  isConfirmed: string;
  invite: boolean;
  createDateColumn: Date;
  updateDateColumn: Date;
}

export default function Guests() {
  const breadCrumbsItem = [
    { name: "Home", link: "/" },
    { name: "Nome do Evento", link: "/evento" },
    { name: "Convidados", link: "/convidados" },
  ];

  const [event, setEvent] = useState<any>();
  const [guests, setGuests] = useState<IGuests[]>([]);
  const [guest, setGuest] = useState<IGuests>();
  const eventId = useParams().id;

  useEffect(() => {
    if (eventId) {
      getEvent(eventId)
        .then((response) => {
          const event = response.data;
          setEvent(event);
        })
        .catch(() => {
          alert("Não foi possível carregar o evento");
        });
    }
  }, [setEvent, eventId]);

  useEffect(() => {
    if (eventId) {
      getGuest(eventId)
        .then((response) => {
          const guests = response.data;
          setGuests(guests);
        })
        .catch(() => {
          console.log("Não foi possível carregar o evento");
        });
    }
  }, [setGuests, eventId]);

  const handleDeleteGuest = useCallback(
    async (id: number) => {
      const response = await delGuest(id!).then((res) => res);
      if (response.status === 204) {
        const newGuests = guests.filter(
          (guest) => guest.id !== id
        );
        setGuests(newGuests);
      }
    },
    [guests, setGuests]
  );

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="d-flex flex-column slash w-100">
          <div>
            <BreadCrumbs items={breadCrumbsItem} />
          </div>
          <div className="d-flex align-items-center justify-content-between m-4">
            <span className="spanConvidados">
              <MdPeopleAlt className="me-2" />
              Convidados
            </span>
            <div className="d-flex align-items-center justify-content-between">
              <div className="me-3">
                Total de convidados:&nbsp;
                {guests?.length}/{event?.invite_number}
              </div>
              <ModalGuests />
            </div>
          </div>
          <div className="m-4">
            <Table responsive id="width-table" className="text-left" hover>
              <thead className="thead-bg">
                <tr>
                  <th>NOME</th>
                  <th>CONTATO</th>
                  <th>CONVITE ENVIADO?</th>
                  <th>CONFIRMADO?</th>
                </tr>
              </thead>
              <tbody className="tbody-bg">
                {guests?.length > 0
                  ? guests?.map((guest: any) => (
                      <tr>
                        <td className="text-primary">{guest?.name}</td>
                        <td>{guest?.contact}</td>
                        <td>
                          {guest?.invite ? (
                            <FcCheckmark />
                          ) : (
                            <CgClose color="red" />
                          )}
                        </td>
                        <td className="d-flex justify-content-between align-items-center ">
                          {guest?.isConfirmed === "sim" ? (
                            <PayStatus>Sim</PayStatus>
                          ) : guest?.isConfirmed === "nao" ? (
                            <FailStatus>Não</FailStatus>
                          ) : (
                            <LoadingStatus>Talvez</LoadingStatus>
                          )}
                          <span className="">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant=""
                                id="dropdown-basic"
                                className="dropdown-img"
                              >
                                <BsThreeDotsVertical color="black" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                  {/* <Dropdown.Item href="#/action-1">
                                    Editar
                                  </Dropdown.Item> */}
                                <Dropdown.Item onClick={() => handleDeleteGuest(guest.id)}>
                                  Deletar
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </span>
                        </td>
                      </tr>
                    ))
                  : "Você ainda não adicionou nenhum convidado"}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
