import SideBar from "../../components/SideBar/SideBar";
import BreadCrumbs from "../../components/BreadCrumbs";
import { useParams, useLocation } from "react-router-dom";
import TaskList from "../../components/ToDoList/TaskList";
import { TasksProvider } from "../../contexts/TasksContext";
import { NewTask } from "../../components/ToDoList/NewTask";
import { AiFillCheckCircle } from "react-icons/ai";
import { BreadcrumbItem } from "../../utils/types";
import React from "react";
import "./toDo.scss";

function useQuery(search: string) {
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ToDoList() {
  const { search } = useLocation();
  const eventId = useParams().id;

  const breadCrumbsItem: BreadcrumbItem[] = [
    { name: "Dashboard", link: "/dashboard" },
    { name: useQuery(search).get("event") ?? "", link: `/evento/${eventId}` },
    { name: "Tarefas" },
  ];

  return (
    <TasksProvider>
    <div className="h-100 d-flex">
      <SideBar />
      <div className="w-100 vh-100 d-flex flex-column taskDashboard">
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
