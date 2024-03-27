
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import React, { render } from "preact/compat";

import './index.css'
import ErrorPage from "./pages/ErrorPage";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    path: "",
                    element: <HomePage />
                }
            ]
        },

    ]);

    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

render(<App />, document.getElementById('app')!);