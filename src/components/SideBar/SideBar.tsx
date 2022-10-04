import { InputGroup, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import Avatar from 'react-avatar';
import EventLogo from "../../../public/images/dashboard.png"
import "./sideBar.scss";
import { unmountComponentAtNode } from "react-dom";

export default function SideBar() {

  const user = useSelector((store: RootStore)=> store.userReduce)
  
    return (
      <div className="vh-100 d-flex">
        <div className="d-flex flex-column align-items-center stylesidebar">
            <div className="">
              <img
                src="./images/logotipo2.png"
                alt="logo"
                className="mt-5 mb-4"
              />
            </div>
            <div className="me-auto">
              <br />
              <br />
              <Avatar name={user.name} round={true} size="64" textSizeRatio={3.9}/>
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
                🔍
              </Button>
            </InputGroup>
            <span className="mt-5 me-auto events-font" style={{ color: "white" }}>
              <img className="mb-2" src={EventLogo} alt="Logo" /> &zwnj;  Meus Eventos
            </span>
            <hr className="mb-4"/>

            <div id="test-asd" className="d-flex flex-column p-4 mt-3">
              <h5>Você não tem nenhum evento adicionado.</h5>
              <p className="text-white">Para adicionar, clique no botão abaixo ou no '+'</p>
              <hr />
              <Button variant="success">+ Criar novo evento</Button>
            </div>

        </div>
      </div>
    );
  
}
