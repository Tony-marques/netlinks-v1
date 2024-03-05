import {styled} from "styled-components";
import {ReactNode} from "react";

interface SidebarBlock {
    children: ReactNode;
    title?: string;
}

const SidebarBlock = ({children, title = "titre"}: SidebarBlock) => {
    return (
        <SidebarBlockStyled>
            <span className="title">{title}</span>
            {children}
        </SidebarBlockStyled>
    );
};

export default SidebarBlock;

const SidebarBlockStyled = styled.div`
    background-color: #242526;
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    
    .title {
        color:#fff;
        font-size: 20px;
        font-weight: 600;
    }
`;