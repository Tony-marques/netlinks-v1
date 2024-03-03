import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import PostsPage from "../pages/PostsPage/PostsPage.tsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.tsx";
import Layout from "../components/Layout/Layout.tsx";
import {PostContextProvider} from "../contexts/PostContext.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                element: <PostContextProvider/>,
                children: [
                    {
                        element: <PrivateRoute/>,
                        children: [
                            {
                                element: <Layout/>,
                                children: [
                                    {
                                        path: "/",
                                        element: <PostsPage/>
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: "/connexion",
                element: <LoginPage/>
            }
        ]
    }
]);