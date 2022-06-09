import React from 'react'
import './MainDash.scss'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'

const MainDash = () => {
	return (
		<div className="MainDash">
			<h1>Dashboard</h1>
			<Cards />
			<Table />
		</div>
	)
}

export default MainDash
