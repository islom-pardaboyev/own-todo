import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./context/Context.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainContext>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </MainContext>
  </BrowserRouter>
);
