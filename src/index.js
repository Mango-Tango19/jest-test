import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundry from "./components/error-boundry/error-boundry";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundry>
        <App />
    </ErrorBoundry>
  </React.StrictMode>
);

//reportWebVitals();
