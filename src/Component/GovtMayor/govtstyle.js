import styled from "styled-components";

export const MayorWrapper = styled.div`
    background-color: white;
`;

export const Container = styled.div`
    width: 85%;
    margin: auto;
    text-align: center;
    padding: 50px 0;
    color: #4E6E79;
`;

export const MayorImage = styled.div`
    img{
        margin: 40px 0;
        width: 30%;

        @media screen and (max-width: 768px){
            width: 100%;
            margin: 50px 0 0 0;
        }
    }
`;

export const MayorDetails = styled.div`
    p{
        font-size: 20px;
        font-weight: 500;
        color: #4E6E79;
    }
`;

export const MayorSocMed = styled.div`
    padding: 10px 0;
`;

export const MayorPersonalInfo = styled.div`
    padding: 30px 0;
`;

export const InfoBody = styled.div`
    margin-bottom: 40px;

    h1{
        padding: 10px 0;
        font-size: 25px;
    }

    p{
        font-weight: bold;
        color: #4E6E79;
        font-family: 'Maitree', serif;
    }
`;