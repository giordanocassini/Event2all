import SideBar from "../../components/SideBar/SideBar";
import BreadCrumbs from "../../components/BreadCrumbs";
import TaskList from "../../components/ToDoList/TaskList";
import { TasksProvider } from "../../contexts/TasksContext";
import { NewTask } from "../../components/ToDoList/NewTask";
import { AiFillCheckCircle } from "react-icons/ai";
import { Form, InputGroup } from "react-bootstrap";
import "./toDo.scss";

export default function ToDoList() {
  const breadCrumbsItem = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Nome do Evento", link: "/evento" },
    { name: "Tarefas" },
  ];

  return (
    // <div className="h-100 d-flex">
    //   <SideBar />
    //   <div className="w-100 vh-100 d-flex flex-column">
    //
    //     <div className="headerTarefas w-100">
    //       <div className="listaTarefas">
    //         <AiFillCheckCircle className="me-2" />
    //         Lista de Tarefas
    //       </div>
    //       <div className="novasTarefas">
    //         <NewTask />
    //       </div>
    //     </div>
    //     <div>
    //       <input></input>
    //     </div>
    //     <div>tasks</div>
    //   </div>
    // </div>

    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="d-flex flex-column w-100">
          <div>
            <BreadCrumbs items={breadCrumbsItem} />
          </div>

          <div className=" d-flex w-100 ">
            <div className="d-flex ">
              <AiFillCheckCircle className="me-2"></AiFillCheckCircle>
              <p>Lista de Tarefas</p>
              <div>
                <TasksProvider className="d-flex ">
                  <NewTask />
                  <InputGroup className="mt-2 px-1 mb-1">
                    <Form.Control
                      placeholder="Buscar..."
                      aria-label="Buscar"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>
                  <TaskList />
                </TasksProvider>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
