import styled from "styled-components";

export const ContWrap = styled.div`
    padding: 50px 0;
`;

export const ContTitle = styled.div`
    padding: 40px 0;
    text-align: center;
    line-height: 20px;
    color: #4E6E79;

    h1{
        font: 45px;
        letter-spacing: 1px;
    }

    p{
        font-size: 20px;
        font-family: 'Maitree', serif;
        font-weight: 600;
    }
`;

export const ContDetails = styled.div`
    display: flex;
    margin-bottom: 100px;
    color: #4E6E79;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const ContBox = styled.div`
    margin: auto;
    text-align: center;
    line-height: 15px;

    @media screen and (max-width: 768px){
        margin-bottom: 15px;
    }

    h1{
        font-size: 25px;
    }

    p{
        font-size: 20px;
        color: gray;
    }
`;

export const ContMap = styled.div`

`;