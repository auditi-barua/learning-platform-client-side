import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Courses from "../../Pages/Courses";
import Home from "../../Pages/Home";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        Children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Courses></Courses>
            }
        ]
    }
])