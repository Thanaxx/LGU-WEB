import styled from "styled-components";

export const NavWrap = styled.div`
    z-index: 1;

    .navbar{
        background-color: transparent;
        min-height: 50px;
        width: 100%;
        position: fixed;
        top: 0;
        transition: .8s;
        z-index: 1;
    }

    .navbar.active{
        background-color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const NavLinks = styled.div`
    display: flex;
    padding: 0px 25px;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    @media screen and (max-width: 480px){
        padding: 10px 5px;
    }

    /* Icon */
    .icon{
        color: white;
        font-size: 30px;
        cursor: pointer;
        display: flex;
    }

    .icon.active{
        color: #4E6E79;
    }

    .twitter, .search, .menu{
        margin: 0px 10px;

        @media screen and (max-width: 768px){
            margin: 0px 4px;
            font-size: 30px;
        }

        @media screen and (max-width: 480px){
            margin: 0px 2px;
            font-size: 25px;
        }
    }

    /* Logo */
    .logo{
        color: white;
        line-height: 5px;
        p{
            font-size: 35px;
            font-weight: bold;
        }
    }

    .logo.active{
        color: #4E6E79;

        line-height: 5px;
        p{
            font-size: 35px;
            font-weight: bold;
        }
    }
`;

