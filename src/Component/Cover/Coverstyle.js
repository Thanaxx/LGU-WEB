import styled from "styled-components";
import Back from '../../../src/images/cover.jpg'

export const CoverWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
`;

export const CoverMain = styled.div`
    background: url(${Back});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

export const CoverTitle = styled.div`
    /* background-color: red; */
    width: 60%;
    margin: auto 9vw;
    padding-top: 28vh;
    color: white;
    line-height: 25px;

    @media screen and (max-width: 1200px){
        width: 90%;
        padding-top: 28vh;
        margin: auto;
    }

    @media screen and (max-width: 768px){
        width: 96%;
        padding-top: 20vh;
        margin: auto;
    }

    @media screen and (max-width: 480px){
        width: 95;
        padding-top: 20vh;
        margin: auto 1vw;
        line-height: 25px;
    }

    h3{
        font-weight: lighter;
        font-size: 22px;
        margin: auto;
    }

    h1{
        font-size: 75px;
        font-weight: bolder;
        letter-spacing: 2px;

        @media screen and (max-width: 480px){
            font-size: 60px;
            line-height: 60px;
        }

        @media screen and (max-width: 768px){
            font-size: 48px;
            line-height: 60px;
        }
    }

    p{
        font-weight: lighter;
        font-size: 22px;
        text-align: justify;
        letter-spacing: 1px;
        font-family: 'Oswald', sans-serif;
        color: white;


        @media screen and (max-width: 480px){
            font-size: 18px;
        }
    }

    Button{
        margin-top: 10px;
    }
`;