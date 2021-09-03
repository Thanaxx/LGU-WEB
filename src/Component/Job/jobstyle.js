import styled from "styled-components";

export const JobsWrap = styled.div`
    background-color: white;
    min-height: 100vh;
`;

export const JobMain = styled.div`
    width: 90%;
    margin: auto;
    padding: 50px 0;
`;

export const JobHeading = styled.div`
    background-color: white;
    text-align: center;
    width: 80%;
    margin: auto;
    padding-top: 20px;
    color: #4E6E79;
    font-weight: bold;

    h1{
        font-size: 40px;
    }

    p{
        font-weight: 500;
        font-size: 22px;
    }
`;

export const JobsName = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 50px 0;
`;

export const JobBox = styled.div`
    width: 40%;
    margin: 20px auto;
    padding: 30px;
    border: 1px solid #4E6E79;
    border-radius: 4px;
    color: #4E6E79;
    font-weight: bold;

    @media screen and (max-width: 768px){
        width: 90%;
    }

    h1{
        font-weight: bolder;
    }

    h3{
        margin: 10px 0;
    }

    h2{
        margin: 10px 0;
        font-size: 20px;
    }

    ul{
        padding: 0px 15px;
        line-height: 10px;

        @media screen and (max-width: 480px){
            line-height: 15px;
        }

        h4{
            font-size: 17px;
            font-weight: lighter;
        }
    }

    button{
        background-color: #4E6E79;
        color: white;
        padding: 14px 15px;
        border: none;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 10px 0;
        width: 100%;
        font-family: 'Maitree', serif;
    }
`;