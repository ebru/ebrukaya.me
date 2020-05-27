import React from 'react'
import ReactTooltip from 'react-tooltip'
import {
	SectionTitle,
	SubTitle,
	ItemList,
	Item,
	Date
} from './../section-card/section-card.styles'
import BucketmapImg from '../../images/bucketmap.jpg'
import TemettuImg from '../../images/temettu.jpg'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from './../custom-link/custom-link.component'
import useStyles from './side-projects-card.styles'

const SideProjectsCard = () => {
	const classes = useStyles()

	return (
		<>
			<SectionTitle><CustomEmoji label='working' emoji='👩🏻‍💻'></CustomEmoji> Side Projects</SectionTitle>
			<SubTitle>Present</SubTitle>
			<div className={classes.flexContainer}>
				<div className={classes.flexFirstItem}>
					<div>
						<span className={classes.presentEmoji}><CustomEmoji label='investment' emoji='💸' /></span> <CustomLink targetUrl='https://temettu.app'>Temettü</CustomLink>, a mobile app that helps you to track the dividend payments of your stock investments. <Date>(2020)</Date>
						<br /> Here is <a data-tip='pretty soon' style={{ textDecoration: 'underline' }} href='javacript:void(0)'>the story</a>.
						<ReactTooltip place='bottom' effect='solid' />
					</div>
					<CustomLink targetUrl='https://temettu.app'>
						<img
							className={classes.itemImage}
							src={TemettuImg}
							alt='temettu'
						/>
					</CustomLink>
				</div>
				<div className={classes.flexSecondItem}>
					<div>
						<span className={classes.presentEmoji}><CustomEmoji label='explore' emoji='🤿' /></span> <CustomLink targetUrl='https://bucketmap.co'>Bucketmap</CustomLink>, a project to map some bucket list ideas to discover around the world. <Date>(2020)</Date>
						<br /> Here is <a style={{ textDecoration: 'underline' }} href='https://medium.com/@ebrukye/a-journey-of-making-a-little-side-project-d18088271876' target='_blank' rel='noopener noreferrer'>the story</a>.
					</div>
					<CustomLink targetUrl='https://bucketmap.co'>
						<img
							className={classes.itemImage}
							src={BucketmapImg}
							alt='bucketmap'
						/>
					</CustomLink>
				</div>
			</div>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
					<CustomEmoji label='headphone' emoji='🎧' /> Built <CustomLink targetUrl='https://github.com/ebru/euphony'>Euphony</CustomLink>,
					a little side project to improve my React, Node.js, Docker and AWS knowledge. <Date>(2019)</Date>
				</Item>
				<Item>
					<CustomEmoji label='check' emoji='✔️' /> Built <CustomLink targetUrl='https://github.com/ebru/listpie'>Listpie</CustomLink>,
					the very first app that I have developed during my journey to learn mobile development as a personal interest in my free time. <Date>(2018)</Date>
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
