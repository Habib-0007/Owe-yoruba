import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Landing from './pages/Landing';
import GetProverbs from './pages/GetProverbs';
import GetProverbById from './pages/GetProverbById';
import PostProverb from './pages/PostProverb';
import PutProverb from './pages/PutProverb';
import DeleteProverb from './pages/DeleteProverb';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/landing" element={<Landing />} />
				<Route path="/docs/get-proverbs" element={<GetProverbs />} />
				<Route path="/docs/get-proverb-by-id" element={<GetProverbById />} />
				<Route path="/docs/post-proverb" element={<PostProverb />} />
				<Route path="/docs/put-proverb" element={<PutProverb />} />
				<Route path="/docs/delete-proverb" element={<DeleteProverb />} />
			</Routes>
		</Router>
	);
};

export default App;