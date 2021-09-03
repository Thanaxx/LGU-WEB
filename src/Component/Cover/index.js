import React from 'react'
import { CoverWrapper, CoverMain, CoverTitle } from './Coverstyle'
import { Button } from '../../Buttons/Button'

function Coverpage() {
    return (
        <>
            <CoverWrapper>
                <CoverMain>
                   
                    <CoverTitle data-aos="fade-up" > 
                        <h3>USWAG</h3>
                        <h1>BANWANG BADIANGAN</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt commodi optio in, amet inventore iusto quasi odio sed fuga quae eveniet officia quos. Magnam voluptatibus officiis voluptas magni! Tempore deserunt quis, aliquam quaerat qui ipsum, earum in error ea, cum sequi. Unde cum laborum necessitatibus numquam natus ratione quasi?</p>
                        <Button buttonStyle='btn--primary'>Explore our Place</Button>
                    </CoverTitle>
                </CoverMain>
            </CoverWrapper>
        </>
    )
}

export default Coverpage
