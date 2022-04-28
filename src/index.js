import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import { Provider } from "react-redux";
import { store } from "./app/store";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Provider store={store}>
        <App />
        </Provider>
    </ErrorBoundry>
  </React.StrictMode>
);

//reportWebVitals();
