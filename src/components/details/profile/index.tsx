import React from 'react';
import pokeball from '../../../assets/pokeball.svg';
import { Thumbnail, Container, Identifier, Name } from './styles';

const Profile: React.FC<{ name: NameType; image: string; id: number }> = ({ name, image, id }) => {
	return (
		<Container>
			<Identifier>
				<img src={pokeball} alt="Pokeball" />
				<span>N0</span>
				{id}
			</Identifier>
			<Thumbnail src={image} />
			<Name>
				<span>{name?.english.toUpperCase()}</span>
				<span>/{name?.japanese}</span>
			</Name>
		</Container>
	);
};

export type NameType = {
	english: string;
	japanese: string;
};

export default Profile;
