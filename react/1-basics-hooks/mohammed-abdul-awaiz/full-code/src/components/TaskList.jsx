import { useState, useCallback } from "react";
import { actions } from "../conf/conf";
import { useTaskContext } from "../contexts/TaskContext";

export const TaskList = () => {
  const { state, dispatch } = useTaskContext();
  const [loading, setLoading] = useState(false);

  const toggleTask = useCallback((id) => {
    setLoading(true);
    dispatch({ type: actions.toggleTask, payload: { id } });
    setLoading(false);
  }, []);

  const removeTask = useCallback((id) => {
    setLoading(true);
    dispatch({ type: actions.removeTask, payload: { id } });
    setLoading(false);
  }, []);

  return (
    <ul>
      {console.log("tasklist jsx ran")}
      {state.taskGroups.allTasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => toggleTask(task.id)} disabled={loading}>
            {task.completed ? "completed" : "pending"}
          </button>
          <button onClick={() => removeTask(task.id)} disabled={loading}>
            remove
          </button>
        </li>
      ))}
    </ul>
  );
};
