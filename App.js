import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Home/Home";


const App = () => {
  return <Home />
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
