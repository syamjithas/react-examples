import { useRef, useLayoutEffect, useState, useDebugValue } from "react";
const UseLayoutEffectExample = () => {
  const [text, setText] = useState("");
  const textArea = useRef();

  useLayoutEffect(() => {
    console.log(textArea.current.getClientRects()[0].height);
  }, [text]);
  useDebugValue("hAhhaaaa "+text);
  return (
    <div>
      <textarea
        ref={textArea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default UseLayoutEffectExample;
