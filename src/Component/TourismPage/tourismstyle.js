import styled from "styled-components";

export const TourismWrap = styled.div`
    min-height: 100vh;
    background-color: white;
`;

export const TourismMain = styled.div`
    width: 95%;
    margin: auto;
    padding: 30px 0;
`;

export const MainText = styled.div`
    text-align: center;
    color: #4E6E79;
    padding: 40px 0;
    width: 80%;
    margin: auto;

    h1{
        font-size: 50px;
    }

    p{
        font-size: 22px;
        font-weight: 500;
    }
`;

export const MainImages = styled.div`
    --webkit-column-count: 3;
    --moz-column-count: 3;
    column-count: 3;
    --webkit-column-width: 33%;
    --moz-column-width: 33%;
    column-width: 33%;
    padding: 0 12px;

    @media (max-width: 991px){
        --webkit-column-count: 2;
        --moz-column-count: 2;
        column-count: 2;
    }

    @media (max-width: 600px){
        --webkit-column-count: 1;
        --moz-column-count: 1;
        column-count: 1;
        --webkit-column-width: 100%;
        --moz-column-width: 100%;
        column-width: 100%;
    }

    .theImage{
        margin-bottom: 12px;
        cursor: pointer;
        transition: all 350ms ease;
        --webkit-transition: all 350ms ease;

        /* :hover{
            filter: opacity(.8);
        } */

        img{
            width: 100%;
        }
    }


    /* hovering the text */
    .team{
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .theImage{
        position: relative;
    }

    .theImage img{
        width: 100%;
        z-index: 10;
        transition: 0.9s;
    }

    .overlay-text {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        bottom: 6px;
        left: 0;
        text-align: center;
        background-color: rgba(78, 110, 121, 0.72);
        width: 100%;
        padding: 15px 5px;
        color: white;
    }

    .overlay-text h1{
        font-size: 25px;
        padding-bottom: 10px;
    }

    .overlay-text p{
        font-size: 15px;
    }

    .team:hover .overlay-text{
        opacity: 1; 
    }
`;

export const ModalImage = styled.div`

    .modal{
        background-color: #22324B;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center; 
        transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
        visibility: hidden;
        opacity: 0;
        transform: scale(0);
        overflow: hidden;
        z-index: 999;
    }

    .open{
        visibility: visible;
        opacity: 1;
        transform: scale(1);
    }

    img{
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 20px 0 20px;
        margin: 0 auto;
    }

    .closeIcon{
        color: white;
        font-size: 55px;
        position: fixed;
        top: 10px;
        right: 30px;
        padding: 5px;
        cursor: pointer;
    }
`;