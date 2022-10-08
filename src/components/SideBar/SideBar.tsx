import { InputGroup, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { Link, useNavigate } from "react-router-dom";
import EventLogo from "../../../public/images/dashboard.png";
import "./sideBar.scss";
import { unmountComponentAtNode } from "react-dom";
import EventList from "./eventList";
import { BsSearch } from "react-icons/bs";
import { removeUser } from "../../store/modules/users";

export default function SideBar() {
  const user = useSelector((store: RootStore) => store.userReduce);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const exit = () => {
    window.localStorage.clear();
    dispatch(removeUser());
    navigate("/");
  };
  console.log("sidebar", user);
  return (
    <div className="vh-100 d-flex">
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
            <BsSearch />
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
      <Button onClick={exit}> Sair </Button>
    </div>
  );
}
