import React from 'react'
import {
	SectionTitle,
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
			<SectionTitle><CustomEmoji label='working' emoji='👩🏻‍💻'></CustomEmoji> Side Projects</SectionTitle>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
					<div className={classes.flexSecondItem}>
						<div>
							<span className={classes.presentEmoji}><CustomEmoji label='explore' emoji='🤿' /></span> Built <CustomLink targetUrl='https://bucketmap.netlify.app'>Bucketmap</CustomLink>, a project to map some bucket list ideas to discover around the world. Here is <a style={{ textDecoration: 'underline' }} href='https://medium.com/@ebrukye/a-journey-of-making-a-little-side-project-d18088271876' target='_blank' rel='noopener noreferrer'>the story</a>. <Date>(2020)</Date>
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
					<CustomEmoji label='knitting' emoji='🧶' /> Co-founded <CustomLink targetUrl='https://www.instagram.com/mukavvaco/'>MUKAVVA</CustomLink>,
					a design brand that we created together with my two close friends in a very amateur way, an adventure inspired by nature and our travels... <Date>(2018)</Date>
				</Item>
				<Item>
					<CustomEmoji label='rocket' emoji='🚀' /> Created <CustomLink targetUrl='https://www.youtube.com/user/hayallerimdeben'>Hayallerimde Ben</CustomLink>,
					a storytelling project that I started to share my experiences through my bucket list journey between ages 18 and 25. <Date>(2013)</Date>
				</Item>
			</ItemList>
		</>
	)
}

export default SideProjectsCard
