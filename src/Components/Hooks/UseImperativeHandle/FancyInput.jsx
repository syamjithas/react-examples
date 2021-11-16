import { useRef, forwardRef, useImperativeHandle, useState } from "react";

let FancyInput = (props, ref) => {
  const [val, setVal] = useState("");
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    blur: () => {
      document.title = val;
      inputRef.current.blur();
    },
  }));

  return (
    <input
      ref={inputRef}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      {...props}
    />
  );
};
export default FancyInput = forwardRef(FancyInput);
