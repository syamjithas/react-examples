import { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default UseMemoExample;
