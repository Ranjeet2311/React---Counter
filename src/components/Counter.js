import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const clickIncrement = () => {
    setCount(count + 1);
  };

  const clickDecrement = () => {
    setCount(count - 1);
  };
  const clickReset = () => {
    setCount(count * 0);
    alert("Counter Will Rest");
  };

  return (
    <div className="Container">
      <h1>! Your Counter !</h1>

      <div className="item-container">
        <div className="number"> {count} </div>

        <div className="btn-container">
          <button onClick={clickIncrement} className="increment">
            Increase
          </button>
          <button onClick={clickDecrement} className="decrement">
            Decrease
          </button>
          <button onClick={clickReset} className="reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
