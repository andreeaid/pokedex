import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { usePokedex } from '../../utils/hooks/usePokedex';
import Profile from './profile';
import Stats from './stats';
import Info from './info';
import { Container, InfoRow, Wrapper, LongRow, Info as InfoSection, Title } from './styles';

const Details: React.FC = () => {
	const { name: urlName } = useParams();

	const { getPokemonDetails } = usePokedex();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const pokemonDetails = useMemo(() => getPokemonDetails(urlName!), [urlName, getPokemonDetails]);

	if (!!!pokemonDetails) return null;
	const { name, image, id, type, description, profile, species, base } = pokemonDetails;

	return (
		<Container>
			<Profile name={name} image={image?.hires!} id={id} />
			<Wrapper>
				<Title>
					<span>PROFILE</span>
				</Title>
				<Info type={type} profile={profile!} species={species} />
				<Stats base={base!} />
				<Title>
					<span>TRAINER MEMO</span>
				</Title>
				<LongRow $top={false}>
					<InfoSection>
						<InfoRow $top={false}>
							<span>{description}</span>
						</InfoRow>
					</InfoSection>
				</LongRow>
			</Wrapper>
		</Container>
	);
};

export default Details;
