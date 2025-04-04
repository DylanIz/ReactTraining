import { useEffect, useRef, useState } from "react";
const Timer = () => {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((prev) => {
        console.log("Timer interval running, current count:", prev);
        if (prev >= 100) {
          if (timer.current) {
            console.log("Timer reached 100, clearing interval");
            clearInterval(timer.current);
          }
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    console.log("Timer effect initialized");

    return () => {
      if (timer.current) {
        console.log("Cleaning up timer interval");
        clearInterval(timer.current);
      }
    };
  }, []);

  return <div>Timer: {count}</div>;
};

export default Timer;
