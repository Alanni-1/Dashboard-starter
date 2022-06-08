import React, { useState } from 'react'
// 样式
import './Sidebar.scss'

// 图标
import Logo from '../../imgs/logo.png'
import { UilSignOutAlt } from '@iconscout/react-unicons'

// 文件
import { SidebarData } from '../../Data/Data'

const Sidebar = () => {
	const [selected, setSelected] = useState(0)

	return (
		<div className="Sidebar">
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
							selected === index ? 'menuItem active' : 'menuItem'
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
		</div>
	)
}

export default Sidebar
