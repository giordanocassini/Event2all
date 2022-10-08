import SideBar from "../../components/SideBar/SideBar";
import { Card, Table, InputGroup, Form } from "react-bootstrap";
import { MdPaid } from "react-icons/md";
import CreateBudget from "./modal";
import "./BudgetPage.scss";

export default function BudgetPage() {
  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="d-flex flex-column">
          <div className="m-5 d-flex justify-content-center flex-row w-100">
            <div>
              <Card id="card-budget" className="rounded text-center m-4">
                <Card.Body className="mt-2">
                  <Card.Title className="text-black">Previsto:</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card id="card-budget2" className="rounded text-center m-4">
                <Card.Body className="mt-2">
                  <Card.Title className="text-black">Atual:</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card id="card-budget3" className="rounded text-center m-4">
                <Card.Body className="mt-2">
                  <Card.Title className="text-black">Restante:</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between m-4">
            <span className="">
              <MdPaid className="mb-1" /> Orçamento
            </span>

            <CreateBudget />
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
                  <th>STATUS</th>
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
                  <td>R$ 5.000,00</td>
                  <td>R$ 5.000,00</td>
                  <td>R$ 5.000,00</td>
                  <td>Pago/Em Aberto</td>
                </tr>
                <tr>
                  <td className="text-primary">Título do Item</td>
                  <td>Nome</td>
                  <td>email@email.com</td>
                  <td>R$ 5.000,00</td>
                  <td>R$ 5.000,00</td>
                  <td>R$ 5.000,00</td>
                  <td>R$ 5.000,00</td>
                  <td>Pago/Em Aberto</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
