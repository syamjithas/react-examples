import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [updatedCounter, setUpdatedCounter] = useState("");

  useEffect(() => {
    console.log("effect 1");
    setUpdatedCounter("count one updated");
  }, [countOne]);
  useEffect(() => {
    console.log("effect 2");
    setUpdatedCounter("count two updated");
  }, [countTwo]);


  return (
    <div>
      <h3>{updatedCounter}</h3>
      <div>
        <h4> Count 1</h4>
        <button
          onClick={() => {
            setCountOne((prevCount) => ++prevCount);
          }}
        >
          +
        </button>
        <span>{countOne}</span>
        <button
          onClick={() => {
            setCountOne((prevCount) => --prevCount);
          }}
        >
          -
        </button>
      </div>
      <div>
        <h4> Count 2</h4>
        <button
          onClick={() => {
            setCountTwo((prevCount) => ++prevCount);
          }}
        >
          +
        </button>
        <span>{countTwo}</span>
        <button
          onClick={() => {
            setCountTwo((prevCount) => --prevCount);
          }}
        >
          -
        </button>
      </div>
     
    </div>
  );
};

export default UseEffectExample;
