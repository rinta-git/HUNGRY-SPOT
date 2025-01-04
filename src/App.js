import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Home/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Cart } from "./components/Cart/Cart";
import { Error } from "./components/404/Error";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ResDetails } from "./components/DetailsPage/ResDetails";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <hr />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restuarant/:resId", element: <ResDetails />}
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
