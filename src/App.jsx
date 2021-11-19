import UseStateExample from "./components/hooks/UseStateExample";
import UseEffectExample from "./components/hooks/UseEffectExample";
import UseMemoExample from "./components/hooks/UseMemoExmple";
import UseRefExample from "./components/hooks/UseRefExample";
import UseContextExample from "./components/hooks/UseContextExample";
import UseReducerExample from "./components/hooks/UseReducerExample";
import UseCallbackExample from "./components/hooks/UseCallbackExample";
import UseCustomHookExample from "./components/hooks/UseCustomHookExample";
import UseImperativeHandleExample from "./components/hooks/UseImperativeHandleExample";
import UseLayoutEffectExample from "./components/hooks/UseLayoutEffectExample";
import APIandWebWoker from "./components/APIandWebWoker";
import ReduxExample from "./components/ReduxExample";
import Landing from "./components/Landing";
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
