import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot, hydrateRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";

hydrateRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </StrictMode>
);
