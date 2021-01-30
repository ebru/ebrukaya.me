import React from 'react'

import {
	SectionTitle,
	StackList,
	Item,
	Tech,
	CurrentLearning,
	BoldText
} from './../section-card/section-card.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const SkillsCard = () => {
	return (
		<>
			<SectionTitle><CustomEmoji label='tool' emoji='🛠' /> Technology Stack</SectionTitle>
			<StackList>
				<Item>
					I'm currently focused on <Tech style={{ borderBottom: '3px solid #f0db4f' }}>JavaScript</Tech> with <Tech style={{ borderBottom: '3px solid #60dafb' }}>React</Tech> and <Tech style={{ borderBottom: '3px solid #60dafb' }}>React Native</Tech> on the front end, <Tech style={{ borderBottom: '3px solid #83ba63' }}>Node.js</Tech> on the back end preferably with <Tech style={{ borderBottom: '3px solid #e535ab' }}>GraphQL</Tech> or old good friend <Tech>REST</Tech>
				</Item>
				<Item>
					I have some knowledge on <Tech style={{ borderBottom: '3px solid #0db7ed' }}>Docker</Tech> for containerization and <Tech style={{ borderBottom: '3px solid #ff9900' }}>AWS</Tech> services to build full stack applications.
				</Item>
				<Item>
					I'm familiar with <Tech>Agile Methodologies</Tech> using <Tech>Scrum</Tech> and <Tech>Kanban</Tech>
				</Item>
				<Item>
					I might also have a bit sense of <Tech>UI/UX Design</Tech>
				</Item>
			</StackList>
			<CurrentLearning>
				<BoldText>Currently learning: </BoldText>
				Figma, UI/UX design in depth
      </CurrentLearning>
		</>
	)
}

export default SkillsCard
