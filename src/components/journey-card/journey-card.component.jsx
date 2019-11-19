import React from 'react'

import {
	SectionTitle,
	SubTitle,
	ItemList,
	Item,
	Date,
	BoldText
} from './../section-card/section-card.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const JourneyCard = () => {
	return (
		<>
			<SectionTitle><CustomEmoji label='computer' emoji='💻' /> The Journey</SectionTitle>
			<SubTitle>Present</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='joystick' emoji='🕹' /> Working at <BoldText>Sony</BoldText> since November of 2017.</Item>
				<Item>
					Senior Software Engineer  <Date>(Oct 2019 – present)</Date>, Software Engineer <Date>(Nov 2017 – Oct 2019)</Date></Item>
			</ItemList>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='train' emoji='🚞' /> Took a gap year after graduation before starting my professional career.</Item>
				<Item>
					<CustomEmoji label='graduation' emoji='🎓' /> Graduated from <BoldText>Istanbul University</BoldText> with a degree in Computer Engineering. <Date>(2016)</Date></Item>
				<Item>
					<CustomEmoji label='estonia' emoji='🇪🇪' /> Exchange Student at <BoldText>Tallinn University</BoldText> in Estonia. <Date>(2015)</Date></Item>
				<Item>
					<CustomEmoji label='horse' emoji='🐴' /> Graduated from from <BoldText>Nişantaşı Anadolu Lisesi</BoldText> with high school diploma. <Date>(2012)</Date></Item>
				<Item>
					<CustomEmoji label='newborn' emoji='🐣' /> My interest in software development has started in my early ages while trying to design a website from free providers
                    and I've built many, many others later on.</Item>
			</ItemList>
		</>
	)
}

export default JourneyCard