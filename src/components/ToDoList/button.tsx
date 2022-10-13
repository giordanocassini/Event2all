import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { ButtonToDo } from "./styleButton";
("./styleButton.ts");

export function Button() {
  const { handleAddTasks } = useContext(TasksContext);
  return (
    <ButtonToDo
      className="botaoToDoList"
      onClick={() => {
        handleAddTasks();
      }}
    >
      + Adicionar
    </ButtonToDo>
  );
}
