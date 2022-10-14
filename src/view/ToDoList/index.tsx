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
    <TasksProvider>
    <div className="h-100 d-flex">
      <SideBar />
      <div className="w-100 vh-100 d-flex flex-column">
        <div>
          <BreadCrumbs items={breadCrumbsItem} />
        </div>
        <div className="headerTarefas w-100">
          <div className="listaTarefas">
            <AiFillCheckCircle className="me-2" />
            Lista de Tarefas
          </div>
          <div className="novasTarefas">
              <NewTask />
          </div>
        </div>
          <TaskList />
      </div>
    </div>
    </TasksProvider>
  );
}
