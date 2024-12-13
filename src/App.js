import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Home/Home";
import { Provider } from "react-redux";
import store from "./store/store";


const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
