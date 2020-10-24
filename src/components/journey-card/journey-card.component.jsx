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
import CustomLink from '../custom-link/custom-link.component'
import TemettuImg from '../../images/temettu.jpg'
import useStyles from './journey-card.styles'

const JourneyCard = () => {
	const classes = useStyles()

	return (
		<>
			<SectionTitle><CustomEmoji label='computer' emoji='💻' /> The Journey</SectionTitle>
			<SubTitle>Present</SubTitle>
			<ItemList>
				<Item>
					<span className={classes.presentText}>Running a little design and software studio called <CustomLink targetUrl='https://noecrafts.com'>Noe Crafts</CustomLink> since June of 2020.</span>
					<div className={classes.productsTitle}>
						Current
					</div>
					<div className={classes.currentProjects}>
						<div>
							<span className={classes.presentEmoji}><CustomEmoji label='investment' emoji='💸' /></span> <CustomLink targetUrl='https://temettu.app'>Temettü</CustomLink>, a mobile app that helps you to follow the dividend calendar and track the dividend payments of your stock investments. <Date>(2020)</Date>
						</div>
						<CustomLink targetUrl='https://temettu.app'>
							<img
								className={classes.itemImage}
								src={TemettuImg}
								alt='temettu'
							/>
						</CustomLink>
					</div>
				</Item>
				<Item>
					Working on freelance projects. <a style={{ textDecoration: "underline" }} href="mailto:ebru@ebrukaya.me?subject=Freelance">Hire me</a>
				</Item>
				<Item>
					Investing in stocks.
				</Item>
			</ItemList>
			<SubTitle>Past</SubTitle>
			<ItemList>
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
