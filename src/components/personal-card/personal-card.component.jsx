import React from 'react'
import { ReGeoMapChart } from 'regeo-map-chart';
import { Link } from 'gatsby';
import styled from 'styled-components'
import {
	Quote,
	ItalicText,
	BoldText,
	PersonalList,
	Item
} from './../section-card/section-card.styles'
import CustomIcon from './../custom-icon/custom-icon.component'
import CustomLink from './../custom-link/custom-link.component'
import SpotifyLogo from './../../images/social/spotify.png'
import GoodreadsLogo from './../../images/social/goodreads.png'


const BlogLink = styled(Link)`
	text-decoration: underline;
`

const countriesVisited = [
	['Country', 'First visit'],
	['tr', 1994],
	['dk', 2015],
	['at', 2015],
	['cz', 2015],
	['de', 2015],
	['nl', 2015],
	['ee', 2015],
	['ru', 2015],
	['fi', 2015],
	['lv', 2015],
	['lt', 2015],
	['se', 2015],
	['no', 2015],
	['fr', 2016],
	['be', 2016],
	['lk', 2017],
	['ge', 2017],
	['hu', 2017],
	['gr', 2018],
	['it', 2018],
	['va', 2018],
	['is', 2018],
	['rs', 2019],
	['pt', 2019],
	['ch', 2021],
];

const PersonalCard = () => {
	return (
		<>
			<Quote>
				"It doesn’t interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart’s longing.
				It doesn’t interest me how old you are. I want to know if you will risk looking like a fool – for love – for your dream – for the adventure of being alive." <ItalicText style={{ fontSize: '18px', color: '#888' }}>– Oriah Mountain Dreamer</ItalicText>
			</Quote>
			<PersonalList>
				<Item><BoldText>Personality type:</BoldText> <CustomLink targetUrl='https://www.16personalities.com/enfp-personality'>ENFP-T</CustomLink></Item>
				<Item><BoldText>Collections:</BoldText> postcard, flag patch and paper money</Item>
				<Item>
					<BoldText>Music:</BoldText> fleetwood mac, dire straits, jungle, paradis, sohn... // me on
					<CustomIcon
						targetUrl='https://open.spotify.com/user/st943c9lgd92wk98aw3bfxcvb?si=UtRzXiaST-uX2-VJagH6Fw'
						imageSource={SpotifyLogo}
						altDescription='spotify'
						style={{ width: '27px', verticalAlign: 'middle', marginLeft: '5px' }}
					/>
				</Item>

				<Item>
					<BoldText>Books:</BoldText> “life holds one great but quite commonplace mystery. though shared by each of us and known to all, seldom rates a second thought. that mystery, which most of us take for granted and never think twice about, is time.
					<br></br>
					<br></br>
					calendars and clocks exist to measure time, but that signifies little because we all know that an hour can seem as eternity or pass in a flash, according to how we spend it.
					<br></br>
					<br></br>
					time is life itself, and life resides in the human heart.” - momo // me on
					<CustomIcon
						targetUrl='https://goodreads.com/ebrukaya'
						imageSource={GoodreadsLogo}
						altDescription='goodreads'
						style={{ width: '23px', verticalAlign: 'middle', marginLeft: '5px' }}
					/>
				</Item>

				<Item><BoldText>Movies:</BoldText> <BlogLink to='/movies'>the ones</BlogLink> that made me feel somehow different than others</Item>
				<Item><BoldText>Games:</BoldText> I especially love story-driven games a lot! here are <BlogLink to='/games'>some</BlogLink> that I enjoyed playing so far</Item>
			</PersonalList>
			<div style={{ marginTop: 20 }}>
				<BoldText>Countries visited:</BoldText>
				<ReGeoMapChart
					data={countriesVisited}
					width="100%"
					hideMapLegend={true}
					datafulRegionColor="#878BFA"
				/>
			</div>
		</>
	)
}

export default PersonalCard