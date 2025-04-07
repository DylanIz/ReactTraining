import { useState, useRef, useEffect } from "react";
import "../styles.css";

const CounterMouseDown = () => {
  const [count, setCount] = useState(0);
  const [useMouseDown, setUseMouseDown] = useState(true);
  const [performanceData, setPerformanceData] = useState({ mouseDown: [], click: [] });
  
  const startTimeRef = useRef(null);
  
  const handleIncrement = () => {
    const endTime = performance.now();
    const responseTime = endTime - startTimeRef.current;
    
    setCount(count + 1);
    
    if (useMouseDown) {
      setPerformanceData(prev => ({
        ...prev,
        mouseDown: [...prev.mouseDown, responseTime]
      }));
    } else {
      setPerformanceData(prev => ({
        ...prev,
        click: [...prev.click, responseTime]
      }));
    }
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  const handleMouseDownStart = () => {
    startTimeRef.current = performance.now();
  };
  
  const handleClickStart = () => {
    startTimeRef.current = performance.now();
  };
  
  const toggleEventHandler = () => {
    setUseMouseDown(!useMouseDown);
  };
  
  const calculateAverage = (times) => {
    if (times.length === 0) return "N/A";
    const sum = times.reduce((acc, time) => acc + time, 0);
    return (sum / times.length).toFixed(2);
  };
  
  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
        <p>Using: {useMouseDown ? "onMouseDown" : "onClick"}</p>
      </div>
      <div className="btns-container">
        {useMouseDown ? (
          <button 
            onMouseDown={handleMouseDownStart}
            onMouseUp={handleIncrement} 
            className="btn"
          >
            +
          </button>
        ) : (
          <button 
            onClick={() => {
              handleClickStart();
              handleIncrement();
            }} 
            className="btn"
          >
            +
          </button>
        )}
        <button onClick={handleDecrement} className="btn">
          -
        </button>
      </div>
      <div>
        <button onClick={toggleEventHandler} className="btn" style={{ marginTop: '10px' }}>
          Toggle Event Handler
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Performance Results:</h3>
        <p>onMouseDown avg response time: {calculateAverage(performanceData.mouseDown)} ms</p>
        <p>onClick avg response time: {calculateAverage(performanceData.click)} ms</p>
        <p>onMouseDown samples: {performanceData.mouseDown.length}</p>
        <p>onClick samples: {performanceData.click.length}</p>
      </div>
    </div>
  );
};

export default CounterMouseDown;