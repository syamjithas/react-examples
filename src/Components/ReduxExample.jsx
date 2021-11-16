import "../resources/redux-page.scss";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Todo from "../components/Todo";
function ReduxExample() {
  return (
    <Provider store={store}>
      <div className="redux-container">
        <div className="sub-container">
          <Todo />
        </div>
        <div className="sub-container"></div>
        <div className="sub-container"></div>
        <div className="sub-container"></div>
      </div>
    </Provider>
  );
}

export default ReduxExample;
