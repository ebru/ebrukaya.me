import React from 'react'
import {
	SubTitle,
	ItemList,
	Item,
	Date,
	BoldText
} from './../section-card/section-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from '../custom-link/custom-link.component'
import NoeImg from '../../images/noe.jpg'
import useStyles from './journey-card.styles'

const JourneyCard = () => {
	const classes = useStyles()

	return (
		<>
			<SubTitle>Present</SubTitle>
			<ItemList>
				<Item>
					Senior Frontend Engineer at <CustomLink targetUrl='https://roompricegenie.com/'>RoomPriceGenie</CustomLink> <CustomEmoji label='genie' emoji='🧞' /> <Date>(Aug 2023 – )</Date>
				</Item>

				<Item>
					<div className={classes.flexSecondItem}>
						<div>
							<span className={classes.presentText}>Running a design and software studio called <CustomLink targetUrl='https://noecrafts.com'>Noe Crafts</CustomLink> since June of 2020.</span>
						</div>
						<CustomLink targetUrl='https://noecrafts.com'>
							<img
								className={classes.itemImage}
								src={NoeImg}
								alt='noe'
							/>
						</CustomLink>
					</div>
				</Item>

				<Item>
					<div className={classes.item}>
						<span className={classes.presentText}>Investing in stocks and startups.</span>
					</div>
				</Item>
			</ItemList>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='health' emoji='🐥' /> Co-Founder at <CustomLink targetUrl='https://assistivecards.com'>Assistive Cards</CustomLink>. <Date>(Oct 2022 – Jan 2024)</Date>
				</Item>
				<Item>
					<CustomEmoji label='health' emoji='🥦' /> Senior Frontend Engineer at <CustomLink targetUrl='https://cara.care'>Cara Care</CustomLink>. <Date>(Nov 2021 – Apr 2023)</Date>
				</Item>
				<Item>
					<CustomEmoji label='motobike' emoji='🛵' /> Frontend Engineer at <CustomLink targetUrl='https://getir.com/en/'>Getir</CustomLink>. <Date>(Dec 2019 – Jun 2020)</Date>
				</Item>
				<Item>
					<CustomEmoji label='joystick' emoji='🕹' /> Software Engineer at <CustomLink targetUrl='https://sony.com/'>Sony</CustomLink>.
				</Item>
				<Item>
					Senior Software Engineer <Date>(Oct 2019 – Nov 2019)</Date>, Software Engineer <Date>(Nov 2017 – Oct 2019)</Date>
				</Item>
				<Item>
					<CustomEmoji label='train' emoji='🚞' /> Took a gap year after graduation before starting my professional career.
				</Item>
				<Item>
					<CustomEmoji label='graduation' emoji='🎓' /> Graduated from <BoldText>Istanbul University</BoldText> with a degree in Computer Engineering. <Date>(2016)</Date>
				</Item>
				<Item>
					<CustomEmoji label='estonia' emoji='🇪🇪' /> Exchange Student at <BoldText>Tallinn University</BoldText> in Estonia. <Date>(2015)</Date>
				</Item>
				<Item>
					<CustomEmoji label='horse' emoji='🐴' /> Graduated from <BoldText>Nişantaşı Anadolu Lisesi</BoldText> with high school diploma. <Date>(2012)</Date>
				</Item>
				<Item>
					<CustomEmoji label='newborn' emoji='🐣' /> My interest in software development has started in my early ages while trying to design a website from free providers and I've built many, many others later on.
				</Item>
			</ItemList>
		</>
	)
}

export default JourneyCard
