import { useContext, useReducer, createContext, act } from "react";
import { reducer } from "../store/task-reducers";

const TaskContext = createContext();
const initialState = () => {
  console.log('TaskContext initialstate ran');
  
  const storage = JSON.parse(localStorage.getItem("whirlwind"));
  if (storage) return storage;
  else
    return {
      taskGroups: {
        allTasks: [],
      },
    };
};

export const useTaskContext = () => {
  console.log('TaskContext useTaskContext ran');
  
  return useContext(TaskContext);
};

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
