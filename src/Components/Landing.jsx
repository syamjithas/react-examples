import { Link } from "react-router-dom";
import "./landing.css";
const Landing = () => {
  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item ">
          <Link className="nav-link" to="/use-state-example">
            UseStateExample
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-effect-example">
            UseEffectExample
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-memo-example">
            UseMemoExmple
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-ref-example">
            UserRefExmple
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-context-example">
            UseContextExample
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/use-reducer-example">
            UseReducerExample
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-callback-example">
            UseCallbackExample
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-custome-hook-example">
            UseCustomHookExample
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/api-and-web-woker">
            APIandWebWoker
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-imperative-handle-example">
            UseImperativeHandleExample
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/use-layout-effect-example">
            UseLayoutEffectExample
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/redux-example">
            ReduxExample
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Landing;
