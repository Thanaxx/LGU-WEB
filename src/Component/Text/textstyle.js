import styled from "styled-components";

export const TextWrap = styled.div`
    background-color: white;
    padding: 70px 0;
`;

export const MainText = styled.div`
    width: 60%;
    margin: auto;
    color: #1A1A1A;

    @media screen and (max-width: 1200px){
        width: 70%;
    }

    @media screen and (max-width: 768px){
        width: 90%;
    }

    @media screen and (max-width: 480px){
        width: 95%;
    }

    p{
        text-align: center;
        font-weight: 400;
        font-size: 23px;
        color: #3C4648;

        @media screen and (max-width: 480px){
            font-size: 20px;
        }
        

        span{
            font-size: 45px;
            font-weight: 900;
            color: #4E6E79;

            @media screen and (max-width: 480px){
                font-size: 40px;
            }
        }
    }
`;
