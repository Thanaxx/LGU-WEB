import React, {useState} from 'react'
import { question } from './datafile'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { FaqWrap, WrapText, WrapQuestions, QuestionData, WrapQuest, Dropdown } from './faqStyle'

function FAQS() {

    const [click, setClick] = useState(false);

    const toggle = index => {
        if(click === index) {
            return setClick(null)
        }
        setClick(index)
    } 

    return (
        <>
            <FaqWrap data-aos="fade-up">
                <WrapText>
                    <h1>Frequently asked questions</h1>
                </WrapText>
                
                <WrapQuestions>
                    <QuestionData>
                       {question.map((item, index) => {
                           return(
                               <>
                                    <WrapQuest onClick={() => toggle(index)} key={index}>
                                        <h3>{item.quest}</h3>
                                        <span>{click === index ?  <AiFillCaretDown/> : <AiFillCaretUp/> }</span>
                                    </WrapQuest>

                                    {click === index ? (
                                        <Dropdown>
                                            <p>{item.answer}</p>
                                        </Dropdown>
                                    ) : null}
                               </>
                           )
                       })}
                    </QuestionData>
                </WrapQuestions>
            </FaqWrap>
        </>
    )
}

export default FAQS
