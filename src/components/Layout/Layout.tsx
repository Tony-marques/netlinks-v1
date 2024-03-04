import {styled} from "styled-components";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar.tsx";

const Layout = () => {
    return (
        <LayoutStyled>
            <Navbar/>
            <Outlet/>
        </LayoutStyled>
    );
};

export default Layout;

const LayoutStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;