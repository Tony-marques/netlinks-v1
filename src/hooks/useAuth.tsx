import {useDispatch, useSelector} from "react-redux";
import {updateAccount} from "../store/AccountSlice.ts";
import {useNavigate} from "react-router-dom";

// export enum AuthStatus {
//     Unknown,
//     Authenticated,
//     Guest,
// }

export const useAuth = () => {
    const {account} = useSelector((state) => state.account);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authenticated = async () => {
        const response = await fetch("https://localhost:8000/me", {
            credentials: "include"
        });
        const data = await response.json();
        if(response.ok) {
            dispatch(updateAccount(data));
            navigate("/");
            localStorage.setItem("user", JSON.stringify(data));
            return;
        }
        dispatch(updateAccount(null));
    };

    const login = async (form: { email: string, password: string }) => {
        const response = await fetch("https://localhost:8000/login", {
            method: "POST",
            body: JSON.stringify(form),
            credentials: "include",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        if(response.ok) {
            authenticated();
            return;
        }
        dispatch(updateAccount(null));
    };

    return {
        account,
        login
    };
};