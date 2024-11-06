import React from 'react'
import { BsTwitterX } from "react-icons/bs";

import {
	Title,
	Snippet,
	Description,
	SocialIcons,
	MainContainer,
	ImageContainer
} from './snippet-card.styles'

import CustomIcon from './../custom-icon/custom-icon.component'
import CustomLink from './../custom-link/custom-link.component'
import CustomEmoji from './../custom-emoji/custom-emoji.component'

import LinkedinLogo from './../../images/social/linkedin.png'
import GithubLogo from './../../images/social/github.png'
import MediumLogo from './../../images/social/medium.png'
import PP from './../../images/pp.png'

const SnippetCard = () => {
	return (
		<MainContainer>
			<div>
				<Title>Hi, I'm Ebru.</Title>
				<Snippet>
					Sr. Frontend Engineer at <CustomLink targetUrl='https://roompricegenie.com/'>RoomPriceGenie</CustomLink> <CustomEmoji label='genie' emoji='🧞' /> <br />
					Founder at <CustomLink targetUrl='https://noecrafts.com'>Noe Crafts</CustomLink> <CustomEmoji label='leaf' emoji='🍃' /> <br />
				</Snippet>
				<Description>
					I have always been so curious about the whole software development cycle, from just an idea to the journey of bringing it to life.
					Therefore I enjoy spending my time improving myself in full stack development while mostly focusing on the frontend.
				</Description>
				<SocialIcons>
					<CustomIcon
						targetUrl='https://www.linkedin.com/in/ebrukaya'
						imageSource={LinkedinLogo}
						altDescription='linkedin' />
					<CustomIcon
						targetUrl='https://www.github.com/ebru'
						imageSource={GithubLogo}
						altDescription='github' />
					<CustomIcon
						targetUrl='https://www.medium.com/@ebrukye'
						imageSource={MediumLogo}
						altDescription='medium' />
					<a href="https://x.com/ebrukye" target="_blank" rel="noreferrer">
						<BsTwitterX style={{ fontSize: 24, marginTop: 2.5, color: '#000' }} />
					</a>
				</SocialIcons>
			</div>
			<ImageContainer>
				<img src={PP} alt='profile' />
			</ImageContainer>
		</MainContainer>
	)
}

export default SnippetCard
