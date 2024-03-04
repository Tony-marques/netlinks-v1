import {styled} from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
import RegisterForm from "../../components/RegisterForm/RegisterForm.tsx";



const RegisterPage = () => {

    return (
        <RegisterPageStyled>
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
    border: 1px solid red;
`;