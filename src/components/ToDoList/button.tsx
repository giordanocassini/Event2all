import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import "./button.scss";

export function Button() {
  const { handleAddTasks } = useContext(TasksContext);
  return (
    <button
      className="botaoToDoList"
      onClick={() => {
        handleAddTasks();
      }}
    >
      Salvar
    </button>
  );
}
