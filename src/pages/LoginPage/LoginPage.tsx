import {styled} from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
import Logo from "../../components/Logo/Logo.tsx";

const LoginPage = () => {

    return (
        <LoginPageStyled>
            <Logo/>
            <LoginForm/>
        </LoginPageStyled>
    );
};

export default LoginPage;

const LoginPageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    gap: 2rem;
`;