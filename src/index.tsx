import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";  
import AddLinkForm from "./components/AddLinkForm";
import Header from "./components/Header";
import App from './App'
import AddTab from "./pages/addTab";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
);
