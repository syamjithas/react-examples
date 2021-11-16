import React, { useState, useCallback, useMemo } from "react";
import List from "./useCallback/List";

const useCallbackExample = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementer) => {
      return [number, number + 1 + incrementer, number + 2 + incrementer];
    },
    [number]
  );

  // const getItems = (incrementer) => {
  //   return [number, number + 1 + incrementer, number + 2 + incrementer];
  // };

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#FFF",
      color: dark ? "#FFF" : "#333",
    };
  }, [dark]);

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default useCallbackExample;
