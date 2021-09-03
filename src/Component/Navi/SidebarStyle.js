import styled from "styled-components";


export const SideBarNav = styled.div`
    background-color: rgba(0, 0, 0, 0);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${({ Sidebar }) => ( Sidebar ? '0' : '-150%')};
    display: flex;
    justify-content: center;
    transition: 1s;
    z-index: 10;
`;

export const SideBarWrap = styled.div`
    width: 40vw;
    background-color: #4E6E79;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;

    @media screen and (max-width: 768px){
        width: 80vw;
    }
    
`;

export const SideIcon = styled.div`
    color: white;
    text-align: right;
    font-size: 30px;
    padding: 10px 30px;
    cursor: pointer;
`;