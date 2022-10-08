import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import SideBar from "../../components/SideBar/SideBar";
import { Card, Button, Table, InputGroup, Form } from "react-bootstrap";
import { MdPeopleAlt } from "react-icons/md";
import "./guests.scss";

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
              <span className="spanConvidados"><MdPeopleAlt className="me-2"/>Convidados</span>
              <Button> + Adicionar convidado</Button>
            </div>
            <div className="d-flex w-100 m-4">
            <Table id="width-table" hover>
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
                  <td>email@email.com</td>
                  <td>R$ 5.000,00</td>
                </tr>
                <tr>
                  <td className="text-primary">Título do Item</td>
                  <td>Nome</td>
                  <td>email@email.com</td>
                  <td>R$ 5.000,00</td>
                </tr>
              </tbody>
            </Table>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
