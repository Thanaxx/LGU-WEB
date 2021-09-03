import React from 'react'
import { FooterWrap, FooterBody, MainLinks } from './footerstyle'
import { Links} from './footerlinks'

function Footer() {
    return (
        <>
            <FooterWrap>
                <FooterBody>  
                    {Links.map((items) => {
                        return(
                            <>
                                <MainLinks>
                                    <h2>{items.head}</h2>
                                    <p>{items.tag}</p>
                                    <p>{items.nameA}</p>
                                    <p>{items.nameB}</p>
                                    <p>{items.nameC}</p>
                                    <p>{items.nameD}</p>
                                    <p>{items.nameE}</p>
                                </MainLinks>
                            </>
                        )
                    })}
                </FooterBody>
            </FooterWrap>
        </>
    )
}

export default Footer
