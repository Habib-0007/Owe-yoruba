import React from 'react'
import HeroSectionOne from "./hero-sections/HeroSectionOne"
import HeroSectionTwo from "./hero-sections/HeroSectionTwo"
import HeroSectionThree from "./hero-sections/HeroSectionThree"
import HeroSectionFour from "./hero-sections/HeroSectionFour"

const HeroSections = () => {
	return (
		<section>
			<HeroSectionOne />
			<HeroSectionTwo />
			<HeroSectionThree />
			<HeroSectionFour />
		</section>
	)
}

export default HeroSections