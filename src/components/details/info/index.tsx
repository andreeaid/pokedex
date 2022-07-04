import React from 'react';
import { usePokedex } from '../../../utils/hooks/usePokedex';
import { Container, InfoRow, Row, Info as InfoSection } from './styles';
import Label from '../../label';

const Info: React.FC<{ type: Array<string>; profile: Profile; species: string }> = ({ type, profile, species }) => {
	const { getTypeColor } = usePokedex();

	return (
		<Container>
			<Row $top={false} $long={false}>
				<InfoSection>
					<InfoRow $top>
						<div>TYPE</div>
					</InfoRow>
					<InfoRow $top={false}>
						<div>
							{type.map((item) => (
								<Label key={item} text={item} color={getTypeColor(item)!} htmlFor="" />
							))}
						</div>
					</InfoRow>
				</InfoSection>
			</Row>
			<Row $top={false} $long={false}>
				<InfoSection>
					<InfoRow $top>
						<div>SPECIES</div>
					</InfoRow>
					<InfoRow $top={false}>
						<span>{species}</span>
					</InfoRow>
				</InfoSection>
			</Row>
			<Row $top $long>
				<InfoSection>
					<InfoRow $top>
						<div>ABILITIES</div>
					</InfoRow>
					<InfoRow $top={false}>
						{profile.ability?.map((value) => (
							<span key={value[0]}>{value[0]}</span>
						))}
					</InfoRow>
				</InfoSection>
			</Row>
			<Row $top $long>
				<InfoSection>
					<InfoRow $top>
						<div>PHYSIOLOGY</div>
					</InfoRow>
					<InfoRow $top={false}>
						<span>
							Weights {profile.weight} at {profile.height}
						</span>
					</InfoRow>
				</InfoSection>
			</Row>
		</Container>
	);
};

type Profile = {
	height: string;
	weight: string;
	ability: Array<Array<string>>;
};

export default Info;
