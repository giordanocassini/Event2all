import SideBar from "../SideBar/SideBar";
import { Card } from "react-bootstrap";

export default function BudgetPage() {
  return (
    <>
      <div className="vh-100 d-flex">
        <SideBar />
        <Card id="card" className="rounded text-center cards m-4">
          <Card.Body className="cardContent">
            <Card.Img
              src={`../../../public/images/mood.png`}
              alt=""
              className="cardImage mt-4 mb-3"
            />
            <h4 className="text-center">asd</h4>
            <span>descrição</span>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
