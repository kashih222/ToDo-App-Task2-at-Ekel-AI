import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import StateContext from "./Context/StateContext.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateContext>
      <App />
    </StateContext>
    <ToastContainer />
  </StrictMode>
);
