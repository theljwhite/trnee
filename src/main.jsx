import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        autoClose={4000}
        position="bottom-center"
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="light"
        bodyClassName={() => "flex items-center text-base text-zinc-800"}
        transition={Bounce}
        progressStyle={{ background: "#4f46e5" }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
