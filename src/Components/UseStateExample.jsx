import { useState } from "react";

const UseStateExample = ({initVal}) => {
  const [count, setCount] = useState(initVal);
  return (
    <div>
      <button onClick={()=>{ setCount((prevCount) => ++prevCount) }}>+</button>
      <span>{count}</span>
      <button onClick={()=>{ setCount((prevCount) => --prevCount) }}>-</button>
    </div>
  );
};
export default UseStateExample;
