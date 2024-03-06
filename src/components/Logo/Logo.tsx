import {styled} from "styled-components";

const Logo = () => {
    return (
        <LogoStyled>
            <p>N</p>
            <span>etlinks</span>
        </LogoStyled>
    );
};

export default Logo;

const LogoStyled = styled.div`
    display: flex;
    align-items: center;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        height: 100px;
        width: 100px;
        font-size: 5rem;
        font-weight: 700;
        background-color: #0866FF;
        border-radius: 50%;
    }

    span {
        font-size: 5rem;
        color: white;

    }
`;