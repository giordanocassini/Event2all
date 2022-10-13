import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import SideBar from "../../components/SideBar/SideBar";
import { Card, Table, InputGroup, Form, Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { useEffect, useState, useCallback } from "react";
import { getEvent, getGuest } from "../../services/auth";
import "./guests.scss";
import ModalGuests from "./modal";

export default function Guests() {
  const breadCrumbsItem = [
    { name: "Home", link: "/" },
    { name: "Nome do Evento", link: "/evento" },
    { name: "Convidados", link: "/convidados" },
  ];

  const [event, setEvent] = useState<any>();
  const [guests, setGuests] = useState<any>();
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

  // const fetchGuest = useCallback(async () => {
  //   const response = await getGuest(eventId).then((res) => {
  //     return res.data;
  //   });
  //   setGuests(response);
  // }, [setGuests, eventId]);

  // useEffect(() => {
  //   fetchGuest();
  // }, [fetchGuest]);

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

  console.log(`${guests}`);

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="d-flex flex-column slash">
          <div>
            <BreadCrumbs items={breadCrumbsItem} />
          </div>
          <div className="d-flex align items center justify-content-center">
            <Card id="card-budget" className=" text-center m-4">
              <Card.Body className="mt-2">
                <Card.Title className="text-black">
                  Total de convidados:&nbsp;
                   {guests?.length}/{event?.invite_number}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="d-flex align-items-center justify-content-between m-4">
              
            <span className="spanConvidados">
              <MdPeopleAlt className="me-2" />
              Convidados
            </span>
            <ModalGuests />
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
                {guests?.length > 0
                  ? guests?.map((guest: any) => <tr>
                  <td className="text-primary">{guest?.name}</td>
                  <td>{guest?.contact}</td>
                  <td>
                    <Form.Check type="switch" id="custom-switch" />
                    {guest?.invite}
                  </td>
                  <td className="d-flex justify-content-between align-items-center ">{guest?.isConfirmed ? "Sim" : "Não"}
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
                    <Dropdown.Item href="#/action-1">Editar</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Deletar</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></span></td>
                  </tr>)
                  : ("Você ainda não adicionou nenhum convidado")}
                
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
