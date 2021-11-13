import { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => ++prevCount);
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount((prevCount) => --prevCount);
        }}
      >
        -
      </button>
    </div>
  );
};
export default UseStateExample;
