import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'
import {
	SectionTitle,
	Quote,
	ItalicText,
	BoldText,
	PersonalList,
	Item
} from './../section-card/section-card.styles'
import CustomIcon from './../custom-icon/custom-icon.component'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from './../custom-link/custom-link.component'
import SpotifyLogo from './../../images/social/spotify.png'

const BlogLink = styled(Link)`
	text-decoration: underline;
`

const PersonalCard = () => {
	return (
		<>
			<SectionTitle><CustomEmoji label='nature' emoji='🌄' /> Personal</SectionTitle>
			<Quote>
				"It doesn’t interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart’s longing.
        It doesn’t interest me how old you are. I want to know if you will risk looking like a fool – for love – for your dreams – for the adventure of being alive." <ItalicText style={{ fontSize: '18px', color: '#888' }}>– Oriah Mountain Dreamer</ItalicText>
			</Quote>
			<PersonalList>
				<Item><BoldText>Personality type:</BoldText> <CustomLink targetUrl='https://www.16personalities.com/enfp-personality'>ENFP-T</CustomLink></Item>
				<Item><BoldText>Collections:</BoldText> postcard, flag patch and paper money from visited countries</Item>
				<Item>
					<BoldText>Music:</BoldText> dire straits, jungle, paradis, sohn... // me on
          <CustomIcon
						targetUrl='https://open.spotify.com/user/st943c9lgd92wk98aw3bfxcvb?si=UtRzXiaST-uX2-VJagH6Fw'
						imageSource={SpotifyLogo}
						altDescription='spotify'
						style={{ width: '27px', verticalAlign: 'middle', marginLeft: '5px' }}
					/>
				</Item>
				<Item><BoldText>Movies:</BoldText> <BlogLink to='/movies'>the ones</BlogLink> that made me feel somehow different than others</Item>
			</PersonalList>
		</>
	)
}

export default PersonalCard