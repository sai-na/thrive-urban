import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserAuthContextProvider>
    <App />
    <ToastContainer />
  </UserAuthContextProvider>
);
