import SideBar from "../../components/SideBar/SideBar";
import BreadCrumbs from "../../components/BreadCrumbs";
import TaskList from "../../components/ToDoList/TaskList";
import { TasksProvider } from "../../contexts/TasksContext";
import { NewTask } from "../../components/ToDoList/NewTask";
import { AiFillCheckCircle } from "react-icons/ai";
export default function ToDoList() {
  const breadCrumbsItem = [
    { name: "Nome do Evento", link: "/evento" },
    { name: "Convidados", link: "/convidados" },
  ];

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="w-100 vh-100 ">
          <BreadCrumbs className="" items={breadCrumbsItem} />
          <div className="">
            <div className="d-flex align-items-center justify-content-center">
              <AiFillCheckCircle className="me-2" />
              Lista de Tarefas
            </div>
            <TasksProvider>
              <NewTask />
              <TaskList />
            </TasksProvider>
          </div>
        </div>
      </div>
    </>
  );
}
