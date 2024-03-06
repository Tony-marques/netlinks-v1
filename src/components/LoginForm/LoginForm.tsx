import {styled} from "styled-components";
import {useState} from "react";
import {useAuth} from "../../hooks/useAuth.tsx";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FormfieldLogin, FormfieldRegister, loginSchema} from "../../utils/formSchemaValidation.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {isValid} from "zod";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormfieldRegister>({
        resolver: zodResolver(loginSchema),
        mode: "onChange"
    });
    const {login} = useAuth();

    const handleOnSubmit = (data: FormfieldLogin) => {
        console.log(data);
        try {
            // login(data);
        } catch(err) {
        }

    };

    const handleToggleShowPaswword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <LoginFormStyled
            action=""
            method="POST"
            onSubmit={handleSubmit(handleOnSubmit)}
        >
            <h1>Connexion</h1>

            <div className="input-group">
                <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                />
                {errors.email && <p className="errors">{errors.email.message}</p>}

            </div>

            <div className="input-group">
                <div className="input-password">

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Mot de passe"
                        {...register("password")}
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
                {errors.password && <p className="errors">{errors.password.message}</p>}

            </div>

            <Link to="#">Mot de passe oublié ?</Link>
            <button disabled={!isValid}>Se connecter</button>
            <span>Tu n'as pas de compte ? <Link to="/inscription">Créer mon compte</Link></span>

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
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        .input-password {
            position: relative;
        }

        .errors {
            font-size: 0.8rem;
            color: red;
        }

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
        padding: 0.8rem 1rem;
        background-color: #0866FF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        font-weight: 700;
        width: 100%;
        
        &:disabled{
            background-color: gray;
            cursor: not-allowed;
        }
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