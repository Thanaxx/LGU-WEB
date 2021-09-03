import React from 'react'
import { CareerCont, CareerBg, CareerText } from './Careerstyle'
import { Button } from '../../Buttons/Button'

function Career() {
    return (
        <>
          <CareerCont>
                <CareerBg>
                    <CareerText data-aos="fade-up">
                        <h1>CAREER OPPORTUNITIES </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti recusandae dolor error, aspernatur eos quidem unde, molestiae facilis exercitationem, voluptatum velit. Dignissimos obcaecati alias ut assumenda, nisi qui culpa omnis eveniet eius dolorum dolor quod?</p>
                        <Button buttonStyle='btn-primary'>See more jobs</Button>
                    </CareerText>
                </CareerBg>
          </CareerCont>
        </>
    )
}

export default Career
