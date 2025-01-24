import { Link } from "react-router-dom"
import { Github } from "lucide-react"

const HeroSectionOne = () => {
	return (
		<section style={{
			minHeight: "calc(100vh - 100px)"
		}} className="flex flex-col justify-center items-center gap-[30px]	bg-gradient-to-tr from-purple-200 via-white to-white text-center p-[14px]">
			<div className="flex flex-col justify-center items-center gap-[6px]">
				<h3 className="font-extrabold text-[24px] text-black">Free REST API for Yoruba Proverbs</h3>
				<strong className="text-[16px]">Say, Translate, Meaning.</strong>
				<p className="mt-[10px] text-[14px] leading-1">Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Tenetur illo, provident cum tempora recusandae.</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-[14px]">
				<Link to="https://github.com/Habib-0007/owe-yoruba" className="border-2 border-black flex	justify-center
			items-center gap-[6px] bg-purple-300 text-black px-[16px] py-[8px]
			text-[18px] rounded-lg shadow-[5px_3px_0_0_rgba(0,0,0,1)]
			hover:shadow-none hover:-translate-y-0.5
			hover:-translate-x-0.5 transition-all duration-200"><Github /> View on Github</Link>
				<Link to="/" className="border-2 border-black flex	justify-center
			items-center bg-white text-black px-[16px] py-[8px] rounded-lg
			shadow-[5px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:-translate-y-0.5
			hover:-translate-x-0.5 transition-all duration-200">Read
					Docs</Link>
				<p className="text-[10px]">Serving <strong>x numbers of</strong> requests monthly</p>
			</div>
		</section>
	)
}

export default HeroSectionOne