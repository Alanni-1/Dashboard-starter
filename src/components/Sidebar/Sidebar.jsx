import React, { useState } from 'react'
// 样式
import './Sidebar.scss'

// 图标
import Logo from '../../imgs/logo.png'
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons'

// 文件
import { SidebarData } from '../../Data/Data'
import { motion } from 'framer-motion'

const Sidebar = () => {
	const [selected, setSelected] = useState(0)
	const [expanded, setExpanded] = useState(true)

	const sidebarVariants = {
		true: {
			left: '0',
		},
		false: {
			left: '-60%',
		},
	}

	return (
		<>
			<div
				className="bars"
				style={expanded ? { left: '45%' } : { left: '5%' }}
				onClick={() => setExpanded(!expanded)}
			>
				<UilBars />
			</div>
			<motion.div
				className="Sidebar"
				variants={sidebarVariants}
				animate={window.innerWidth <= 768 ? `${expanded}` : ''}
			>
				{/* logo */}
				<div className="logo">
					<img src={Logo} alt="" />
					<span>
						Sh<span>o</span>ps
					</span>
				</div>

				{/* menu */}
				<div className="menu">
					{SidebarData.map((item, index) => (
						<div
							className={
								selected === index
									? 'menuItem active'
									: 'menuItem'
							}
							key={item.id}
							onClick={() => setSelected(index)}
						>
							{item.logo}
							<span>{item.text}</span>
						</div>
					))}
					<div className="menuItem">
						<UilSignOutAlt />
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Sidebar
