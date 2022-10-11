import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import SideBar from "../../components/SideBar/SideBar";
import { Card, Table, InputGroup, Form, FormGroup } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";
import { MdPeopleAlt } from "react-icons/md";
import { Pagination } from "@mui/material";
import "./guests.scss";
import ModalGuests from "./modal";

export default function Guests() {
  const breadCrumbsItem = [
    { name: "Home", link: "/" },
    { name: "Nome do Evento", link: "/evento" },
    { name: "Convidados", link: "/convidados" },
  ];

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="d-flex flex-column">
          <div>
            <BreadCrumbs items={breadCrumbsItem} />
          </div>
          <div className="d-flex align items center justify-content-center">
            <Card id="card-budget" className=" text-center m-4">
              <Card.Body className="mt-2">
                <Card.Title className="text-black">
                  Total de convidados:
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
          <div className="w-100 m-4">
            <Table id="width-table" className="text-left" hover>
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
                <tr>
                  <td className="text-primary">Título do Item</td>
                  <td>Nome</td>
                  <td>
                    <Form.Check type="switch" id="custom-switch" />
                  </td>
                  <td>R$ 5.000,00</td>
                </tr>
              </tbody>
            </Table>
            <Pagination
              className="d-flex justify-content-center"
              count={10}
              color="primary"
              shape="rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}
