import React from "react";
import useLocalStorage from "./useCustom/useLocalStorage";

const UseCustomHookExample = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default UseCustomHookExample;
