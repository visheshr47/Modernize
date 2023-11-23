import React from "react";
import ReactDOM from "react-dom/client";
import Form from "../src/component/Form";
import Header from "../src/component/Header"

import Card from "../src/component/Card";
import Basket from "../src/component/Basket";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";

const App = () => {
    return (<div>
        <Provider store={appStore}>
            <Header />
            <Outlet />
        </Provider>
    </div>)
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Form />
            },
            {
                path: "/card",
                element: <Card />
            },
            {
                path: "/basket",
                element: <Basket />
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
