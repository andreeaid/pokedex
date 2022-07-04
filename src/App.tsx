import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle, { Container } from './styles/global';
import Details from './components/details';
import Search from './components/search';
import Menu from './components/menu';

const App: React.FC = () => {
	return (
		<Router>
			<GlobalStyle />
			<Container>
				<Menu />
				<Routes>
					<Route path="/details/:name" element={<Details />} />
					<Route path="/" element={<Search />} />
				</Routes>
			</Container>
		</Router>
	);
};

export default App;
