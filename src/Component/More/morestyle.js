import styled from "styled-components";

export const InfoWrap = styled.div`
    background-color: white;
    padding: 50px 0;
`;

export const InforText = styled.div`
    background-color: #4E6E79;
    width: 90%;
    margin: auto;
    padding: 50px 0;
    text-align: center;
    color: white;

    @media screen and (max-width: 768px){
        padding: 30px 0;
    }

    @media screen and (max-width: 480px){
       
    }

    h1{
        font-size: 45px;
        font-weight: lighter;
        margin-bottom: 20px;

        @media screen and (max-width: 768px){
            font-size: 25px;
        }
    }
`;