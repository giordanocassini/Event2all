import SideBar from "../../components/SideBar/SideBar";
import { Card, Table, InputGroup, Form } from "react-bootstrap";
import { MdPaid } from "react-icons/md";
import "./BudgetPage.scss";
import CreateBudget from "./modal";

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
              <MdPaid /> Orçamento
            </span>

            <CreateBudget />
          </div>
          <div className="vh-100 d-flex justify-content-center flex-row w-100 m-4">
            <Table className="m-4 ">
              <thead>
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
              <InputGroup className="mt-4 me-auto m-3">
                <Form.Control
                  placeholder="Buscar..."
                  aria-label="Buscar"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              </td>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
