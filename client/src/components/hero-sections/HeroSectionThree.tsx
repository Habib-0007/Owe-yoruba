import React from 'react'
import { Link } from 'react-router-dom'

const HeroSectionThree = () => {
	return (
		<section style={{
			minHeight: "calc(100vh - 100px)"
		}} className="flex flex-col justify-center items-center gap-[16px]
		bg-gradient-to-br from-purple-200 via-white to-white text-center p-[14px]">
			<h3 className="font-extrabold text-[28px] text-black">Ready-to-Use Proverbs for Your Projects</h3>
			<p className="mt-[10px] text-[16px] leading-1">Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Sunt quis mollitia numquam nihil ab.</p>
			<Link to="/docs" className="border-2 border-black flex	justify-center
			items-center bg-purple-200 text-black px-[16px] py-[8px] rounded-lg
			shadow-[5px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:-translate-y-0.5
			hover:-translate-x-0.5 transition-all duration-200">View More</Link>
		</section>
	)
}

export default HeroSectionThree