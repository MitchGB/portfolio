
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import React, { render } from "preact/compat";

import './index.css'
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";
import C4CProjectPage from "./pages/C4CProjectPage";

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
        {
            path: "/projects",
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    path: "",
                    element: <ProjectsPage />
                },
                {
                    index: true,
                    path: "c4c",
                    element: <C4CProjectPage />
                }
            ]
        }

    ]);

    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

render(<App />, document.getElementById('app')!);