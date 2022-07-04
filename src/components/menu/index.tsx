import React from 'react';
import { Container, Title, MenuSelection, Dot } from './styles';
import github from '../../assets/github.svg';

const Nav: React.FC = () => {
	return (
		<Container>
			<Title to="/">
				POKéDEX
				<Dot $dark={false} />
			</Title>
			<MenuSelection>
				<Dot style={{ right: '128px' }} $dark />
				<Dot style={{ right: '74px' }} $dark />
				<Dot $dark />
			</MenuSelection>
			<a target="_blank" rel="noreferrer" href="https://github.com/andreeaid/pokedex">
				<img src={github} alt="Github" />
			</a>
		</Container>
	);
};

export default Nav;
