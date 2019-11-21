import React from 'react'

import {
	SectionTitle,
	SubTitle,
	ItemList,
	Item,
	Date
} from './../section-card/section-card.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from './../custom-link/custom-link.component'

const SideProjectsCard = () => {
	return (
		<>
			<SectionTitle><CustomEmoji label='working' emoji='👩🏻‍💻'></CustomEmoji> Side Projects</SectionTitle>
			<SubTitle>Present</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='headphone' emoji='🎧' /> Working on <CustomLink targetUrl='https://github.com/ebru/euphony'>Euphony</CustomLink>,
					a little side project to improve my React, Node.js, Docker and AWS knowledge. <Date>(2019)</Date></Item>
			</ItemList>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='check' emoji='✔️' /> Built <CustomLink targetUrl='https://github.com/ebru/listpie'>Listpie</CustomLink>,
					the very first app that I have developed during my journey to learn mobile development as a personal interest in my free time. <Date>(2018)</Date></Item>
				<Item>
					<CustomEmoji label='knitting' emoji='🧶' /> Co-founded <CustomLink targetUrl='https://www.instagram.com/mukavvaco/'>MUKAVVA</CustomLink>,
					a design brand that we created together with my two close friends in a very amateur way, an adventure inspired by nature and our travels... <Date>(2018)</Date></Item>
				<Item>
					<CustomEmoji label='rocket' emoji='🚀' /> Created <CustomLink targetUrl='https://www.youtube.com/user/hayallerimdeben'>Hayallerimde Ben</CustomLink>,
					a storytelling project that I started to share my experiences through my bucket list journey between ages 18 and 25. <Date>(2013)</Date></Item>
			</ItemList>
		</>
	)
}

export default SideProjectsCard
