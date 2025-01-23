import { useNavbarStore } from "../store/useStore"
import { Link } from "react-router-dom"
import { Github } from 'lucide-react';

const Navbar: React.FC = () => {
	const { isOpen } = useNavbarStore()
	return (
		<nav className={`p-4 flex justify-between items-center gap-[12px]
		md:gap-[16px] absolute top-[70px] left-0 bg-white z-50 w-full md:static
		md:w-autotransition-transform duration-1000 ${isOpen ? "translate-y-0" :
				"-translate-y-96 md:translate-y-0"
			}`}>
			<Link to="/" className="flex items-center gap-1 text-[16px] pl-[16px] py-[8px]">
				Home
			</Link>
			<Link to="/docs" className="flex items-center gap-1 text-[16px] px-[16px]
			py-[8px]">
				Docs
			</Link>
			<Link to="https://github.com/Habib-007/owe-yoruba/" className="flex
			justify-center
			items-center gap-[6px] bg-black text-white px-[16px] py-[8px] rounded-md
			text-[16px]">
				<Github size={20} /> Github
			</Link>
		</nav>
	);
};

export default Navbar;