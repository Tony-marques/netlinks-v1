import {styled} from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";



const LoginPage = () => {

    return (
        <LoginPageStyled>
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
    border: 1px solid red;
`;