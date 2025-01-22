import React from 'react';
import { Link } from "react-router-dom"
import { Home, Search } from 'lucide-react';

const Navbar: React.FC = () => {
	return (
		<nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
			<h1 className="text-2xl font-bold"> Owé Yoruba API</h1>
			<div className="flex gap-4">
				<Link to="/" className="flex items-center gap-1">
					<Home size={20} /> Home
				</Link>
				{/*	<a href="/search" className="flex items-center gap-1">
					<Search size={20} /> Search
				</a> */ }
			</div>
		</nav>
	);
};

export default Navbar;