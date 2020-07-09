import React from 'react'

import { FooterDiv } from './footer.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                © 2020 <strong>Ebru Kaya</strong>
                <br /><a href="mailto:ebru@ebrukaya.me">ebru[at]ebrukaya.me</a> <CustomEmoji label='mailbox' emoji='📮' />
            </FooterDiv>
        </>
    )
}

export default Footer
