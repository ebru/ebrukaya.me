import React from 'react'
import {
	SubTitle,
	ItemList,
	Item,
	Date
} from './../section-card/section-card.styles'
import BucketmapImg from '../../images/bucketmap.jpg'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from './../custom-link/custom-link.component'
import useStyles from './side-projects-card.styles'

const SideProjectsCard = () => {
	const classes = useStyles()

	return (
		<>
			<SubTitle>Present</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='temettu2' emoji='📊' /> Co-Building <CustomLink targetUrl='https://temettu.app'>Temettü 2.0</CustomLink>,
					an improved version for both mobile and web of the previous mobile app that helps you to follow dividend investments. <Date>(2024)</Date>
				</Item>
				<Item>
					<CustomEmoji label='mockup' emoji='🏗️' /> Co-Building <CustomLink targetUrl='https://mockupgenerator.co'>Mockup Generator</CustomLink>,
					an online tool that helps you to create product mockups in seconds and saves a lot of time with bulk mockup generations. <Date>(2023)</Date>
				</Item>
				<Item>
					<CustomEmoji label='infie' emoji='🪙' /> Building <CustomLink targetUrl='https://infie.app'>Infie</CustomLink>,
					a simple and easy-to-use app to track your personal finances. <Date>(2025)</Date>
				</Item>
			</ItemList>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='bird' emoji='🐦' /> Co-Built <CustomLink targetUrl='https://assistivecards.com/wingo'>Wingo</CustomLink>,
					a daily planner mobile app for kids. <Date>(2022)</Date>
				</Item>
				<Item>
					<CustomEmoji label='stocks' emoji='💹' /> Built <CustomLink targetUrl='https://temettu.app'>Temettü</CustomLink>,
					a mobile app that helps you to follow the dividend calendar and track the dividend payments of your stock investments. <Date>(2020)</Date>
				</Item>
				<Item>
					<CustomEmoji label='noe' emoji='🟣' /> Founded <CustomLink targetUrl='https://noecrafts.com'>Noe Crafts</CustomLink>,
					a handcrafted design and software studio that focuses on bringing product ideas to life. <Date>(2020)</Date>
				</Item>
				<Item>
					<div className={classes.flexSecondItem}>
						<div>
							<span className={classes.presentEmoji}><CustomEmoji label='explore' emoji='🤿' /></span> Built <CustomLink targetUrl='https://ebrukye.medium.com/a-journey-of-making-a-little-side-project-d18088271876'>Bucketmap</CustomLink>, a project to map some bucket list ideas to discover around the world. Here is <a style={{ textDecoration: 'underline' }} href='https://medium.com/@ebrukye/a-journey-of-making-a-little-side-project-d18088271876' target='_blank' rel='noopener noreferrer'>the story</a>. <Date>(2020)</Date>
						</div>
						<CustomLink targetUrl='https://ebrukye.medium.com/a-journey-of-making-a-little-side-project-d18088271876'>
							<img
								className={classes.itemImage}
								src={BucketmapImg}
								alt='bucketmap'
							/>
						</CustomLink>
					</div>
				</Item>
				<Item>
					<CustomEmoji label='knitting' emoji='🧶' /> Co-Founded <CustomLink targetUrl='https://instagram.com/mukavvaco/'>MUKAVVA</CustomLink>,
					a design brand that we created together with my two close friends in a very amateur way, an adventure inspired by nature and our travels... <Date>(2018)</Date>
				</Item>
				<Item>
					<CustomEmoji label='rocket' emoji='🚀' /> Created <CustomLink targetUrl='https://youtube.com/hayallerimdeben'>Hayallerimde Ben</CustomLink>,
					a storytelling project that I started to share my experiences through my bucket list journey between ages 18 and 25. <Date>(2013)</Date>
				</Item>
			</ItemList>
		</>
	)
}

export default SideProjectsCard
