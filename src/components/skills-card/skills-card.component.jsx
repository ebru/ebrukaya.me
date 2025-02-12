import React from 'react'
import {
	StackList,
	Item,
	Tech,
	CurrentLearning,
	BoldText
} from './../section-card/section-card.styles'


const SkillsCard = () => {
	return (
		<>
			<StackList>
				<Item>
					I'm currently focused on <Tech style={{ borderBottom: '3px solid #007acc' }}>TypeScript</Tech>, <Tech style={{ borderBottom: '3px solid #f0db4f' }}>JavaScript</Tech> with <Tech style={{ borderBottom: '3px solid #60dafb' }}>React</Tech> and <Tech style={{ borderBottom: '3px solid #60dafb' }}>React Native</Tech> on the frontend, <Tech style={{ borderBottom: '3px solid #83ba63' }}>Node.js</Tech> on the backend with <Tech>REST</Tech> / <Tech style={{ borderBottom: '3px solid #e535ab' }}>GraphQL</Tech>
				</Item>
				<Item>
					I have product-first mindset, always prioritizing user needs.
				</Item>
				<Item>
					I might also have a bit sense of <Tech>UI/UX Design</Tech>
				</Item>
			</StackList>
			<CurrentLearning>
				<BoldText>Currently learning: </BoldText>
				Business for Developers
			</CurrentLearning>
		</>
	)
}

export default SkillsCard
