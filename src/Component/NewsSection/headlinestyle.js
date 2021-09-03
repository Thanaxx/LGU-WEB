import styled from "styled-components";

export const NewsWrapper = styled.div`
    min-height: 100vh;
    padding: 80px 50px;
    color: #224956;

    @media screen and (max-width: 768px){
        padding: 80px 10px;
    }
`;

export const NewsHead = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 30px 50px 30px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const Headname = styled.div`
    width: 70%;

    @media screen and (max-width: 768px){
        width: 100%;
    }

    p{
        font-size: 20px;

        span{
            font-size: 45px;
        }
    }
`;

export const Morenews = styled.div`
    width: 30%;

    p{
        font-size: 20px;
    }

    button{
        padding: 8px 20px;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #224956;
        border-radius: 3px;
        margin-top: 10px;
    }
`;

export const Topnews = styled.div`
    display: flex;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const News = styled.div`
    width: 40%;
    margin: auto;
    background-color: white;
    color: #22324B;
    padding: 25px;
    border: 1px solid #4E6E79;
    border-radius: 3px;

    @media screen and (max-width: 768px){
        width: 90%;
        margin: 20px auto;
    }

    @media screen and (max-width: 480px){
        width: 83%;
    }


    img{
        width: 100%;
        margin-bottom: 15px;
    }

    h1{
        font-size: 25px;
        font-weight: bolder;
        color: #4E6E79;
    }

    h4{
        color: #4E6E79;
        margin: 5px 0;
        font-weight: bolder;
        /* letter-spacing: 1px; */
        /* font-family: 'Oswald', sans-serif; */
        font-family: 'Maitree', serif;
    }

    button{
        padding: 8px 20px;
        margin-top: 10px;
        cursor: pointer;
    }
`;