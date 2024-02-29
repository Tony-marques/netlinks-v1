import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import PostsPage from "../pages/PostsPage/PostsPage.tsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                element: <PrivateRoute/>,
                children: [
                    {
                        path: "/",
                        element: <PostsPage/>
                    },
                ]
            },
            {
                path: "/connexion",
                element: <LoginPage/>
            }
        ]
    }
])