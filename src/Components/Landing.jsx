import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>
        <Link to="/use-state-example">UseStateExample</Link>
      </div>
      <div>
        <Link to="/use-effect-example">UseEffectExample</Link>
      </div>
      <div>
        <Link to="/use-memo-example">UseMemoExmple</Link>
      </div>
      <div>
        <Link to="/use-ref-example">UserRefExmple</Link>
      </div>
      <div>
        <Link to="/use-context-example">UseContextExample</Link>
      </div>
      <div>
        <Link to="/use-reducer-example">UseReducerExample</Link>
      </div>
      <div>
        <Link to="/use-callback-example">UseCallbackExample</Link>
      </div>
    </div>
  );
};

export default Landing;
