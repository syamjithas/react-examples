import UseStateExample from "./Components/Hooks/UseStateExample";
import UseEffectExample from "./Components/Hooks/UseEffectExample";
import UseMemoExample from "./Components/Hooks/UseMemoExmple";
import UseRefExample from "./Components/Hooks/UseRefExample";
import UseContextExample from "./Components/Hooks/UseContextExample";
import UseReducerExample from "./Components/Hooks/UseReducerExample"
import UseCallbackExample from "./Components/Hooks/UseCallbackExample"
import UseCustomHookExample from "./Components/Hooks/UseCustomHookExample"
import APIandWebWoker from "./Components/APIandWebWoker"
import Landing from "./Components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="use-state-example/" element={<UseStateExample />} />
        <Route path="use-effect-example/" element={<UseEffectExample />} />
        <Route path="use-memo-example/" element={<UseMemoExample />} />
        <Route path="use-ref-example/" element={<UseRefExample />} />
        <Route path="use-context-example/" element={<UseContextExample />} />
        <Route path="use-reducer-example/" element={<UseReducerExample />} />
        <Route path="use-callback-example/" element={<UseCallbackExample />} />
        <Route path="use-custome-hook-example/" element={<UseCustomHookExample/>} />
        <Route path="api-and-web-woker/" element={<APIandWebWoker/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
