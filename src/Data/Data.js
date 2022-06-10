import {
	UilEstate,
	UilClipboardAlt,
	UilUsersAlt,
	UilPackage,
	UilChart,
	UilUsdSquare,
	UilMoneyWithdrawal,
} from '@iconscout/react-unicons'

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

export const SidebarData = [
	{ id: 0, logo: <UilEstate />, text: 'Dashboard' },
	{ id: 1, logo: <UilClipboardAlt />, text: 'Orders' },
	{ id: 2, logo: <UilUsersAlt />, text: 'Customers' },
	{ id: 3, logo: <UilPackage />, text: 'Products' },
	{ id: 4, logo: <UilChart />, text: 'Analytics' },
]

export const CardsData = [
	{
		title: 'Sales',
		color: {
			backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
			boxShadow: '0px 10px 20px 0px #e0c6f5',
		},
		barValue: 70,
		value: '25,970',
		png: <UilUsdSquare />,
		series: [
			{
				name: 'Sales',
				data: [31, 40, 28, 51, 42, 109, 100],
			},
		],
	},
	{
		title: 'Revenue',
		color: {
			backGround: 'linear-gradient(180deg, #ff919d 0%, #fc929d 100%)',
			boxShadow: '0px 10px 20px 0px #fdc0c7',
		},
		barValue: 80,
		value: '14,270',
		png: <UilMoneyWithdrawal />,
		series: [
			{
				name: 'Revenue',
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},
	{
		title: 'Expenses',
		color: {
			backGround:
				'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)',
			boxShadow: '0px 10px 20px 0px #f9d59b',
		},
		barValue: 60,
		value: '4,270',
		png: <UilClipboardAlt />,
		series: [
			{
				name: 'Expenses',
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
]

export const UpdatesData = [
	{
		img: img1,
		name: 'Andirew Thomas',
		noti: 'has ordered Apple smart watch 2500mh battery.',
		time: '25 seconds age',
	},
	{
		img: img2,
		name: 'James Bond',
		noti: 'has received Samsung gadget for charging battery.',
		time: '30 minutes age',
	},
	{
		img: img3,
		name: 'Iron Man',
		noti: 'has ordered Apple smart watch, samsung Gear 2500mh battery.',
		time: '2 hours age',
	},
]
