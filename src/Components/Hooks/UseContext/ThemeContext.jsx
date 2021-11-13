import { useContext, createContext, useState, useCallback } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useUpdateTheme = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = useCallback(() => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  });

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
