import {styled} from "styled-components"
import {ChangeEvent, FormEvent, useState} from "react";
import {useAuth} from "../../hooks/useAuth.tsx";

const EMPTY_USER: { email: string, password: string } = {
    email: "",
    password: "",
}

const LoginPage = () => {
    const [form, setForm] = useState(EMPTY_USER)

    const {login} = useAuth()
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            login(form)

            // window.location.reload()

        } catch (err) {
            // console.log(err)
        }


    }

    return (
        <LoginPageStyled>
            <form action="" method='POST' onSubmit={handleOnSubmit}>
                <input type="text" onChange={handleOnChange} name="email"/>
                <input type="text" onChange={handleOnChange} name="password"/>
                <button>Se connecter</button>
            </form>
        </LoginPageStyled>
    );
};

export default LoginPage;

const LoginPageStyled = styled.div`
    form {
        display: flex;
        flex-direction: column;
    }
`