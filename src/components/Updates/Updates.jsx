import React from 'react'
import { UpdatesData } from '../../Data/Data'
import './Updates.scss'

const Updates = () => {
	return (
		<div className="Updates">
			{UpdatesData.map((update, index) => (
				<div className="update" key={index}>
					<img src={update.img} alt="" />
					<div className="noti">
						<div style={{ marginBottom: '0.5rem' }}>
							<span>{update.name}</span>
							<span>{update.noti}</span>
						</div>
						<div>{update.time}</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Updates
