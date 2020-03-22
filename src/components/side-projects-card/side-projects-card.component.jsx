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

const SideProjectsCard = () => {
	return (
		<>
			<SectionTitle><CustomEmoji label='working' emoji='👩🏻‍💻'></CustomEmoji> Side Projects</SectionTitle>
			<SubTitle>Present</SubTitle>
			<div
				style={{
					display: 'flex',
					marginTop: 10,
					justifyContent: 'space-evenly',
				}}
			>
				<div
					style={{
						display: 'flex',
						marginRight: 30,
						marginBottom: 20,
						flex: 1,
						justifyContent: 'space-between'
					}}>
					<div
						style={{ marginRight: 15 }}
					>
						<CustomEmoji label='question' emoji='🦊' /> In progress. <br /> This will be the second project of this year. I go with React Native this time to gain a little hands on experience.
					</div>
					<div
						style={{
							borderRadius: 4,
							minWidth: 100,
							width: 100,
							height: 60,
							backgroundColor: '#f4f4f4',
							marginTop: 5,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							color: '#777',
							fontSize: 24
						}}
					>
						/?
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flex: 1,
						marginBottom: 20,
						justifyContent: 'space-between'
					}}>
					<div
						style={{ marginRight: 15 }}
					>
						<CustomEmoji label='explore' emoji='🤿' /> Working on <CustomLink targetUrl='https://bucketmap.co'>Bucketmap</CustomLink>, a project to list the things to do around the world before you die. <Date>(2020)</Date>
						<br /> Here is <a style={{ textDecoration: 'underline' }} href='/' rel='noopener noreferrer'>the story</a>.
					</div>
					<CustomLink targetUrl='https://bucketmap.co'>
						<img
							style={{
								borderRadius: 4,
								minWidth: 100,
								width: 100,
								height: 60,
								objectFit: 'cover',
								marginTop: 5
							}}
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
