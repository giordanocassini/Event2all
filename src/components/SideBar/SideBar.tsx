import { InputGroup, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import EventLogo from "../../../public/images/dashboard.png";
import "./sideBar.scss";
import { unmountComponentAtNode } from "react-dom";
import EventList from "./eventList";
// import CreateEvent from "./modal";

export default function SideBar() {
  const user = useSelector((store: RootStore) => store.userReduce);

  return (
    <div className="d-flex">
      <div className="d-flex flex-column align-items-center stylesidebar">
        <div className="">
          <img src="./images/logotipo2.png" alt="logo" className="mt-5 mb-4" />
        </div>
        <div className="me-auto">
          <br />
          <br />
          <Avatar name={user.name} round={true} size="64" textSizeRatio={3.9} />
          {/* <img src="./images/mood.png" className="" alt="logo" /> */}
          <span className="ms-3 text-bold" style={{ color: "white" }}>
            {user.name}
          </span>
        </div>
        <InputGroup className="mt-4 me-auto">
          <Form.Control
            placeholder="Buscar..."
            aria-label="Buscar"
            aria-describedby="basic-addon2"
          />
          <Button className="bg-primary">
          <img src="../../../public/images/lupa.png"></img>
          </Button>
        </InputGroup>
        <span className="mt-5 me-auto events-font" style={{ color: "white" }}>
          <Link className="linkEvent" to={"/evento"}>
            <img className="mb-2 px-2" src={EventLogo} alt="Logo" />
            Meus Eventos
          </Link>
        </span>
        <hr className="mb-4" />
        <EventList />
      </div>
    </div>
  );
}
