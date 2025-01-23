import React from 'react';
import Navbar from "../components/Navbar.tsx"
import { Menu } from "lucide-react"
import { useNavbarStore } from "../store/useStore"

const Header: React.FC = () => {
	const { toggleMenu } = useNavbarStore()
	return (
		<header className="grid grid-cols-12 py-[16px] px-[14px] shadow-sm shadow-gray-300/50
		relative bg-white">
			<section className="col-start-1 col-end-13 md:col-start-2 md:col-end-12 flex
			justify-between items-center gap-[auto]">
				<h1 className="text-[24px] font-bold">Owé Yoruba</h1>
				<button className="font-bold md:hidden" onClick={() => toggleMenu()}>
					<Menu size={32} />
				</button>
				<Navbar />
			</section>
		</header>
	);
};

export default Header;