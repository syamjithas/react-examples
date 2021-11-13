import { useState, useRef, useEffect } from "react";

const UseRefExample = () => {
  const [name, setName] = useState("");
  const rednerCount = useRef(0);
  const inputRef = useRef();

  const inputFoucs = () => inputRef.current.focus();
  useEffect(() => {
    ++rednerCount.current;
    return () => {
      console.log("cleanup-😊");
    };
  }, [name]);

  return (
    <div>
      <h4>Componet renderd for : {rednerCount.current} times</h4>
      <input
        type="text"
        value={name}
        ref={inputRef}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          inputFoucs();
        }}
      >Focus</button>
    </div>
  );
};

export default UseRefExample;
