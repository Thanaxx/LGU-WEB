import styled from "styled-components";
import Career from '../../../src/images/career.jpg'

export const CareerCont = styled.div`
    min-height: 100vh;
`;

export const CareerBg = styled.div`
    background: url(${Career});
    background-position: center;
    background-size: cover;
    height: 90vh;
`;

export const CareerText = styled.div`
    width: 60%;
    color: white;
    margin: auto 9vw;
    padding-top: 10vh;

    @media screen and (max-width: 1200px){
        width: 80%;
    }

    @media screen and (max-width: 768px){
        width: 95%;
        margin: auto 2vw;
        padding-top: 2vh;

    }

    @media screen and (max-width: 480px){

    }

    h1{
        font-size: 60px;
    }

    p{
        font-size: 20px;
        font-family: 'Maitree', serif;

        @media screen and (max-width: 768px){
            font-size: 18px;
        }
    }

    button{
        padding: 10px 20px;
        background-color: transparent;
        color: white;
        border: 1px solid white;
        margin-top: 20px;
    }
`;