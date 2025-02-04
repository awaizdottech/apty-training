import { useCallback, useRef } from "react";
import { nanoid } from "nanoid";
import { useTaskContext } from "../contexts/TaskContext";
import { actions } from "../conf/conf";

export const TaskForm=(()=> {
  const textRef = useRef();
  const { dispatch } = useTaskContext();

  const handleSubmit = useCallback((e) => {
    console.log('taskform handleSubmit  ran');
    e.preventDefault();
    dispatch({
      type: actions.addTask,
      payload: {
        text: textRef.current.value,
        id: nanoid(),
        completed: false,
      },
    });
    textRef.current.value = "";
  },[])

  return (
    <form onSubmit={handleSubmit}>
      {console.log('taskform jsx ran')}
      <input type="text" ref={textRef} required />
      <button type="submit">Add Task</button>
    </form>
  );
})