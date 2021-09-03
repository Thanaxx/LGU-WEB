import styled from "styled-components"

export const FaqWrap = styled.div`
    padding: 50px 0;
`;

export const WrapText = styled.div`
    padding: 30px 0;
    text-align: center;
`;

export const WrapQuestions = styled.div`
    
`;

export const QuestionData = styled.div`
    width: 80%;
    margin: auto;

    @media screen and (max-width: 768px){
        width: 98%;
    }
`;


export const WrapQuest = styled.div`
    background-color: white;
    transition: 0.4s;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    box-shadow:  -8px 8px 57px #dbdbdb,
             8px -8px 57px #ffffff;
    cursor: pointer;
             

    h3{
        color: #036FB6;
        font-size: 18px;
        font-weight: 500;
    }
`;

export const Dropdown = styled.div`
    
    p{
        font-family: 'Maitree', serif;
        font-weight: 600;
        margin-bottom: 25px;
        padding: 0px 15px;
    }
`;