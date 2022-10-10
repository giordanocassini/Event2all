import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { Button } from "./button";
import "./newTask.scss";

export function NewTask() {
  const { task, handleAddNewTask } = useContext(TasksContext);
  return (
    <section id="new-task">
      <div>
        <input
          type="text"
          onChange={(e) => handleAddNewTask(e)}
          value={task}
          className="inputTask"
        />
        <Button />
      </div>
    </section>
  );
}
