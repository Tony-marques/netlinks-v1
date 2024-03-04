import {styled} from "styled-components";
import {ChangeEvent, FormEvent, useState} from "react";
import {useAuth} from "../../hooks/useAuth.tsx";
import {Link} from "react-router-dom";

const EMPTY_USER: { email: string, password: string } = {
    email: "",
    password: ""
};
const LoginForm = () => {
    const [form, setForm] = useState(EMPTY_USER);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {login} = useAuth();
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    };

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            login(form);

            // window.location.reload()

        } catch(err) {
            //     console.log(err)
            //     toast("test")
        }

    };

    const handleToggleShowPaswword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <LoginFormStyled
            action=""
            method="POST"
            onSubmit={handleOnSubmit}
        >
            <h1>Connexion</h1>

            <div className="input-group">
                <input
                    type="text"
                    onChange={handleOnChange}
                    name="email"
                    placeholder="Email"
                />
            </div>

            <div className="input-group">
                <input
                    onChange={handleOnChange}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
                />
                {showPassword && <i
                    className="fa-regular fa-eye-slash"
                    onClick={handleToggleShowPaswword}
                ></i>}
                {!showPassword && <i
                    className="fa-regular fa-eye"
                    onClick={handleToggleShowPaswword}
                ></i>}
            </div>

            <Link to="#">Mot de passe oublié ?</Link>
            <button>Se connecter</button>
            <span>Tu n'as pas de compte ? <Link to="#">Créer mon compte</Link></span>

        </LoginFormStyled>
    );
};

export default LoginForm;

const LoginFormStyled = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #242526;
    border-radius: 5px;
    width: 400px;

    h1 {
        color: #eee;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    .input-group {
        width: 100%;
        position: relative;

        input {
            padding: 1rem;
            border-radius: 5px;
            border: none;
            outline: none;
            background-color: #3A3B3C;
            color: white;
            width: 100%;

        }

        .fa-eye, .fa-eye-slash {
            display: flex;
            justify-content: center;
            color: white;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            width: 15px;
            height: 15px;
            font-size: 15px;
        }
    }

    button {
        padding: 0.7rem 1rem;
        background-color: #0866FF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        font-weight: 700;
        width: 100%;
    }

    span {
        color: #eee;
        font-size: 0.8rem;
    }

    a {
        text-decoration: none;
        font-size: 0.8rem;
        color: #0866FF;
    }


`;