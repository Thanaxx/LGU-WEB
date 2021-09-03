import styled from "styled-components";

export const CouncilWrap = styled.div`
    background-color: #4E6E79;
    min-height: 100vh;
`;

export const CouncilCon = styled.div`

`;

export const CouncilCarousel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    background-color: white;
    color: #4E6E79;
    margin: 0 15px;
    font-size: 4em;
    padding: 20px 7px;

    .info{
        display: flex;
        flex-direction: column;
        text-align: center;

        img{
            width: 40%;
            margin: auto;
            padding: 5px 0;
        }
        
        h4{
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 1px;
        }

        span{
            font-size: 18px
        }
        
        .name{
            font-weight: bolder;
            font-size: 25px;
        }

        .position{

        }
    }
`;