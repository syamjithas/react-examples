import { useRef, forwardRef, useImperativeHandle, useState } from "react";

let FancyInput = (props, ref) => {
  const [val, setVal] = useState(0);
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    alertVal: () => {
      document.title = val;
      inputRef.current.blur();
      alert(val);
      setVal(0);
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
