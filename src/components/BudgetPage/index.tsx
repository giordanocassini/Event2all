import SideBar from "../SideBar/SideBar";
import { Card, Button } from "react-bootstrap";
import "./BudgetPage.scss"

export default function BudgetPage() {
  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="vh-100 d-flex justify-content-center flex-row w-100">
          <div>
            <Card id="card-budget" className="rounded text-center m-4">
              <Card.Body className="mt-2">
                <Card.Title className="text-black">Previsto: asdasdasd</Card.Title>
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
      </div>
    </>
  );
}
