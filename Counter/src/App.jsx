// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(2);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count-display">{count}</div>
      <button onClick={() => setCount(count - incrementValue)}>-</button>
      <button onClick={() => setCount(count + incrementValue)}>+</button>
      <div>
        Increment/Decrement by{' '}
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(Number(e.target.value))}
        />
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
