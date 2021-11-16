import ContextComponent from "./useContext/ContextComponent";
import ThemeProvider from "./useContext/ThemeContext";

const UseContextExample = () => {
  return (
    <>
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>
    </>
  );
};

export default UseContextExample;
