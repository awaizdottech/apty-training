import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

export const Timer = React.memo(
  forwardRef((props, ref) => {
    const [timer, setTimer] = useState(0);
    useImperativeHandle(
      ref,
      () => ({
        clearTimer: () => setTimer(0),
      }),
      []
    );

    useEffect(() => {
      console.log("timer useeffect ran");
      const runningTimer = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(runningTimer);
    }, []);

    return <>Timer: {timer}s</>;
  })
);
