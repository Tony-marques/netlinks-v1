import {styled} from "styled-components";
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
`;