import { useRef } from "react";
import FancyInput from "./UseImperativeHandle/FancyInput";
const UseImperativeHandleExample = () => {
  const ref = useRef(null);
  const onBlur = () => {
    console.log(ref.current); // Only contains one property!
    ref.current.blur();
  };

  return <FancyInput ref={ref} onBlur={onBlur} />;
};

export default UseImperativeHandleExample;
