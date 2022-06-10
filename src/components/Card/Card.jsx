import React, { useState } from 'react'
// 样式
import './Card.scss'
import 'react-circular-progressbar/dist/styles.css'

// 文件
import { motion, AnimateSharedLayout } from 'framer-motion' // react动画库
import { CircularProgressbar } from 'react-circular-progressbar' // react环形进度条组件
import { UilTimes } from '@iconscout/react-unicons'
import Chart from 'react-apexcharts' // react的图表库

const Card = (props) => {
	// 控制表格是否显示
	const [expanded, setExpanded] = useState(false)

	return (
		<AnimateSharedLayout>
			{expanded ? (
				<ExpandedCard
					param={props}
					setExpanded={() => setExpanded(false)}
				/>
			) : (
				<CompactCard
					param={props}
					setExpanded={() => setExpanded(true)}
				/>
			)}
		</AnimateSharedLayout>
	)
}

// ExpandedCard组件
function ExpandedCard({ param, setExpanded }) {
	const { color, title, series } = param
	const data = {
		options: {
			chart: {
				type: 'area',
				height: 'auto',
			},
			dropShadow: {
				enabled: false,
				enabledOnSeries: undefined,
				top: 0,
				left: 0,
				blur: 3,
				color: '#000',
				opacity: 0.35,
			},
			fill: {
				color: ['#fff'],
				type: 'gradient',
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
				colors: ['white'],
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm',
				},
			},
			grid: {
				show: true,
			},
			xaxis: {
				type: 'datetime',
				categories: [
					'2022-06-19T00:00:00:000Z',
					'2022-06-19T01:00:00:000Z',
					'2022-06-19T02:00:00:000Z',
					'2022-06-19T03:00:00:000Z',
					'2022-06-19T04:00:00:000Z',
					'2022-06-19T05:00:00:000Z',
					'2022-06-19T06:00:00:000Z',
				],
			},
		},
	}

	return (
		<motion.div
			className="ExpandedCard"
			style={{ background: color.backGround, boxShadow: color.boxShadow }}
			layoutId="expandableCard"
		>
			<div>
				<UilTimes onClick={setExpanded} />
			</div>
			<span>{title}</span>
			<div className="chartContainer">
				<Chart options={data.options} series={series} type="area" />
			</div>
			<span>Last 24 hours</span>
		</motion.div>
	)
}

// CompactCard组件
function CompactCard({ param, setExpanded }) {
	const { png, value, barValue, color, title } = param

	return (
		<motion.div
			className="CompactCard"
			style={{ background: color.backGround, boxShadow: color.boxShadow }}
			onClick={setExpanded}
			layoutId="expandableCard"
		>
			<div className="radialBar">
				<CircularProgressbar value={barValue} text={`${barValue}%`} />
				<span>{title}</span>
			</div>
			<div className="detail">
				{png}
				<span>${value}</span>
				<span>Last 24 hours</span>
			</div>
		</motion.div>
	)
}

export default Card
