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
      <div>
        <button className="btn btn-primary" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
      <div style={themeStyle}>Context</div>
    </>
  );
};
export default ContextComponent;
