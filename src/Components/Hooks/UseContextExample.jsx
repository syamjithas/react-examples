import ContextComponent from "./UseContext/ContextComponent";
import ThemeProvider from "./UseContext/ThemeContext";

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
