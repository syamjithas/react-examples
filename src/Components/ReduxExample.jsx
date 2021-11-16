import "../Resources/redux-page.scss";

import { Provider } from 'react-redux'
import configureStore from './configureStore'
const store = configureStore()

function ReduxExample() {
  return (
    <Provider store={store}>
      <div className="redux-container">
        <div className="sub-container"></div>
        <div className="sub-container"></div>
        <div className="sub-container"></div>
        <div className="sub-container"></div>
      </div>
    </Provider>
  );
}

export default ReduxExample;
