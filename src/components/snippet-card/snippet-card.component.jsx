import React from 'react'

import { Title, Snippet, Description, SocialIcons } from './snippet-card.styles'

import CustomIcon from './../custom-icon/custom-icon.component'
import CustomEmoji from './../custom-emoji/custom-emoji.component'

import LinkedinLogo from './../../images/social/linkedin.png'
import GithubLogo from './../../images/social/github.png'
import MediumLogo from './../../images/social/medium.png'

const SnippetCard = () => {
	return (
		<>
			<Title>Hi, I'm Ebru.</Title>
			<Snippet>Full Stack Developer at Getir, backpacker and lover of nature <CustomEmoji label='leaf' emoji='🍃' /></Snippet>
			<Description>
				I have always been so curious about the whole software development cycle, from just an idea to the journey of bringing it to life.
				Therefore I enjoy spending my time to improve myself in full stack development.
			</Description>
			<SocialIcons>
				<CustomIcon
					targetUrl='https://www.linkedin.com/in/ebrukaya/'
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
			</SocialIcons>
		</>
	)
}

export default SnippetCard