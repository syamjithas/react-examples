import UseStateExample from "./Components/Hooks/UseStateExample";
import UseEffectExample from "./Components/Hooks/UseEffectExample";
import UseMemoExample from "./Components/Hooks/UseMemoExmple";
import UseRefExample from "./Components/Hooks/UseRefExample";
import UseContextExample from "./Components/Hooks/UseContextExample";
import UseReducerExample from "./Components/Hooks/UseReducerExample";
import UseCallbackExample from "./Components/Hooks/UseCallbackExample";
import UseCustomHookExample from "./Components/Hooks/UseCustomHookExample";
import UseImperativeHandleExample from "./Components/Hooks/UseImperativeHandleExample";
import UseLayoutEffectExample from "./Components/Hooks/UseLayoutEffectExample";
import APIandWebWoker from "./Components/APIandWebWoker";
import ReduxExample from "./Components/ReduxExample";
import Landing from "./Components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./resources/bootstrap.css";
import "./resources/app.scss";
function App() {
  return (
    <BrowserRouter> 
      <div className="side-nav">
        <Landing />
      </div>
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}

          <Route path="use-state-example/" element={<UseStateExample />} />
          <Route path="use-effect-example/" element={<UseEffectExample />} />
          <Route path="use-memo-example/" element={<UseMemoExample />} />
          <Route path="use-ref-example/" element={<UseRefExample />} />
          <Route path="use-context-example/" element={<UseContextExample />} />
          <Route path="use-reducer-example/" element={<UseReducerExample />} />
          <Route
            path="use-callback-example/"
            element={<UseCallbackExample />}
          />
          <Route
            path="use-custome-hook-example/"
            element={<UseCustomHookExample />}
          />
          <Route path="api-and-web-woker/" element={<APIandWebWoker />} />
          <Route
            path="use-imperative-handle-example/"
            element={<UseImperativeHandleExample />}
          />
          <Route
            path="use-layout-effect-example/"
            element={<UseLayoutEffectExample />}
          />
          <Route path="redux-example/" element={<ReduxExample />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
