import styled from "styled-components";

export const FooterWrap = styled.div`
    color: #B0C9D2;
    padding: 40px 0;
    background-color: #4E6E79;
`;

export const FooterBody = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 700px){
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
    }    
`;

export const MainLinks = styled.div`

    h2{
        font-size: 20px;
    }

    p{
        font-size: 15px;
    }
`;