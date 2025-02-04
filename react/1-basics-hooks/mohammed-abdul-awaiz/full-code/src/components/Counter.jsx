import { useTaskContext } from "../contexts/TaskContext";

export function Counter() {
  const { state } = useTaskContext();

  const count = () => {
    console.log('counter count ran')
    
    let count = 0;
    state.taskGroups.allTasks && state.taskGroups.allTasks.forEach((task) => {
      if (task.completed) count++;
    });
    
    return count;
  };

  return <>Completed Tasks: {count()}
  {console.log('counter jsx ran')
  }</>;
}
