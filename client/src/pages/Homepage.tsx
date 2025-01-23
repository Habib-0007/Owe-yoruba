import React from 'react'
import Header from "../components/Header.tsx"
import FlittedSpray from "../components/FlittedSpray"
import Footer from "../components/Footer.tsx"
import HeroSections from "../components/HeroSections"

const Homepage = () => {
	return (
		<section>
			<Header />
			<HeroSections />
			<Footer />
		</section>
	)
}

export default Homepage