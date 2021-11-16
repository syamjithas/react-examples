import { useRef, useLayoutEffect, useState, useEffect } from "react";
const UseLayoutEffectExample = () => {
  console.time("useLayoutEffect");
  console.time("useEffect");
  const [number, setNumber] = useState(0);
  const [widthOne, setWidthOne] = useState(0);
  const [widthTwo, setWidthTwo] = useState(0);
  const divRef = useRef();

  const aniomationStyle = {
    transitionProperty: "width",
    transitionDuration: "2s",
    width: `${number * 100}px`,
    height: "50px",
    backgroundColor: "#f7942f",
    border: "solid 1px #f7942f",
  };

  const aniomationStyleOne = {
    transitionProperty: "width",
    transitionDuration: "2s",
    width: `${widthOne}px`,
    height: "50px",
    border: "solid 1px black",
  };

  const aniomationStyleTwo = {
    transitionProperty: "width",
    transitionDuration: "2s",
    width: `${widthTwo}px`,
    height: "50px",
    backgroundColor: "#128308",
    border: "solid 1px #128308",
  };

  useLayoutEffect(() => {
    console.timeLog("useLayoutEffect");
    setWidthOne(divRef.current.getClientRects()[0].width);
    return () => console.timeEnd("useLayoutEffect");
  }, [number]);

  useEffect(() => {
    console.timeLog("useEffect");
    setWidthTwo(divRef.current.getClientRects()[0].width);
    return () => console.timeEnd("useEffect");
  }, [number]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>
      <br />
      <div style={aniomationStyle} ref={divRef}></div>
      <br />
      <div style={aniomationStyleOne}></div>
      <br />
      <div style={aniomationStyleTwo}></div>
    </div>
  );
};

export default UseLayoutEffectExample;
