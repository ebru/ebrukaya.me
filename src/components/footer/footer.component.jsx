import React from 'react'

import { FooterDiv, FooterLeftDiv } from './footer.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const Footer = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 5,
            borderTop: `2px solid #f8f8f8`,
            marginTop: 40,
            paddingTop: 20,
        }}>
            <FooterLeftDiv>
                Currently in
                <br /><CustomEmoji label='pin' emoji='🇩🇪' /> Berlin, Germany
            </FooterLeftDiv>
            <FooterDiv>
                © {new Date().getFullYear() + " "}
                Ebru Kaya
                <br /><a href="mailto:ebru@ebrukaya.me">ebru[at]ebrukaya.me</a> <CustomEmoji label='mailbox' emoji='📮' />
            </FooterDiv>
        </div>
    )
}

export default Footer
