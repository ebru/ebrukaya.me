import React from 'react'

import { FooterDiv } from './footer.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                © {new Date().getFullYear() + " "}
                Ebru Kaya
                <br /><a href="mailto:ebru@ebrukaya.me">ebru[at]ebrukaya.me</a> <CustomEmoji label='mailbox' emoji='📮' />
            </FooterDiv>
        </>
    )
}

export default Footer
