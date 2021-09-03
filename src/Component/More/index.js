import React from 'react'
import { Button } from '../../Buttons/Button'
import { InfoWrap, InforText } from './morestyle'

function Info() {
    return (
        <>
            <InfoWrap>
                <InforText data-aos="zoom-in">
                    <h1> Would you like more information about us?</h1>
                    <Button buttonStyle="btn-blue">Contact us</Button>
                </InforText>
            </InfoWrap>
        </>
    )
}

export default Info
