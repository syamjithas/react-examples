import { useTheme, useUpdateTheme } from "./ThemeContext";

const ContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Context</div>
    </>
  );
};
export default ContextComponent;
