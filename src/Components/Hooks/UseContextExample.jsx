import { useState ,createContext} from "react";
import ContextComponent from "./UseContext/ContextComponent";

export const ThemeContext = createContext();

const UseContextExample = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onclick={toggleTheme}>Toggle Theme</button>
        <ContextComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default UseContextExample;
