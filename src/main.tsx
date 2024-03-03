import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {store} from "./store/store.ts";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {PostContextProvider} from "./contexts/PostContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <PostContextProvider>
                    <RouterProvider router={router}/>
                </PostContextProvider>
            </QueryClientProvider>

        </Provider>

    </React.StrictMode>
);
