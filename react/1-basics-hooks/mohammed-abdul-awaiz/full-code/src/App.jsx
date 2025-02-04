import { useEffect, useRef } from "react";
import "./App.css";
import { Counter, TaskForm, TaskList, Timer } from "./components";
import { useTaskContext } from "./contexts/TaskContext";

function App() {
  const { state } = useTaskContext();
  const stateRef = useRef(state);
  const timerRef = useRef();
  const handleClearTimer = () => {
    console.log("app handlecleartimer ran");

    if (timerRef.current) timerRef.current.clearTimer();
  };

  useEffect(() => {
    console.log("app 1st useeffect ran");
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    console.log("app 2nd useeffect ran");

    const handleBeforeClose = () => {
      localStorage.setItem("whirlwind", JSON.stringify(stateRef.current));
    };

    window.addEventListener("beforeunload", handleBeforeClose);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeClose);
    };
  }, []);

  return (
    <main>
      {console.log("app jsx ran")}
      <Timer ref={timerRef} />
      <button onClick={handleClearTimer}>Reset Timer</button>
      <TaskForm />
      <Counter />
      <TaskList />
    </main>
  );
}

export default App;
