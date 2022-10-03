import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import "./sideBar.scss";

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
              <img src="./images/mood.png" className="" alt="logo" />
              <span className="ms-3" style={{ color: "white" }}>
                {user.name}
              </span>
            </div>
            <InputGroup className="mt-4 me-auto">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
            <span className="mt-5 me-auto" style={{ color: "white" }}>
              🗒️ Meus Eventos
            </span>
            <hr />

            <div id="test-asd" className="d-flex flex-column p-4">
              <h5>Você não tem nenhum evento adicionado.</h5>
              <p className="text-white">Para adicionar, clique no botão abaixo ou no '+'</p>
              <hr />
              <Button variant="success">+ Criar novo evento</Button>
            </div>
        </div>
      </div>
    );
  
}
