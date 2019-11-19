import React from 'react'

import { FooterDiv } from './footer.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                2019 – <strong>Ebru Kaya</strong>
                <br />ebru[at]ebrukaya.me <CustomEmoji label='mailbox' emoji='📮' />
            </FooterDiv>
        </>
    )
}

export default Footer