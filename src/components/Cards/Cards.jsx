import React from 'react'
// 样式
import './Cards.scss'

// 文件
import Card from '../Card/Card'

// 数据
import { CardsData } from '../../Data/Data'

const Cards = () => {
	return (
		<div className="Cards">
			{CardsData.map((item, index) => (
				<div className="parenContainer" key={index}>
					<Card
						title={item.title}
						color={item.color}
						barValue={item.barValue}
						value={item.value}
						png={item.png}
						series={item.series}
					/>
				</div>
			))}
		</div>
	)
}

export default Cards
