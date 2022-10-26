import { useEffect, useState, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FcCheckmark } from "react-icons/fc";
import { MdPeopleAlt } from "react-icons/md";
import { Table, Dropdown } from "react-bootstrap";
import BreadCrumbs from "../../components/BreadCrumbs";
import SideBar from "../../components/SideBar/SideBar";
import { getEvent, getGuest, delGuest, editGuest } from "../../services/auth";
import { LoadingStatus, PayStatus, FailStatus } from "../BudgetPage/style";
import ModalGuests from "./modal";
import { BreadcrumbItem } from "../../utils/types";
import "./guests.scss";

export interface IGuests {
  id: number;
  contact: string;
  isConfirmed: string;
  invite: boolean;
  createDateColumn: Date;
  updateDateColumn: Date;
}
function useQuery(search: string) {
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Guests() {
  const { search } = useLocation();
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
          const guests = response.data.reverse();
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
        const newGuests = guests.filter((guest) => guest.id !== id);
        setGuests(newGuests);
      }
    },
    [guests, setGuests]
  );

  const breadCrumbsItem: BreadcrumbItem[] = [
    { name: "Dashboard", link: "/dashboard" },
    { name: useQuery(search).get("event") ?? "", link: `/evento/${eventId}` },
    { name: "Convidados"},
  ];

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="d-flex flex-column slash w-100 guestDashboard">
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
              <ModalGuests setGuests = {setGuests} />
            </div>
          </div>
          <div className="m-4 overy">
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
                        <td className="d-flex justify-content-between align-items-center">
                          {guest?.isConfirmed === "sim" ? (
                            <PayStatus>
                              Sim
                            </PayStatus>
                          ) : guest?.isConfirmed === "nao" ? (
                            <FailStatus>
                              Não
                            </FailStatus>
                          ) : (
                            <LoadingStatus>
                              Talvez
                            </LoadingStatus>
                          )}
                          <span>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant=""
                                id="dropdown-basic"
                                className="dropdown-img"
                              >
                                <BsThreeDotsVertical color="black" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item
                                  onClick={() => handleDeleteGuest(guest.id)}
                                >
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
function search(search: any) {
  throw new Error("Function not implemented.");
}

