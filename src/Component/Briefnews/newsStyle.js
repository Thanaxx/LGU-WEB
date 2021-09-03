import styled from "styled-components";

export const NewsWrapper = styled.div`
    background-color: white;
`;

export const NewsCont = styled.div`
    width: 85%;
    margin: auto;
    padding: 40px 0;

    @media screen and (max-width: 768px){
        width: 95%;
    }
`;

export const Headnews = styled.div`
    background-color: white;
    
    p{
        font-weight: 500;
        font-size: 25px;
        color: #4E6E79;
        padding: 50px 0px 0 0px;

        span{
            font-size: 60px;
            font-weight: bolder;

            @media screen and (max-width: 768px){
                font-size: 50px;
            }
        }

        @media screen and (max-width: 768px){
            font-size: 20px;
        }
    }
`;

export const NewsLinks = styled.div`
    padding: 50px 0;

    @media screen and (max-width: 768px){
        padding: 30px 0;
    }
`;

export const NewsBox = styled.div`
    display: flex;
    margin: 50px 0;
    background-color: #E7E7E7;

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 10px;
    }

    .details{
        margin: auto;
        padding: 0px 30px;

        @media screen and (max-width: 768px){
            padding: 0px 2px;
        }

        img{
            margin: auto;
        }

        h3{
            margin: auto;
            padding: 10px 0;
            color: #4E6E79;
        }

        p{
            margin: auto;
            padding: 10px 0;
            color: #4E6E79;
        }

        button{
            padding: 10px 25px;
            font-weight: lighter;
            background-color: #4E6E79;
            color: white;
            border: none;
            outline: none;
            border-radius: 3px;
            cursor: pointer;
            font-family: 'Maitree', serif;
            margin-top: 10px;
        }
    }

`;