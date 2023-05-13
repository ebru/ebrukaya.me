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
					<CustomEmoji label='investment' emoji='🪙' /> Building <CustomLink targetUrl='https://infie.app'>Infie</CustomLink>,
					a mobile app for tracking all kinds of investments in one place. <Date>(2023)</Date>
				</Item>
				<Item>
					<CustomEmoji label='love' emoji='💟' /> Building <CustomLink targetUrl='https://dateideas.ai'>Date Ideas</CustomLink>,
					a web app powered by AI for generating customized date ideas for any occasion. <Date>(2023)</Date>
				</Item>
				<Item>
					<CustomEmoji label='peanut' emoji='🥜' /> Co-Building <CustomLink targetUrl='https://runwildpeanut.com'>Run Wild Peanut</CustomLink>,
					a community and apparel store for outdoor and nature enthusiasts. #Stay cozy and adventure on. <Date>(2023)</Date>
				</Item>
				<Item>
					<CustomEmoji label='stocks' emoji='💹' /> Co-Building <CustomLink targetUrl='https://temettu.app'>Temettü 2.0</CustomLink>,
					a new version is on the way that will make the following dividends experience better. <Date>(2023)</Date>
				</Item>
			</ItemList>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='mockup' emoji='🏗️' /> Co-Built <CustomLink targetUrl='https://mockupgenerator.co'>Mockup Generator</CustomLink>,
					an online tool that helps you to create free mockups in seconds and saves a lot of time for bulk mockup generations. <Date>(2023)</Date>
				</Item>
				<Item>
					<CustomEmoji label='printable' emoji='🖼️' /> Co-Built <CustomLink targetUrl='https://makeprintable.ai'>MakePrintable.AI</CustomLink>,
					a web app powered by AI for creating high-resolution printable assets. <Date>(2023)</Date>
				</Item>
				<Item>
					<CustomEmoji label='bird' emoji='🦊' /> Built <CustomLink targetUrl='https://gogiftem.com'>Go Gift'em</CustomLink>,
					a web app to explore curated gift ideas for many interests. <Date>(2022)</Date>
				</Item>
				<Item>
					<CustomEmoji label='bird' emoji='🐦' /> Co-Built <CustomLink targetUrl='https://assistivecards.com/wingo'>Wingo</CustomLink>,
					a daily planner mobile app for kids. <Date>(2022)</Date>
				</Item>
				<Item>
					<CustomEmoji label='stocks' emoji='💹' /> Built <CustomLink targetUrl='https://temettu.app'>Temettü</CustomLink>,
					a mobile app that helps you to follow the dividend calendar and track the dividend payments of your stock investments. <Date>(2020)</Date>
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
