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
					I'm currently focused on <Tech style={{ borderBottom: '3px solid #f0db4f' }}>JavaScript</Tech> with React, <Tech style={{ borderBottom: '3px solid #83ba63' }}>Node.js</Tech> with
          Apollo and <Tech style={{ borderBottom: '3px solid #e535ab' }}>GraphQL</Tech>
				</Item>
				<Item>
					My main technology stack has been <Tech style={{ borderBottom: '3px solid #474a8a' }}>PHP</Tech>, <Tech>MySQL</Tech>, <Tech>HTML</Tech> and <Tech>CSS</Tech> so far.
				</Item>
				<Item>
					I have also worked with <Tech style={{ borderBottom: '3px solid #306998' }}>Python</Tech> and <Tech>AWS Serverless</Tech> to build some projects.
				</Item>
				<Item>
					I have some knowledge on <Tech style={{ borderBottom: '3px solid #0db7ed' }}>Docker</Tech> for containerization and <Tech style={{ borderBottom: '3px solid #ff9900' }}>AWS</Tech> services to build full stack applications.
				</Item>
				<Item>
					I love to do <Tech>Test-Driven Development</Tech> if there is an efficient case to use.
				</Item>
				<Item>
					I'm familiar with <Tech>Agile Methodologies</Tech> using <Tech>Scrum</Tech> and <Tech>Kanban</Tech>
				</Item>
				<Item>
					I use <Tech>Git</Tech>, <Tech>Terminal</Tech> and have some experience on <Tech>CI/CD</Tech> with <Tech style={{ borderBottom: '3px solid #d24939' }}>Jenkins</Tech>
				</Item>
			</StackList>
			<CurrentLearning>
				<BoldText>Currently learning: </BoldText>
				GraphQL with Prisma, PostgreSQL
      </CurrentLearning>
		</>
	)
}

export default SkillsCard