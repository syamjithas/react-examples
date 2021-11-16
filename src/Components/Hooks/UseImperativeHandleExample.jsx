import { useRef } from "react";
import FancyInput from "./useImperativeHandle/FancyInput";
const UseImperativeHandleExample = () => {
  const ref = useRef(null);
  const alertVal = () => {
    console.log(ref.current); // Only contains one property!
    ref.current.alertVal();
  };

  return (
    <div>
      <div>
        <FancyInput ref={ref} />
      </div>
      button from parent componet
      <div>
        <button onClick={alertVal}>Alert</button>
      </div>
    </div>
  );
};

export default UseImperativeHandleExample;
