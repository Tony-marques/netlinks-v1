import {styled} from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm.tsx";
import Logo from "../../components/Logo/Logo.tsx";

const RegisterPage = () => {

    return (
        <RegisterPageStyled>
            <Logo/>
            <RegisterForm/>
        </RegisterPageStyled>
    );
};

export default RegisterPage;

const RegisterPageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    gap: 2rem;
`;