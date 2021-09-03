import React from 'react'
import { MayorWrapper, Container, MayorImage, MayorDetails, MayorSocMed, MayorPersonalInfo, InfoBody } from './govtstyle'
import { info } from './details'

function Mayors() {
    return (
        <>
            <MayorWrapper>
                <Container  data-aos="fade-up">
                    <MayorImage>
                        <img src="/images/Govt/Mayor.jpg" alt="" />
                    </MayorImage>

                    <MayorDetails>
                        <h1>SERAFFIN M. VILLA JR.</h1>
                        <p>Municipal Mayor</p>
                        <MayorSocMed>
                            <img src="/images/Govt/fb.svg" alt="" />
                            <img src="/images/Govt/ig.svg" alt="" />
                            <img src="/images/Govt/twitter.svg" alt="" />
                        </MayorSocMed>
                    </MayorDetails>

                    <MayorPersonalInfo data-aos="fade-up">
                        {info.map((item) =>{
                            return(
                                <>
                                    <InfoBody>
                                        <h1>{item.Heading}</h1>
                                        <p>{item.label}</p>
                                    </InfoBody>
                                </>
                            )
                        })}
                    </MayorPersonalInfo>

                </Container>
            </MayorWrapper>
        </>
    )
}

export default Mayors
